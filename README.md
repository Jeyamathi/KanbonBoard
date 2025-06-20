# 🗂️ Kanban Task Manager

A simple and responsive Kanban-style task management app built with **React**, **Context API**, **React DnD**, and **Tailwind CSS**. It allows users to create tasks, move them across "To Do", "In Progress", and "Done" columns, and persists data in `localStorage`.

## ✨ Features

- Add tasks with unique Task IDs
- Drag and drop tasks between columns
- Tasks saved in `localStorage` (persists after refresh)
- Clean UI using Tailwind CSS
- State managed via `useReducer` and Context API

## 📁 Project Structure

src/
├── App.jsx
├── context/
│ └── TaskContext.jsx
├── components/
│ ├── KanbanBoard.jsx
│ ├── Column.jsx
│ └── TaskCard.jsx

## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- Vite (if using Vite)

### Install Dependencies

npm install

Also install:

npm install react-dnd react-dnd-html5-backend uuid

Run Locally
npm run dev

🧠 Tech Stack
React

Context API + useReducer

React DnD (react-dnd)

Tailwind CSS

localStorage