import { Request, Response } from "express";
import db from "../db";
import { RowDataPacket, OkPacket } from "mysql2";

interface Answer extends RowDataPacket {
  id: number;
  question_id: number;
  answer_text: string;
  likes: number;
  created_at: Date;
}

interface InsertResult extends OkPacket {
  insertId: number;
}

export const getAnswersByQuestionId = (req: Request, res: Response) => {
  const { questionId } = req.params;

  db.query<Answer[]>(
    "SELECT * FROM answers WHERE question_id = ? ORDER BY created_at DESC",
    [questionId],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Failed to fetch answers" });
      }
      res.json(results);
    }
  );
};

export const addAnswer = (req: Request, res: Response) => {
  const { questionId } = req.params;
  const { answer_text } = req.body;

  const sql = "INSERT INTO answers (question_id, answer_text) VALUES (?, ?)";
  db.query<InsertResult>(sql, [questionId, answer_text], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to add answer" });
    }
    res.status(201).json({ message: "Answer added", id: results.insertId });
  });
};

export const likeAnswer = (req: Request, res: Response) => {
  const { id } = req.params; // ✅ not answerId

  const sql = "UPDATE answers SET likes = likes + 1 WHERE id = ?";
  db.query<OkPacket>(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to like answer" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Answer not found" });
    }
    res.json({ message: "Answer liked" });
  });
};

