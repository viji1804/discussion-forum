import express from "express";
import {
  getAllQuestions,
  createQuestion,
  getQuestionById,
} from "../controllers/questionController";

const router = express.Router();

router.get("/", getAllQuestions);
router.get("/:id", getQuestionById);
router.post("/", createQuestion);

export default router;
