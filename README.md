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

UI:
![WhatsApp Image 2025-04-23 at 02 43 00_3c6ec6f6](https://github.com/user-attachments/assets/8060616f-5ff5-4cb8-a862-75167be7cfd3)
![WhatsApp Image 2025-04-23 at 02 43 21_a823d0f9](https://github.com/user-attachments/assets/a9d56bfa-56df-4280-8571-b2f777031c98)
![WhatsApp Image 2025-04-23 at 02 43 43_ca81ebf6](https://github.com/user-attachments/assets/2d336935-01b5-435a-8b21-c99d6476b239)
![WhatsApp Image 2025-04-23 at 02 44 05_9ef96c1a](https://github.com/user-attachments/assets/2ed1db2a-f33e-4950-9a77-82d1824d02fd)




