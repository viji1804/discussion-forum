import { Request, Response } from "express";
import db from "../db";
import { RowDataPacket, OkPacket } from "mysql2";

interface Question extends RowDataPacket {
  id: number;
  title: string;
  description: string;
  tags: string;
  created_at: Date;
}

interface InsertResult extends OkPacket {
  insertId: number;
}

export const getAllQuestions = (req: Request, res: Response) => {
  db.query<Question[]>(
    "SELECT * FROM questions ORDER BY created_at DESC",
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Failed to fetch questions" });
      }
      res.json(results);
    }
  );
};

export const getQuestionById = (req: Request, res: Response) => {
  const { id } = req.params;
  db.query<Question[]>(
    "SELECT * FROM questions WHERE id = ?",
    [id],
    (err, results) => {
      if (err || results.length === 0) {
        return res.status(404).json({ error: "Question not found" });
      }
      res.json(results[0]);
    }
  );
};

export const createQuestion = (req: Request, res: Response) => {
  const { title, description, tags } = req.body;
  const sql =
    "INSERT INTO questions (title, description, tags) VALUES (?, ?, ?)";
  db.query<InsertResult>(sql, [title, description, tags], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to create question" });
    }
    res.status(201).json({ message: "Question created", id: results.insertId });
  });
};
