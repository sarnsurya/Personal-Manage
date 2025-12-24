import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Tasks from "./pages/Tasks";
import Goals from "./pages/Goals";
import Habits from "./pages/Habits";
import Settings from "./pages/Settings";

export default function App() {
  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState("");

  // UI state
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Settings state
  const [tempDisplayName, setTempDisplayName] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [monthlySalary, setMonthlySalary] = useState(50000);
  const [tempSalary, setTempSalary] = useState(50000);
  const [isEditingSalary, setIsEditingSalary] = useState(false);
  const [monthlyLimit, setMonthlyLimit] = useState(15000);

  // Data state
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Meeting Notes",
      content: "Discuss Q4 strategy",
      category: "Official",
      date: "2024-12-15",
      icon: "💼",
    },
    {
      id: 2,
      title: "Shopping List",
      content: "Milk, Bread, Eggs",
      category: "Personal",
      date: "2024-12-14",
      icon: "🛒",
    },
  ]);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete project proposal",
      category: "Work",
      completed: false,
      dueDate: "2024-12-25",
      dueTime: "17:00",
      reminder: true,
    },
    {
      id: 2,
      title: "Morning workout",
      category: "Personal",
      completed: true,
      dueDate: "2024-12-20",
      dueTime: "06:00",
      reminder: false,
    },
  ]);

  const [goals, setGoals] = useState([
    { id: 1, title: "Read 12 books this year", progress: 75 },
    { id: 2, title: "Learn React Advanced", progress: 60 },
  ]);

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Breakfast",
      amount: 150,
      category: "Food-Morning",
      date: "2024-12-14",
    },
    {
      id: 2,
      title: "Train Ticket",
      amount: 50,
      category: "Transport-Train",
      date: "2024-12-13",
    },
    {
      id: 3,
      title: "Lunch",
      amount: 250,
      category: "Food-Afternoon",
      date: "2024-12-15",
    },
    {
      id: 4,
      title: "Bus Fare",
      amount: 30,
      category: "Transport-Bus",
      date: "2024-12-12",
    },
  ]);

  const [income, setIncome] = useState(50000);

  const [habits, setHabits] = useState([
    { id: 1, title: "Morning Exercise", completed: false, streak: 7 },
    { id: 2, title: "Read 30 mins", completed: true, streak: 12 },
  ]);

  // Modal state
  const [showAddNote, setShowAddNote] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [showAddHabit, setShowAddHabit] = useState(false);
  const [showResetDialog, setShowResetDialog] = useState(false);

  // Effects
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  // Handlers
  const handleLogin = (userId) => {
    setIsLoggedIn(true);
    setDisplayName(userId.toUpperCase());
    setTempDisplayName(userId.toUpperCase());
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setDisplayName("");
  };

  const resetDashboard = () => {
    setShowResetDialog(true);
  };

  const handleResetWithCurrentLimit = () => {
    setExpenses([]);
    setTasks([]);
    setGoals([]);
    setNotes([]);
    setHabits([]);
    setShowResetDialog(false);
  };

  const handleResetWithNewLimit = () => {
    setExpenses([]);
    setTasks([]);
    setGoals([]);
    setNotes([]);
    setHabits([]);
    setIsEditingSalary(true);
    setShowResetDialog(false);
  };

  const card = isDarkTheme
    ? "bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700"
    : "bg-white border-blue-200";

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <MainLayout
              currentTime={currentTime}
              isDarkTheme={isDarkTheme}
              setIsDarkTheme={setIsDarkTheme}
            />
          }
        >
          <Route
            path="/"
            element={
              <Home
                displayName={displayName}
                currentTime={currentTime}
                isDarkTheme={isDarkTheme}
                card={card}
                expenses={expenses}
                setExpenses={setExpenses}
                income={income}
                monthlyLimit={monthlyLimit}
                setShowAddExpense={setShowAddExpense}
                resetDashboard={resetDashboard}
              />
            }
          />
          <Route
            path="/notes"
            element={
              <Notes
                notes={notes}
                setNotes={setNotes}
                isDarkTheme={isDarkTheme}
                card={card}
                setShowAddNote={setShowAddNote}
              />
            }
          />
          <Route
            path="/tasks"
            element={
              <Tasks
                tasks={tasks}
                setTasks={setTasks}
                isDarkTheme={isDarkTheme}
                card={card}
                setShowAddTask={setShowAddTask}
              />
            }
          />
          <Route
            path="/goals"
            element={
              <Goals
                goals={goals}
                setGoals={setGoals}
                isDarkTheme={isDarkTheme}
                card={card}
                setShowAddGoal={setShowAddGoal}
              />
            }
          />
          <Route
            path="/habits"
            element={
              <Habits
                habits={habits}
                setHabits={setHabits}
                isDarkTheme={isDarkTheme}
                card={card}
                setShowAddHabit={setShowAddHabit}
              />
            }
          />
          <Route
            path="/settings"
            element={
              <Settings
                displayName={displayName}
                setDisplayName={setDisplayName}
                tempDisplayName={tempDisplayName}
                setTempDisplayName={setTempDisplayName}
                isEditingName={isEditingName}
                setIsEditingName={setIsEditingName}
                monthlySalary={monthlySalary}
                setMonthlySalary={setMonthlySalary}
                tempSalary={tempSalary}
                setTempSalary={setTempSalary}
                isEditingSalary={isEditingSalary}
                setIsEditingSalary={setIsEditingSalary}
                monthlyLimit={monthlyLimit}
                setMonthlyLimit={setMonthlyLimit}
                isDarkTheme={isDarkTheme}
                card={card}
                onLogout={handleLogout}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
