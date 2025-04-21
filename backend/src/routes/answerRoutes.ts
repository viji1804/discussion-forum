import express from "express";
import {
  getAnswersByQuestionId,
  addAnswer,
  likeAnswer,
} from "../controllers/answerController";

const router = express.Router();

router.get("/questions/:questionId/answers", getAnswersByQuestionId);
router.post("/questions/:questionId/answers", addAnswer);
router.put("/answers/:id/like", likeAnswer);

export default router;
