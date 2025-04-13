# 📝 Task Tracker Backend (NestJS)

This is the **backend API** for the Task Tracker application, built using **NestJS** and **MongoDB**. It powers the authentication, task management, and user data for the frontend Angular app.

---

## 🔧 Features

- 🔐 **User Authentication**
  - Register with email & password
  - Secure login with JWT authentication
  - Login allowed only after registration

- ✅ **Task Management**
  - Create, fetch, and delete tasks
  - Tasks are linked to the authenticated user
  - Each user has access to only their own tasks

- 🌙 **Dark/Light Mode Support**
  - User's theme preference can be stored and updated

- ❤️ **Health Tips**
  - API endpoint to fetch general health/wellness tips
