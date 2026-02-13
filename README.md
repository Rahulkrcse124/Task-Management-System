# 🚀 Task Management Backend API
REGRIP INDIA PVT. LTD. – Backend Assignment

---

## 📌 Objective

This project implements a **robust backend for a Task Management System** using:

- Node.js (ES Modules)
- Express.js
- PostgreSQL
- JWT Authentication
- Email-based OTP Login
- Swagger Documentation

The system demonstrates:

- Clean API Design
- Secure Authentication & Authorization
- Middleware Architecture
- Rate Limiting
- Activity Logging
- Production-ready Structure

---

# 🌍 Hosted Backend URL

deployed URL


---

# 📘 API Documentation (Swagger)


Swagger provides interactive API testing.

---

# 🛠 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- JWT (Access + Refresh Tokens)
- Joi (Validation)
- Express Rate Limit
- Helmet (Security Headers)
- Swagger (API Docs)

---




# 📁 Project Structure

task-management-backend/
│
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── env.js
│   │
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.controller.js
│   │   │   ├── auth.service.js
│   │   │   ├── auth.routes.js
│   │   │   └── auth.validation.js
│   │   │
│   │   ├── tasks/
│   │   │   ├── task.controller.js
│   │   │   ├── task.service.js
│   │   │   ├── task.routes.js
│   │   │   └── task.validation.js
│   │   │
│   │   └── activity/
│   │       └── activity.service.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── validation.middleware.js
│   │   ├── rateLimiter.middleware.js
│   │   ├── requestLogger.middleware.js
│   │   └── error.middleware.js
│   │
│   ├── utils/
│   │   ├── generateOtp.js
│   │   ├── token.js
│   │   ├── hash.js
│   │   └── sendEmail.js
│   │
│   ├── docs/
│   │   └── swagger.js
│   │
│   ├── app.js
│   └── server.js
│
├── migrations/schema.sql
├── .env.example
├── package.json
├── README.md
└── Dockerfile






This modular structure improves scalability and maintainability.

---

# 🔐 Authentication Flow

### Step 1: Request OTP
User submits email → OTP generated → stored hashed in DB → sent via email (console for development).

### Step 2: Verify OTP
User submits OTP → verified → JWT tokens issued:

- Access Token (15 minutes)
- Refresh Token (7 days)

### Step 3: Access Protected Routes
User includes:


## Authorization: Bearer <access_token>

---

# 🔒 Security Features

- OTP hashed before storing
- OTP expiration (5 minutes)
- Rate limiting on authentication endpoints
- JWT short-lived access tokens
- Refresh token storage in DB
- Strict user-based data isolation
- Parameterized SQL queries (SQL injection safe)
- Helmet security headers
- Centralized error handling
- Activity logging for auditing

---

# ✅ Core Functionalities

Authenticated users can:

- Create Task
- View Their Tasks
- Update Their Tasks
- Delete Their Tasks

Strict authorization ensures users cannot access others' data.

---

# 🛡 Middleware Used

- Authentication Middleware
- Authorization (user isolation enforced in queries)
- Validation Middleware (Joi)
- Rate Limiting Middleware
- Request Logging Middleware
- Global Error Handling Middleware

---

# 📊 Activity Logging

The system logs:

- OTP requests
- Login success/failure
- Task creation
- Task updates
- Task deletion
- General API usage

Logs are stored in `activity_logs` table.

---

# ⚙️ Environment Variables

Create a `.env` file in root:


PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/tasks
JWT_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret


---

# 🗄 Database Setup

## Option 1: Local PostgreSQL

1. Install PostgreSQL
2. Create database:


CREATE DATABASE tasks;

3. Run schema:


psql -U postgres -d tasks -f migrations/schema.sql

---

## Option 2: Hosted PostgreSQL (Recommended)

Use Render or any cloud provider and paste the external database URL into `.env`.

---

# ▶️ Running Locally

1️⃣ Install dependencies:


npm install

2️⃣ Add `.env` file

3️⃣ Run server:


npm run dev

Server runs at:

http://localhost:5000

Swagger Docs:

http://localhost:5000/docs


---

# 🐳 Docker (Optional)

Build image:



Run container:

docker build -t task-api .


Run container:


docker run -p 5000:5000 --env-file .env task-api

---

# 📈 Deployment

Recommended platforms:

- Render
- Railway
- AWS
- Heroku

Deployment Steps:

1. Push code to GitHub
2. Create new Web Service
3. Add environment variables
4. Add PostgreSQL database
5. Deploy

---

# 🧠 Design Decisions & Architecture

### 1️⃣ Modular Architecture
Code is separated by feature (auth, tasks, activity) to improve scalability.

### 2️⃣ PostgreSQL
Chosen for relational integrity and production reliability.

### 3️⃣ JWT Authentication
Stateless authentication improves scalability.

### 4️⃣ Refresh Token Storage
Stored in DB to allow revocation.

### 5️⃣ Activity Logging
Ensures auditing and security traceability.

### 6️⃣ Middleware Separation
Each responsibility handled independently for clean architecture.

---

# 📌 Assumptions Made

- OTP delivery simulated via console (email integration can be added).
- Single-user system (no admin role required).
- Rate limiting set to basic limits suitable for demo environment.
- Refresh token rotation implemented at login stage.

---

# 🧪 Testing

Use:

- Swagger UI
- Postman
- cURL

---

# 📬 Submission Deliverables

- GitHub Repository Link
- Hosted Backend URL
- Swagger Documentation Link
- This README file

---

# 🎯 Conclusion

This backend demonstrates:

- Secure authentication practices
- Clean API architecture
- Proper middleware usage
- Secure coding standards
- Production-ready project structure

---

Developed as part of REGRIP INDIA PVT. LTD. Backend Assignment.
