# COMP3133_101275514_Assignment2 – Angular GraphQL Employee Portal

## 👨‍🎓 Student Information
- **Name:** Luilson Sousa  
- **Student ID:** 101275514  
- **Course:** COMP3133 – Web and Enterprise Application Development  
- **Assignment:** Individual Assignment 2 – Full Stack Integration with Angular + GraphQL

---

## 📌 Project Description

This project extends the GraphQL API from Assignment 1 by adding a professional **Angular frontend** using **Apollo Angular** for GraphQL communication. The application allows users to:

- 🔐 Login and Signup
- 🔎 View, Add, Update, and Delete Employees
- 💾 Store JWT token in `localStorage` for session management
- 🧭 Navigate using Angular Router with Standalone Components

---

## 🧰 Technologies Used

### Backend
- Node.js
- Express.js
- Apollo Server (GraphQL)
- MongoDB Atlas + Mongoose
- JWT Authentication
- Dotenv

### Frontend
- Angular 16+ (Standalone Components)
- Apollo Angular
- TypeScript
- FormsModule & RouterModule
- Custom CSS

---

## 🚀 How to Run the Project

### 1. Start the Backend

```bash
cd COMP3133_101275514_Assignment2
npm install
```

Create a `.env` file:
```env
PORT=5001
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
```

Start the server:
```bash
npx nodemon server.js
```

GraphQL should be running at [http://localhost:5001/graphql](http://localhost:5001/graphql)

---

### 2. Start the Frontend

```bash
cd frontend
npm install
ng serve --port 4300
```

Visit: [http://localhost:4300](http://localhost:4300)

If blank page appears, go to [http://localhost:4300/login](http://localhost:4300/login)

---

## 📂 Folder Structure

```
COMP3133_101275514_Assignment2/
│
├── server.js
├── graphql/
├── models/
├── .env
│
├── frontend/
│   └── src/
│       └── app/
│           └── components/
│               ├── login/
│               ├── signup/
│               ├── employee-list/
│               ├── employee-add/
│               └── ...
```

---

## 📸 Screenshots (To be added)
- GraphQL Playground
- Angular Login/Signup UI
- Employee List and Detail View

---

## ☁️ Deployment (To be done)
| Module     | Platform               | Status     |
|------------|------------------------|------------|
| Backend    | Heroku/Cyclic/Vercel   | ❌ Pending |
| Frontend   | Vercel/Netlify         | ❌ Pending |

---

## ✅ Assignment Requirements Checklist

- [x] Angular project with correct naming ✅
- [x] GitHub repo with correct structure ✅
- [x] Backend integration (Assignment 1 reused) ✅
- [x] Login/Signup screens implemented ✅
- [x] Routing with Angular Router ✅
- [x] Session stored in `localStorage` ✅
- [x] Navigates to `/employees` after login ✅
- [ ] Deployed backend and frontend ❌ (To be completed)

---

## 📅 Last Updated
April 08, 2025
