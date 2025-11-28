## 📝 Todo App – Full Stack (React + Node + TypeScript)

<!-- [![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://your-live-demo-url.com)  -->
<!--- TODO: Add your live demo link here -->

A clean and modern **Todo Management Application** built using a **full-stack TypeScript** setup.

It includes **authentication**, **password update**, and complete **CRUD operations** for todos — all wrapped inside a smooth, **responsive UI** built with **Chakra UI**.

This project was created as a learning-oriented full-stack assignment and follows real-world development patterns (protected routes, auth flows, component-based UI, API integrations, etc.).

---

### 🚀 Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend** | React (Vite), **TypeScript**,  Axios, **Zustand**, React Router DOM |
| **Backend** | Node.js (Express), **TypeScript**, **MongoDB** (Mongoose), **JWT Authentication**, bcrypt, CORS |

---

### ⭐ Features

#### 🔐 Authentication

* Signup
* Login
* Logout


#### 🗂️ Todo Management

* Add new todo
* View all todos
* Mark as completed/uncompleted
* Delete todo
* Todos are **user-specific**

#### 💾 Data Persistence

* Stored in **MongoDB** using Mongoose.


---
### 📁 Folder Structure

* **project/**
    * **backend/**
        * `package.json`
        * **src/**
            * `app.ts`, `server.ts`
            * `routes/`
            * `models/`
            * `middleware/`
    * **frontend/**
        * `package.json`
        * **src/**
            * `App.tsx`, `main.tsx`
            * `pages/`
            * `api/`
            * `hooks/`

### ✅ Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas account)

---

### 🔧 Setup and Installation

#### ⚙️ Backend Setup

1.  **Install dependencies**

    ```bash
    cd backend
    npm install
    ```

2.  **Add environment variables**

    Create a file named **`.env`** inside the `backend/` directory:

    ```env
    PORT=4000
    MONGO_URI=mongodb://localhost:27017/todoapp
    JWT_SECRET=your_secret_key_here
    ```

3.  **Run backend**

    ```bash
    npm run dev
    ```

    You should see:
    > Server listening on http://localhost:4000
    > Mongo connected

#### 🎨 Frontend Setup

1.  **Install dependencies**

    ```bash
    cd frontend
    npm install
    ```

2.  **Add environment variable**

    Create a file named **`.env`** inside the `frontend/` directory:

    ```env
    VITE_API_URL=http://localhost:4000/api
    ```

3.  **Run frontend**

    ```bash
    npm run dev
    ```

    Visit the app at: **👉 http://localhost:5173**

---

### 🧪 How to Use

1.  **Signup** with your name, email, and password.
2.  **Login** to your dashboard.
3.  **Add a new todo** using the input box.
4.  **Mark as complete** by checking the box.
5.  **Delete** using the delete button.
6.  **Update password** via the `/update-password` route.
7.  **Logout** using the top-right button.

---

### 🔗 API Endpoints

#### Auth

| Method | Route | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/signup` | Register a new user |
| `POST` | `/api/auth/login` | Login and get JWT token |


#### Todos

| Method | Route | Description |
| :--- | :--- | :--- |
| `POST` | `/api/todos` | Create a new todo |
| `GET` | `/api/todos` | Get all user-specific todos |
| `PUT` | `/api/todos/:id` | Update/mark a todo as complete/uncomplete |
| `DELETE` | `/api/todos/:id` | Delete a specific todo |

---

### 🧠 Concepts Used

* **Full-stack TypeScript** integration
* **JWT-based authentication** flow
* **Protected routes** (middleware)
* Axios **interceptors**
* **Chakra UI** component library
* **Zustand** for state management
* **React Router** for navigation
* **MongoDB schema modeling** (Mongoose)

---

### 🎯 Why I Built This

This project helped me understand:

* How **frontend & backend communicate** effectively.
* The complete **JWT flow** (signup → login → protected routes).
* **State management** best practices.
* **Styling** with a modern library like Chakra UI.
* Designing simple and **scalable APIs**.

It’s a great starting point for anyone learning **full-stack development**.

---

### 🚀 Future Improvements

* Forgot password + email reset
* Edit todo title
* Todo priority, tags & search functionality
* Dark mode (easy to implement with Chakra UI)
* Deploy on Vercel + Render
* Add animations & smooth transitions

---

### 🤝 Contributing

Feel free to **fork** this project, **submit PRs**, or **raise issues**. Contributions are welcome!

---

### 📜 License

This project is **open source**.      