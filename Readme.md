# Todo App — Full Stack Assignment

## Overview
(One paragraph describing the app in your own words.)

## Features
- User signup / login with JWT
- Forgot/reset password
- Create / Read / Update / Delete todos
- Mark todos completed
- Backend error logging into MongoDB logs collection

## Tech Stack
- Frontend: React + TypeScript, react-router, zustand, react-query, zod, react-hook-form
- Backend: Node.js + TypeScript, Express, MongoDB , Mongoose, JWT, bcrypt
- Deployment: (if used) Vercel / Netlify (frontend), Railway / Render (backend)

## Setup (local)
### Backend
1. `cd backend`
2. create `.env` with `MONGO_URI`, `JWT_SECRET`, `PORT`
3. `npm install`
4. `npm run dev` (or `ts-node-dev`)

### Frontend
1. `cd frontend`
2. `npm install`
3. create `.env` with `VITE_API_URL`
4. `npm run dev`

