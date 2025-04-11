

---

```markdown
# 📝 Job Application Management System

A full-stack MERN (MongoDB, Express.js, React, Node.js) web application that allows users to submit job applications and provides an admin panel to view, manage, and download applications securely.

---

## 🚀 Features

### 👥 User
- Submit job applications with:
  - Name, Phone, Email, Address
  - Aadhaar Number, PAN Number
  - Resume (PDF upload)

### 🔐 Admin
- Login with email and password
- Protected admin panel using JWT and cookies
- View all submitted applications
- View/download uploaded resumes
- Future enhancements planned:
  - Delete application
  - Add status field (pending/approved/etc.)
  - Pagination and search

---

## 🗂 Project Structure

```
job-application-management/
├── backend/             # Node.js + Express + MongoDB
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/resumes/
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/            # React + Vite
│   ├── src/
│   ├── public/
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🛠 Installation

### 📦 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `/backend`:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

Start backend:

```bash
npm run dev
```

> Backend will run at: `http://localhost:5000`

---

### 🌐 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

> Frontend will run at: `http://localhost:5173`

Make sure all API requests include `withCredentials: true` in axios to allow secure cookie handling.

---

## 🔐 Authentication & Authorization Flow

1. Admin logs in using email/password.
2. If valid, a **JWT** is generated and sent as a secure `httpOnly` cookie.
3. Protected admin routes (e.g., `/api/admin/applications`) require valid token.
4. Middleware (`verifyToken`, `isAdmin`) checks token and admin role.
5. If valid, applications are fetched from MongoDB and displayed in the dashboard.

---

## 📄 Resume Handling

- Resumes uploaded via form and stored in `backend/uploads/resumes`
- Accessible via:
  ```
  http://localhost:5000/uploads/resumes/<filename>.pdf
  ```

- Example code to view/download resume in frontend:
  ```jsx
  <a
    href={`http://localhost:5000/${app.resume.replace(/\\/g, '/')}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    View Resume
  </a>
  ```

---

## 📌 To-Do Features

- [x] Admin login + JWT token handling
- [x] Resume view/download
- [ ] Delete application
- [ ] Status update (pending/approved/rejected)
- [ ] Pagination and search
- [ ] Deployment to Netlify (frontend) + Render (backend)

---

## 🧠 Tech Stack

- **Frontend:** React, Tailwind CSS, Axios, Vite
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, Multer, JWT
- **Authentication:** JWT-based (stored in secure cookies)

---

## 🧾 License

MIT License – use freely for learning and building on top of it.

