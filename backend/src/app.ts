import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import questionRoutes from "./routes/questionRoutes";
import answerRoutes from "./routes/answerRoutes";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:4200", // frontend port
  })
);

app.use(express.json());

app.use("/api/questions", questionRoutes);
app.use("/api", answerRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to the Discussion Forum API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
