# 🩷Tife's Todo App🩷

A modern, accessible, and responsive Todo application built with React and Chakra UI. 
This app now uses a remote Supabase database for data storage.

## 🔧 Features

* **Database Integration**: Data is stored persistently in a Supabase database, allowing cross-device access and reliable storage.
* Add, edit, delete, and prioritize tasks.
* Search and filter todos.
* Pagination support.
* Responsive design.
* Dark/light theme toggle.
* Accessible with keyboard and screen readers.

***

## 🚀 Installation and Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/tifee13/tife-todo-app-nextjs.git](https://github.com/tifee13/todo-app.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Configure Environment Variables:**
    Create a `.env.local` file in the project root and add your Supabase connection details.
    ```env
    NEXT_PUBLIC_SUPABASE_URL=https://ymojzeysdxeoongockck.supabase.co
    
    NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inltb2p6ZXlzZHhlb29uZ29ja2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2NjkwNTUsImV4cCI6MjA3NDI0NTA1NX0.-Rg06XIyqaTv1SZr8oVvgHF0mTXbyfjDcwomLztSJHU
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```

***

## 📜 Available Scripts

* `npm run dev` - Starts the development server.
* `npm run build` - Builds the app for production.
* `npm run start` - Starts the production server.
* `npm run lint` - Runs the linter to check for code errors.

***

## ⚙️ Tech Stack & Architecture

* **Frontend**: React 19, Next.js
* **UI Library**: Chakra UI
* **Routing**: Next.js App Router
* **API & Database**: Supabase
* **Deployment**: PipeOps

***

## 🔌 API Documentation

This project uses a Supabase backend to manage data. The data is stored in a `todos` table with columns for `title`, `completed`, and `priority`.

***

***

## ⚠️ Known Issues

* None at the moment.

***

## 🚧 Future Improvements

* Implement authentication and user management for personal todo lists.
* Add deadline support and reminders.

***

## 🔐 Repository & Deployment Info

* Private GitHub Repository
* Collaborator: @Oluwasetemi
* Main branch: main
* Hosted on PipeOps:

***