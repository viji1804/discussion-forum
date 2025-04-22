# discussion-forum
# 🗣️ Discussion Forum Web Application

A full-stack discussion forum web application where users can post questions, answer existing ones, like helpful responses, and filter or search for content with ease. Built using **Angular 16**, **Node.js (TypeScript)**, and **MySQL**, this project is focused on functionality, responsiveness, and simplicity — without requiring user authentication.

---

## 🚀 Features

- ✅ Post and view questions
- ✅ Answer questions
- ✅ Like or unlike answers
- ✅ Search questions by keyword
- ✅ Filter questions by tags or categories
- ✅ Sort answers by popularity
- ✅ Responsive and intuitive UI

---

## 🛠️ Tech Stack

| Layer      | Technology              |
|------------|--------------------------|
| Frontend   | Angular 16               |
| Backend    | Node.js (TypeScript)     |
| Database   | MySQL                    |
| Styling    | Tailwind CSS / Angular Material (optional) |
| Tools      | Postman, MySQL Workbench |

---

## 📁 Project Structure
```pgsql
discussion-forum/
├── backend/                         # Backend - Node.js (TypeScript)
│   ├── src/
│   │   ├── controllers/             # Route handler functions
│   │   │   ├── question.controller.ts
│   │   │   └── answer.controller.ts
│   │   ├── models/                  # Database models
│   │   │   ├── question.model.ts
│   │   │   └── answer.model.ts
│   │   ├── routes/                  # API routes
│   │   │   ├── question.routes.ts
│   │   │   └── answer.routes.ts
│   │   ├── config/                  # DB config and dotenv
│   │   │   └── db.ts
│   │   └── index.ts                 # App entry point
│   ├── .env                         # Environment variables
│   ├── tsconfig.json                # TypeScript configuration
│   └── package.json                 # Backend dependencies
│
├── frontend/                        # Frontend - Angular 16
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── question-list/
│   │   │   │   ├── question-detail/
│   │   │   │   ├── answer-form/
│   │   │   │   └── like-button/
│   │   │   ├── services/            # API service layer
│   │   │   │   ├── question.service.ts
│   │   │   │   └── answer.service.ts
│   │   │   └── app.module.ts
│   │   └── index.html
│   ├── angular.json                 # Angular CLI config
│   ├── package.json                 # Frontend dependencies
│   └── tsconfig.app.json
│
├── README.md
└── SQL/
    └── schema.sql                   # MySQL schema for DB setup
```
## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/viji1804/discussion-forum.git
cd discussion-forum
```
###2️⃣ Backend Setup (Node.js + MySQL)
```bash
cd backend
npm install
```
Create a .env file with the following content:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=discussion_forum
```

Run the server:
```bash
npm run dev
```
3️⃣ Frontend Setup (Angular 16)
```bash
cd ../frontend
npm install
ng serve
```

### 📌 API Endpoints

| Method | Endpoint                      | Description              |
|--------|-------------------------------|--------------------------|
| GET    | `/questions`                  | Get all questions        |
| POST   | `/questions`                  | Add a new question       |
| POST   | `/answers/:questionId`        | Answer a question        |
| PUT    | `/answers/:answerId/like`     | Like an answer |



