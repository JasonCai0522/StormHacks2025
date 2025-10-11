# StormHacks2025 — AI Journaling & Feedback Web App

## 🧠 Overview  
StormHacks2025 is a full‑stack web application that lets users write personal journal entries and receive AI-powered improvement suggestions. Users can authenticate, manage their journals, and leverage a Gemini AI integration to get feedback. The app demonstrates end-to-end skills in frontend, backend, security, and deployment.

### See our project here:
https://journifyai.onrender.com

*Note: Due to the free backend hosting service, if login and registration fails, please wait ~1 minute and try again.*


---

## 🚀 Features

- User registration & login (JWT-based authentication)  
- Create, read, update, delete (CRUD) journal entries  
- Send entries to **Gemini AI** to receive suggestions/refinements  
- Secure REST API with protected endpoints
- Responsive React frontend interface with protected routes
- Persistent data storage using MongoDB  
- Deployment on **Render** for hosting  

---

## 📁 Repository Structure

```text
/
├── backend/            ← Node.js / Express backend server  
│   ├── controllers/  
│   ├── models/  
│   ├── routes/  
│   ├── middleware/  
│   └── server.js  
│
├── frontend/           ← React application  
│   ├── src/  
│   ├── public/  
│   └── package.json  
│
├── .gitignore  
└── README.md  