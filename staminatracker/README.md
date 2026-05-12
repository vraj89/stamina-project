# StaminaTracker

A React application for tracking stamina and workout sessions built with Vite and Tailwind CSS.

## 📋 Overview

StaminaTracker is a fitness tracking application developed as part of the MERN Stack Internship at Prelytix Private Limited. This project demonstrates proficiency in React development with Vite, Tailwind CSS styling, and modern frontend development practices.

## 👨‍💻 Internship Details

| Field | Details |
| :--- | :--- |
| **Student Name** | Vaghela-Vraj-Rajeshbhai |
| **Internship ID** | PRL-MERN-2026-XXXX |
| **Date** | 12-05-2026 |
| **Course Day** | Day-0 |
| **GitHub Repo** | [https://github.com/vraj89/stamina-project](https://github.com/vraj89/stamina-project) |

## 🎯 Daily Objective

To learn React with small improvements through practical implementation of state management, props handling, environment variables, and real-time UI updates.

## 🚀 Features

- Modern React development with Vite
- Tailwind CSS for styling
- Responsive design
- Component-based architecture
- Real-time stamina tracking
- Dynamic greeting system based on time of day
- Environment variable handling
- Props passing between components

## 🛠️ Technologies Used

- **React 19** - Frontend library
- **Vite 8** - Build tool and development server
- **Tailwind CSS 4** - CSS framework
- **ESLint** - Code linting

## 💻 Implementation & Changes

### 1. New Features / Logic Implemented
- **What:** Automatically current time display
- **How:** Used JavaScript Date() object with getHours() and conditional logic
- **Why:** To make the UI dynamic and show real-time updates for better user experience

### 2. UI/UX Enhancements
- Added a clean time display section with minimal styling
- Improved props passing for reusable components
- Ensured responsive layout for different screen sizes

### 3. Database / Backend Updates
- Introduced .env variable handling using import.meta.env.VITE_INTERN_NAME

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/vraj89/stamina-project.git
cd stamina-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:3000 to view the application.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📁 Project Structure

```
staminatracker/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── skillList.jsx
│   │   └── Staminaburner.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## 🔑 Key Learnings

- **Props Handling** → Passing arrays and reusing components effectively
- **Environment Variables** → Securely managing sensitive values with .env
- **Real-Time Clock** → Implementing dynamic UI updates using hooks
- **Component Communication** → Efficient data flow between parent and child components

## ⚠️ Challenges Faced & Solutions

- **Problem:** Passing array props, implementing .env variable, showing current time
- **Solution:** 
  1. Studied examples for proper props passing
  2. Declared .env variable and used meta.env.VITE_INTERN_NAME
  3. Used Date().getHours() with JavaScript if-else logic for time-based greetings

## ▶️ Live Preview

- **Deployment Link:** [http://localhost:3000/](http://localhost:3000/)

## 📄 License

MIT