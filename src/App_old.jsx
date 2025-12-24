import React, { useState, useEffect } from "react";

/* ===== SIMPLE SVG ICON SYSTEM (WEB + APK SAFE) ===== */
const Icon = ({ children, size = 22, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

/* ===== ICON DEFINITIONS ===== */
export const Plus = (p) => (
  <Icon {...p}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </Icon>
);
export const User = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
  </Icon>
);
export const Home = (p) => (
  <Icon {...p}>
    <path d="M3 9l9-7 9 7" />
    <path d="M9 22V12h6v10" />
  </Icon>
);
export const Trash2 = (p) => (
  <Icon {...p}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14H6L5 6" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
  </Icon>
);
export const X = (p) => (
  <Icon {...p}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Icon>
);
export const Circle = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
  </Icon>
);
export const CheckCircle2 = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9 12l2 2 4-4" />
  </Icon>
);
export const Target = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
  </Icon>
);
export const Settings = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1-2 3.4- .1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21h-4v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-2-3.4.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3v-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 2-3.4.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V3h4v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 2 3.4-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1H21v4h-.1a1.7 1.7 0 0 0-1.5 1z" />
  </Icon>
);
export const Download = (p) => (
  <Icon {...p}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </Icon>
);
export const FileText = (p) => (
  <Icon {...p}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </Icon>
);
export const IndianRupee = (p) => (
  <Icon {...p}>
    <path d="M6 3h12" />
    <path d="M6 8h12" />
    <path d="M6 13h9" />
    <path d="M6 21l6-8" />
  </Icon>
);
export const TrendingUp = (p) => (
  <Icon {...p}>
    <polyline points="3 17 9 11 13 15 21 7" />
    <polyline points="14 7 21 7 21 14" />
  </Icon>
);
export const Moon = (p) => (
  <Icon {...p}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </Icon>
);
export const Sun = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
  </Icon>
);
export const Edit2 = (p) => (
  <Icon {...p}>
    <path d="M17 3a2.8 2.8 0 1 1 4 4L7 21H3v-4z" />
  </Icon>
);
export const Save = (p) => (
  <Icon {...p}>
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
  </Icon>
);
export const Sparkles = (p) => (
  <Icon {...p}>
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
  </Icon>
);
export const Clock = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </Icon>
);
export const AlarmClock = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="13" r="8" />
    <path d="M12 9v4l2 2" />
  </Icon>
);
export const RefreshCw = (p) => (
  <Icon {...p}>
    <path d="M3 12a9 9 0 0 1 15-6l3-3v9h-9l3-3a6 6 0 0 0-9 3" />
  </Icon>
);

/* ===== CATEGORY ICONS ===== */
export const Coffee = (p) => (
  <Icon {...p}>
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </Icon>
);

export const Sunset = (p) => (
  <Icon {...p}>
    <path d="M12 3v6" />
    <circle cx="12" cy="12" r="4" />
    <path d="M5 15h14" />
    <path d="M3 18h18" />
  </Icon>
);

export const CloudMoon = (p) => (
  <Icon {...p}>
    <path d="M13 2a9 9 0 0 0 0 18h7a5 5 0 0 0 0-10 9 9 0 0 0-7-8z" />
  </Icon>
);

export const Train = (p) => (
  <Icon {...p}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M4 11h16" />
    <path d="M12 4v7" />
    <circle cx="9" cy="16" r="1" />
    <circle cx="15" cy="16" r="1" />
  </Icon>
);

export const Bus = (p) => (
  <Icon {...p}>
    <path d="M8 6v6" />
    <path d="M16 6v6" />
    <path d="M2 12h19.6" />
    <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H6c-1.1 0-2.1.8-2.4 1.8l-1.4 5c-.1.4-.2.8-.2 1.2 0 .4.1.8.2 1.2.3 1.1.8 2.8.8 2.8h3" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </Icon>
);

export const Bike = (p) => (
  <Icon {...p}>
    <circle cx="5.5" cy="17.5" r="3.5" />
    <circle cx="18.5" cy="17.5" r="3.5" />
    <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
  </Icon>
);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [pin, setPin] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [tempDisplayName, setTempDisplayName] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [page, setPage] = useState("home");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [userName, setUserName] = useState("");
  const [monthlySalary, setMonthlySalary] = useState(50000);
  const [tempSalary, setTempSalary] = useState(50000);
  const [isEditingSalary, setIsEditingSalary] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const [monthlyLimit, setMonthlyLimit] = useState(15000);
  const [showAddNote, setShowAddNote] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [showAddHabit, setShowAddHabit] = useState(false);
  const [showResetDialog, setShowResetDialog] = useState(false);
  const [showCustomCategory, setShowCustomCategory] = useState(false);
  const [customCategory, setCustomCategory] = useState("");

  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    category: "Personal",
    icon: "📝",
  });
  const [newTask, setNewTask] = useState({
    title: "",
    dueDate: "",
    dueTime: "",
    reminder: false,
  });
  const [newGoalTitle, setNewGoalTitle] = useState("");
  const [newExpense, setNewExpense] = useState({
    title: "",
    amount: "",
    category: "Food-Morning",
    customType: "",
  });
  const [newHabit, setNewHabit] = useState({ title: "" });

  const quotes = [
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
  ];

  const noteIcons = [
    "📝",
    "💼",
    "🛒",
    "💡",
    "📚",
    "🎯",
    "✨",
    "🔥",
    "💪",
    "🎨",
    "🎵",
    "🍕",
  ];

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "GOOD MORNING";
    if (hour < 17) return "GOOD AFTERNOON";
    if (hour < 21) return "GOOD EVENING";
    return "GOOD NIGHT";
  };

  const getDailyQuote = () => {
    const dayOfYear = Math.floor(
      (currentTime - new Date(currentTime.getFullYear(), 0, 0)) /
        1000 /
        60 /
        60 /
        24
    );
    return quotes[dayOfYear % quotes.length];
  };

  const getCategoryIcon = (category) => {
    if (category.includes("Morning"))
      return <Coffee size={20} className="text-yellow-500" />;
    if (category.includes("Afternoon"))
      return <Sunset size={20} className="text-orange-500" />;
    if (category.includes("Night"))
      return <CloudMoon size={20} className="text-blue-500" />;
    if (category.includes("Train"))
      return <Train size={20} className="text-green-500" />;
    if (category.includes("Bus"))
      return <Bus size={20} className="text-red-500" />;
    if (category.includes("Bike"))
      return <Bike size={20} className="text-purple-500" />;
    if (category.includes("Utility"))
      return <span className="text-yellow-600">⚡</span>;
    if (category.includes("Mobile"))
      return <span className="text-blue-600">📱</span>;
    if (category.includes("Groceries"))
      return <span className="text-green-600">🛒</span>;
    if (category.includes("SIP"))
      return <span className="text-indigo-600">📈</span>;
    if (category.includes("Gold"))
      return <span className="text-yellow-500">💰</span>;
    if (category.includes("Chit"))
      return <span className="text-purple-600">💳</span>;
    if (category.includes("Investment"))
      return <span className="text-teal-600">💹</span>;
    if (category.includes("Insurance"))
      return <span className="text-red-600">🏥</span>;
    if (category.includes("Other"))
      return <span className="text-gray-600">📦</span>;
    return null;
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Check for task reminders
    tasks.forEach((task) => {
      if (task.reminder && !task.completed && task.dueDate && task.dueTime) {
        const taskDateTime = new Date(`${task.dueDate}T${task.dueTime}`);
        const now = new Date();
        const timeDiff = taskDateTime - now;

        // Show notification 5 minutes before
        if (timeDiff > 0 && timeDiff <= 300000) {
          if (Notification.permission === "granted") {
            new Notification("Task Reminder", {
              body: `${task.title} is due soon!`,
              icon: "⏰",
            });
          }
        }
      }
    });
  }, [currentTime, tasks]);

  useEffect(() => {
    if (Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  const handleLogin = () => {
    if (userId.length >= 2 && pin.length >= 4) {
      setIsLoggedIn(true);
      setUserName(userId.toUpperCase());
      setDisplayName(userId.toUpperCase());
      setTempDisplayName(userId.toUpperCase());
      setLoginError("");
    } else {
      setLoginError("User ID must be 2+ characters and PIN must be 4+ digits");
    }
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

  const resetDashboard = () => {
    setShowResetDialog(true);
  };

  const exportToCSV = (data, type) => {
    let csv = "";
    const date = new Date().toISOString().split("T")[0];

    if (type === "expenses") {
      csv = "Title,Amount (₹),Category,Date\n";
      data.forEach((item) => {
        csv += `"${item.title}",${item.amount},"${item.category}","${item.date}"\n`;
      });
    } else if (type === "tasks") {
      csv = "Title,Category,Status,Due Date,Due Time,Reminder\n";
      data.forEach((item) => {
        csv += `"${item.title}","${item.category}","${
          item.completed ? "Completed" : "Pending"
        }","${item.dueDate || "N/A"}","${item.dueTime || "N/A"}","${
          item.reminder ? "Yes" : "No"
        }"\n`;
      });
    } else if (type === "notes") {
      csv = "Title,Content,Category,Date,Icon\n";
      data.forEach((item) => {
        csv += `"${item.title}","${item.content}","${item.category}","${item.date}","${item.icon}"\n`;
      });
    } else if (type === "goals") {
      csv = "Title,Progress (%)\n";
      data.forEach((item) => {
        csv += `"${item.title}",${item.progress}\n`;
      });
    } else if (type === "habits") {
      csv = "Title,Status,Streak (days)\n";
      data.forEach((item) => {
        csv += `"${item.title}","${item.completed ? "Completed" : "Pending"}",${
          item.streak
        }\n`;
      });
    }

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `${type}_${date}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToText = (data, type) => {
    let text = "";
    const date = new Date().toLocaleDateString("en-IN");

    if (type === "expenses") {
      text = `EXPENSES REPORT\nGenerated: ${date}\n${"=".repeat(50)}\n\n`;
      data.forEach((item, i) => {
        text += `${i + 1}. ${item.title}\n`;
        text += `   Amount: ₹${item.amount}\n`;
        text += `   Category: ${item.category}\n`;
        text += `   Date: ${item.date}\n\n`;
      });
      text += `${"=".repeat(50)}\n`;
      text += `Total Expenses: ₹${data.reduce(
        (sum, exp) => sum + exp.amount,
        0
      )}\n`;
    } else if (type === "tasks") {
      text = `TASKS REPORT\nGenerated: ${date}\n${"=".repeat(50)}\n\n`;
      data.forEach((item, i) => {
        text += `${i + 1}. ${item.title}\n`;
        text += `   Category: ${item.category}\n`;
        text += `   Status: ${item.completed ? "✓ Completed" : "○ Pending"}\n`;
        text += `   Due: ${item.dueDate || "N/A"} ${item.dueTime || ""}\n`;
        text += `   Reminder: ${item.reminder ? "Yes" : "No"}\n\n`;
      });
    } else if (type === "notes") {
      text = `NOTES COLLECTION\nGenerated: ${date}\n${"=".repeat(50)}\n\n`;
      data.forEach((item, i) => {
        text += `${item.icon} ${item.title}\n`;
        text += `${"-".repeat(40)}\n`;
        text += `${item.content}\n\n`;
        text += `Category: ${item.category} | Date: ${item.date}\n`;
        text += `\n${"=".repeat(50)}\n\n`;
      });
    } else if (type === "goals") {
      text = `GOALS TRACKER\nGenerated: ${date}\n${"=".repeat(50)}\n\n`;
      data.forEach((item, i) => {
        text += `${i + 1}. ${item.title}\n`;
        text += `   Progress: ${item.progress}%\n`;
        text += `   Status: ${"█".repeat(
          Math.floor(item.progress / 10)
        )}${"░".repeat(10 - Math.floor(item.progress / 10))}\n\n`;
      });
    } else if (type === "habits") {
      text = `HABITS TRACKER\nGenerated: ${date}\n${"=".repeat(50)}\n\n`;
      data.forEach((item, i) => {
        text += `${i + 1}. ${item.title}\n`;
        text += `   Status: ${item.completed ? "✓ Done Today" : "○ Pending"}\n`;
        text += `   Streak: ${item.streak} days 🔥\n\n`;
      });
    }

    const blob = new Blob([text], { type: "text/plain;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `${type}_${new Date().toISOString().split("T")[0]}.txt`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const currentBalance = income - totalExpenses;
  const budgetProgress =
    monthlyLimit > 0 ? Math.round((totalExpenses / monthlyLimit) * 100) : 0;

  const todayExpenses = expenses
    .filter((e) => e.date === new Date().toISOString().split("T")[0])
    .reduce((sum, e) => sum + e.amount, 0);

  const bg = isDarkTheme
    ? "bg-gradient-to-b from-indigo-950 via-blue-950 to-slate-900 text-white"
    : "bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 text-gray-900";

  const card = isDarkTheme
    ? "bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700"
    : "bg-white border-blue-200";

  if (!isLoggedIn) {
    return (
      <div className="w-full mx-auto bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 min-h-screen flex items-center justify-center p-4 sm:p-6">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
          * { font-family: 'Inter', sans-serif; }
        `}</style>

        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center mb-4">
              <div className="text-6xl">📱</div>
            </div>
            <h1 className="text-5xl font-black text-white mb-3">PERSONAL</h1>
            <h1 className="text-5xl font-black text-white mb-2">MANAGER</h1>
            <p className="text-blue-200 text-sm">🇮🇳 Indian Edition</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                USER ID
              </label>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Min 2 characters"
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none font-semibold"
                onKeyPress={(e) => e.key === "Enter" && handleLogin()}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                PIN
              </label>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Min 4 digits"
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none font-semibold tracking-widest"
                onKeyPress={(e) => e.key === "Enter" && handleLogin()}
              />
            </div>

            {loginError && (
              <div className="mb-4 p-3 bg-red-50 border-2 border-red-300 rounded-xl">
                <p className="text-red-600 text-sm font-bold text-center">
                  {loginError}
                </p>
              </div>
            )}

            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full max-w-7xl mx-auto min-h-screen ${bg} px-0 lg:px-6`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { font-family: 'Inter', sans-serif; }
        .glass-nav {
          background: ${
            isDarkTheme ? "rgba(15, 23, 42, 0.7)" : "rgba(255, 255, 255, 0.7)"
          };
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid ${
            isDarkTheme ? "rgba(148, 163, 184, 0.1)" : "rgba(99, 102, 241, 0.1)"
          };
          box-shadow: ${
            isDarkTheme
              ? "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
              : "0 8px 32px 0 rgba(99, 102, 241, 0.1)"
          };
        }
        .glass-bottom-nav {
          background: ${
            isDarkTheme ? "rgba(15, 23, 42, 0.8)" : "rgba(255, 255, 255, 0.8)"
          };
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-top: 1px solid ${
            isDarkTheme ? "rgba(148, 163, 184, 0.1)" : "rgba(99, 102, 241, 0.1)"
          };
          box-shadow: ${
            isDarkTheme
              ? "0 -8px 32px 0 rgba(0, 0, 0, 0.37)"
              : "0 -8px 32px 0 rgba(99, 102, 241, 0.1)"
          };
        }
        .nav-button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-button:hover {
          transform: translateY(-2px);
        }
        .nav-button.active {
          transform: scale(1.05);
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .page-content {
          animation: slideIn 0.4s ease-out;
        }
        .notion-card {
          transition: all 0.2s ease;
        }
        .notion-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }
        
        /* 3D Hover Effects */
        .card-3d {
          transition: transform 0.1s ease-out, box-shadow 0.3s ease;
          transform-style: preserve-3d;
          will-change: transform;
        }
        
        .card-3d:hover {
          box-shadow: ${
            isDarkTheme
              ? "0 20px 50px rgba(0, 0, 0, 0.5)"
              : "0 20px 50px rgba(99, 102, 241, 0.2)"
          };
        }
        
        .interactive-block {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        
        .interactive-block:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: ${
            isDarkTheme
              ? "0 12px 40px rgba(0, 0, 0, 0.4)"
              : "0 12px 40px rgba(99, 102, 241, 0.15)"
          };
        }
        
        .interactive-block:active {
          transform: translateY(-2px) scale(1.01);
        }
        
        .glow-effect:hover {
          box-shadow: ${
            isDarkTheme
              ? "0 0 30px rgba(99, 102, 241, 0.4)"
              : "0 0 30px rgba(99, 102, 241, 0.2)"
          };
        }
        
        .pulse-hover:hover {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        .smooth-shadow {
          transition: box-shadow 0.3s ease;
        }
        
        .smooth-shadow:hover {
          box-shadow: ${
            isDarkTheme
              ? "0 15px 35px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.3)"
              : "0 15px 35px rgba(99, 102, 241, 0.2), 0 5px 15px rgba(99, 102, 241, 0.1)"
          };
        }
      `}</style>

      <div className="glass-nav fixed top-0 left-0 right-0 px-4 sm:px-6 py-4 max-w-7xl mx-auto z-50 lg:rounded-b-2xl">
        <div className="flex justify-between items-center">
          <div>
            <p
              className={`text-sm font-bold ${
                isDarkTheme ? "text-white" : "text-gray-900"
              }`}
            >
              {currentTime.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDarkTheme(!isDarkTheme)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isDarkTheme
                  ? "bg-slate-800/50 hover:bg-slate-700/50"
                  : "bg-blue-100/50 hover:bg-blue-200/50"
              }`}
            >
              {isDarkTheme ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-indigo-600" />
              )}
            </button>
            <button
              onClick={() => setPage("settings")}
              className="transition-transform hover:scale-110"
            >
              <User
                size={20}
                className={isDarkTheme ? "text-white" : "text-gray-900"}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-20 pb-28">
        {page === "home" && (
          <div className="min-h-screen page-content">
            <div className="text-center mb-8 px-6">
              <h1
                className={`text-4xl font-black mb-2 ${
                  isDarkTheme ? "text-white" : "text-gray-900"
                }`}
              >
                {getGreeting()} 👋
              </h1>
              <p
                className={`text-base ${
                  isDarkTheme ? "text-slate-400" : "text-gray-600"
                }`}
              >
                Welcome, {displayName}
              </p>
            </div>

            <div className="px-4 sm:px-6 lg:px-8">
              <button
                onClick={resetDashboard}
                className="mb-6 w-full lg:max-w-md lg:mx-auto p-3 bg-red-500/20 rounded-xl hover:bg-red-500/30 transition interactive-block flex items-center justify-center gap-2"
              >
                <RefreshCw size={20} className="text-red-500" />
                <span className="text-red-500 font-bold">Reset Dashboard</span>
              </button>

              <div
                className={`mb-6 ${card} rounded-3xl p-6 border shadow-xl card-3d interactive-block`}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 20;
                  const rotateY = (centerX - x) / 20;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
                }}
              >
                <div className="flex justify-between items-center mb-4">
                  <span
                    className={`text-sm font-semibold ${
                      isDarkTheme ? "text-slate-400" : "text-gray-600"
                    }`}
                  >
                    Current Balance
                  </span>
                  <span className="text-xs bg-teal-500 text-white px-3 py-1 rounded-full font-bold">
                    Dec
                  </span>
                </div>

                <div
                  className={`text-5xl font-black mb-6 flex items-center ${
                    isDarkTheme ? "text-white" : "text-gray-900"
                  }`}
                >
                  <IndianRupee size={40} />
                  {currentBalance.toLocaleString("en-IN")}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div
                    className={`${
                      isDarkTheme ? "bg-slate-800/50" : "bg-green-50"
                    } rounded-xl p-4`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp size={18} className="text-green-500" />
                      <span
                        className={`text-xs ${
                          isDarkTheme ? "text-slate-400" : "text-gray-600"
                        }`}
                      >
                        Income
                      </span>
                    </div>
                    <div
                      className={`text-xl font-bold flex items-center ${
                        isDarkTheme ? "text-white" : "text-gray-900"
                      }`}
                    >
                      <IndianRupee size={16} />
                      {income.toLocaleString("en-IN")}
                    </div>
                  </div>
                  <div
                    className={`${
                      isDarkTheme ? "bg-slate-800/50" : "bg-red-50"
                    } rounded-xl p-4`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp
                        size={18}
                        className="text-red-500 transform rotate-180"
                      />
                      <span
                        className={`text-xs ${
                          isDarkTheme ? "text-slate-400" : "text-gray-600"
                        }`}
                      >
                        Expense
                      </span>
                    </div>
                    <div
                      className={`text-xl font-bold flex items-center ${
                        isDarkTheme ? "text-white" : "text-gray-900"
                      }`}
                    >
                      <IndianRupee size={16} />
                      {totalExpenses.toLocaleString("en-IN")}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`mb-6 ${card} rounded-3xl p-6 border shadow-xl card-3d interactive-block`}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 20;
                  const rotateY = (centerX - x) / 20;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
                }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2
                    className={`text-lg font-bold ${
                      isDarkTheme ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Budget Progress
                  </h2>
                  <span
                    className={`text-lg font-bold ${
                      isDarkTheme ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {budgetProgress}%
                  </span>
                </div>

                <div className="flex items-center justify-center mb-6">
                  <div className="relative w-48 h-48">
                    <svg className="w-48 h-48 transform -rotate-90">
                      <circle
                        cx="96"
                        cy="96"
                        r="80"
                        stroke={isDarkTheme ? "#1e293b" : "#e0e7ff"}
                        strokeWidth="12"
                        fill="none"
                      />
                      <circle
                        cx="96"
                        cy="96"
                        r="80"
                        stroke="#3b82f6"
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray={`${
                          (budgetProgress / 100) * 502.4
                        } 502.4`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div
                        className={`text-4xl font-black ${
                          isDarkTheme ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {budgetProgress}%
                      </div>
                      <div
                        className={`text-xs ${
                          isDarkTheme ? "text-slate-400" : "text-gray-600"
                        } flex items-center`}
                      >
                        of <IndianRupee size={10} className="mx-1" />
                        {monthlyLimit.toLocaleString("en-IN")}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-sm ${
                        isDarkTheme ? "text-slate-400" : "text-gray-600"
                      }`}
                    >
                      Spent
                    </span>
                    <span className="text-sm font-bold text-red-400 flex items-center">
                      <IndianRupee size={12} />
                      {totalExpenses.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-sm ${
                        isDarkTheme ? "text-slate-400" : "text-gray-600"
                      }`}
                    >
                      Remaining
                    </span>
                    <span className="text-sm font-bold text-green-400 flex items-center">
                      <IndianRupee size={12} />
                      {(monthlyLimit - totalExpenses).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`mb-6 ${card} rounded-3xl p-6 border shadow-xl card-3d interactive-block`}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 20;
                  const rotateY = (centerX - x) / 20;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
                }}
              >
                <h2
                  className={`text-lg font-bold mb-6 ${
                    isDarkTheme ? "text-white" : "text-gray-900"
                  }`}
                >
                  Today's Spending
                </h2>
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <svg className="w-32 h-32">
                      <circle
                        cx="64"
                        cy="64"
                        r="50"
                        stroke={isDarkTheme ? "#1e293b" : "#e0e7ff"}
                        strokeWidth="8"
                        fill="none"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-2xl font-black text-red-400 flex items-center">
                        <IndianRupee size={20} />
                        {todayExpenses}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShowAddExpense(true)}
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition glow-effect"
                >
                  <Plus size={20} />
                  Add Expense
                </button>
              </div>

              <div
                className={`${card} rounded-xl p-5 border shadow-xl card-3d interactive-block`}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 15;
                  const rotateY = (centerX - x) / 15;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
                }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2
                    className={`text-lg font-bold ${
                      isDarkTheme ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Recent Expenses
                  </h2>
                  <div className="flex gap-2">
                    <button
                      onClick={() => exportToCSV(expenses, "expenses")}
                      className="p-2 bg-green-600 rounded-lg hover:bg-green-700 transition"
                      title="Export as CSV"
                    >
                      <Download size={16} className="text-white" />
                    </button>
                    <button
                      onClick={() => exportToText(expenses, "expenses")}
                      className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                      title="Export as Text"
                    >
                      <FileText size={16} className="text-white" />
                    </button>
                  </div>
                </div>
                {expenses
                  .slice(-3)
                  .reverse()
                  .map((exp) => (
                    <div
                      key={exp.id}
                      className={`flex justify-between items-center py-2 border-b ${
                        isDarkTheme ? "border-slate-700" : "border-gray-200"
                      } last:border-0`}
                    >
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(exp.category)}
                        <span
                          className={`text-sm ${
                            isDarkTheme ? "text-slate-300" : "text-gray-700"
                          }`}
                        >
                          {exp.title}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-red-400 flex items-center">
                        <IndianRupee size={12} />
                        {exp.amount}
                      </span>
                    </div>
                  ))}
              </div>

              <div className="mb-6 mt-6">
                <div
                  className={`${card} rounded-xl p-5 border shadow-xl smooth-shadow interactive-block`}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 25;
                    const rotateY = (centerX - x) / 25;
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "perspective(1000px) rotateX(0) rotateY(0)";
                  }}
                >
                  <div className="flex items-start gap-3">
                    <Sparkles size={20} className="text-yellow-500 mt-1" />
                    <p
                      className={`text-sm leading-relaxed italic ${
                        isDarkTheme ? "text-slate-300" : "text-gray-700"
                      }`}
                    >
                      "{getDailyQuote()}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {page === "notes" && (
          <div className="px-4 sm:px-6 lg:px-8 py-6 page-content">
            <div className="flex justify-between items-center mb-6">
              <h1
                className={`text-3xl font-black ${
                  isDarkTheme ? "text-white" : "text-gray-900"
                }`}
              >
                Notes
              </h1>
              <div className="flex gap-2">
                <button
                  onClick={() => exportToCSV(notes, "notes")}
                  className="p-3 bg-green-600 rounded-xl hover:bg-green-700 transition"
                  title="Export CSV"
                >
                  <Download size={20} className="text-white" />
                </button>
                <button
                  onClick={() => exportToText(notes, "notes")}
                  className="p-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition"
                  title="Export Text"
                >
                  <FileText size={20} className="text-white" />
                </button>
                <button
                  onClick={() => setShowAddNote(true)}
                  className="p-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
                >
                  <Plus size={20} className="text-white" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className={`notion-card ${card} rounded-xl p-5 border shadow-lg cursor-pointer card-3d`}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 30;
                    const rotateY = (centerX - x) / 30;
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
                  }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{note.icon}</span>
                    <div className="flex-1">
                      <h3
                        className={`font-bold text-lg mb-1 ${
                          isDarkTheme ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {note.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed ${
                          isDarkTheme ? "text-slate-400" : "text-gray-600"
                        }`}
                      >
                        {note.content}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setNotes(notes.filter((n) => n.id !== note.id))
                      }
                      className="text-red-500 p-2 hover:bg-red-50 rounded-lg transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        note.category === "Official"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {note.category}
                    </span>
                    <span
                      className={`text-xs ${
                        isDarkTheme ? "text-slate-500" : "text-gray-500"
                      }`}
                    >
                      {note.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "tasks" && (
          <div className="p-6 page-content">
            <div className="flex justify-between items-center mb-6">
              <h1
                className={`text-3xl font-bold ${
                  isDarkTheme ? "text-white" : "text-gray-900"
                }`}
              >
                TASKS
              </h1>
              <div className="flex gap-2">
                <button
                  onClick={() => exportToCSV(tasks, "tasks")}
                  className="p-3 bg-green-600 rounded-xl hover:bg-green-700 transition"
                  title="Export CSV"
                >
                  <Download size={20} className="text-white" />
                </button>
                <button
                  onClick={() => exportToText(tasks, "tasks")}
                  className="p-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition"
                  title="Export Text"
                >
                  <FileText size={20} className="text-white" />
                </button>
                <button
                  onClick={() => setShowAddTask(true)}
                  className="p-3 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition"
                >
                  <Plus size={20} className="text-white" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className={`${card} rounded-xl p-4 border shadow-lg card-3d interactive-block`}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 30;
                    const rotateY = (centerX - x) / 30;
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
                  }}
                >
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() =>
                        setTasks(
                          tasks.map((t) =>
                            t.id === task.id
                              ? { ...t, completed: !t.completed }
                              : t
                          )
                        )
                      }
                    >
                      {task.completed ? (
                        <CheckCircle2
                          size={28}
                          className="text-green-500 mt-1"
                        />
                      ) : (
                        <Circle
                          size={28}
                          className={`${
                            isDarkTheme ? "text-slate-600" : "text-gray-400"
                          } mt-1`}
                        />
                      )}
                    </button>
                    <div className="flex-1">
                      <h3
                        className={`font-bold ${
                          task.completed ? "line-through opacity-50" : ""
                        } ${isDarkTheme ? "text-white" : "text-gray-900"}`}
                      >
                        {task.title}
                      </h3>
                      <p
                        className={`text-xs ${
                          isDarkTheme ? "text-slate-400" : "text-gray-600"
                        } mt-1`}
                      >
                        {task.category}
                      </p>
                      {task.dueDate && (
                        <div className="flex items-center gap-3 mt-2">
                          <span
                            className={`text-xs flex items-center gap-1 ${
                              isDarkTheme ? "text-slate-400" : "text-gray-600"
                            }`}
                          >
                            <Clock size={12} />
                            {task.dueDate} {task.dueTime}
                          </span>
                          {task.reminder && (
                            <AlarmClock size={12} className="text-yellow-500" />
                          )}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() =>
                        setTasks(tasks.filter((t) => t.id !== task.id))
                      }
                      className="text-red-500 p-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "goals" && (
          <div className="p-6 page-content">
            <div className="flex justify-between items-center mb-6">
              <h1
                className={`text-3xl font-bold ${
                  isDarkTheme ? "text-white" : "text-gray-900"
                }`}
              >
                GOALS
              </h1>
              <div className="flex gap-2">
                <button
                  onClick={() => exportToCSV(goals, "goals")}
                  className="p-3 bg-green-600 rounded-xl hover:bg-green-700 transition"
                  title="Export CSV"
                >
                  <Download size={20} className="text-white" />
                </button>
                <button
                  onClick={() => exportToText(goals, "goals")}
                  className="p-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition"
                  title="Export Text"
                >
                  <FileText size={20} className="text-white" />
                </button>
                <button
                  onClick={() => setShowAddGoal(true)}
                  className="p-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
                >
                  <Plus size={20} className="text-white" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {goals.map((goal) => (
                <div
                  key={goal.id}
                  className={`${card} rounded-xl p-5 border shadow-lg card-3d glow-effect`}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 25;
                    const rotateY = (centerX - x) / 25;
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
                  }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3
                      className={`font-bold text-lg ${
                        isDarkTheme ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {goal.title}
                    </h3>
                    <span className="text-2xl font-bold text-blue-400">
                      {goal.progress}%
                    </span>
                  </div>
                  <div
                    className={`w-full ${
                      isDarkTheme ? "bg-slate-700" : "bg-gray-200"
                    } rounded-full h-3 mb-3`}
                  >
                    <div
                      className="bg-blue-500 h-3 rounded-full transition-all"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        setGoals(
                          goals.map((g) =>
                            g.id === goal.id
                              ? { ...g, progress: Math.max(0, g.progress - 10) }
                              : g
                          )
                        )
                      }
                      className={`flex-1 py-2 ${
                        isDarkTheme ? "bg-slate-700" : "bg-gray-200"
                      } rounded-xl font-bold`}
                    >
                      -10%
                    </button>
                    <button
                      onClick={() =>
                        setGoals(
                          goals.map((g) =>
                            g.id === goal.id
                              ? {
                                  ...g,
                                  progress: Math.min(100, g.progress + 10),
                                }
                              : g
                          )
                        )
                      }
                      className="flex-1 py-2 bg-blue-600 rounded-xl font-bold text-white"
                    >
                      +10%
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "habits" && (
          <div className="p-6 page-content">
            <div className="flex justify-between items-center mb-6">
              <h1
                className={`text-3xl font-bold ${
                  isDarkTheme ? "text-white" : "text-gray-900"
                }`}
              >
                HABITS
              </h1>
              <div className="flex gap-2">
                <button
                  onClick={() => exportToCSV(habits, "habits")}
                  className="p-3 bg-green-600 rounded-xl hover:bg-green-700 transition"
                  title="Export CSV"
                >
                  <Download size={20} className="text-white" />
                </button>
                <button
                  onClick={() => exportToText(habits, "habits")}
                  className="p-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition"
                  title="Export Text"
                >
                  <FileText size={20} className="text-white" />
                </button>
                <button
                  onClick={() => setShowAddHabit(true)}
                  className="p-3 bg-green-600 rounded-xl hover:bg-green-700 transition"
                >
                  <Plus size={20} className="text-white" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {habits.map((habit) => (
                <div
                  key={habit.id}
                  className={`${card} rounded-xl p-4 border shadow-lg card-3d pulse-hover`}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 30;
                    const rotateY = (centerX - x) / 30;
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
                  }}
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        setHabits(
                          habits.map((h) =>
                            h.id === habit.id
                              ? {
                                  ...h,
                                  completed: !h.completed,
                                  streak: h.completed ? h.streak : h.streak + 1,
                                }
                              : h
                          )
                        )
                      }
                    >
                      {habit.completed ? (
                        <CheckCircle2 size={28} className="text-green-500" />
                      ) : (
                        <Circle
                          size={28}
                          className={
                            isDarkTheme ? "text-slate-600" : "text-gray-400"
                          }
                        />
                      )}
                    </button>
                    <div className="flex-1">
                      <h3
                        className={`font-bold ${
                          isDarkTheme ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {habit.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-yellow-500">🔥</span>
                        <span
                          className={`text-xs ${
                            isDarkTheme ? "text-slate-400" : "text-gray-600"
                          }`}
                        >
                          {habit.streak} day streak
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        setHabits(habits.filter((h) => h.id !== habit.id))
                      }
                      className="text-red-500 p-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "settings" && (
          <div className="p-6 page-content">
            <h1
              className={`text-3xl font-bold mb-6 ${
                isDarkTheme ? "text-white" : "text-gray-900"
              }`}
            >
              SETTINGS
            </h1>

            <div className="space-y-4">
              <div
                className={`${card} rounded-xl p-6 border shadow-xl card-3d interactive-block`}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 20;
                  const rotateY = (centerX - x) / 20;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
                }}
              >
                <h3
                  className={`font-bold text-lg mb-4 flex items-center gap-2 ${
                    isDarkTheme ? "text-white" : "text-gray-900"
                  }`}
                >
                  <User size={20} />
                  Display Name
                </h3>
                {isEditingName ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={tempDisplayName}
                      onChange={(e) => setTempDisplayName(e.target.value)}
                      className={`w-full px-4 py-3 ${
                        isDarkTheme
                          ? "bg-slate-700 border-slate-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } border-2 rounded-xl font-bold text-xl`}
                      placeholder="Enter display name"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setDisplayName(tempDisplayName);
                          setIsEditingName(false);
                        }}
                        className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                      >
                        <Save size={18} />
                        Save
                      </button>
                      <button
                        onClick={() => {
                          setTempDisplayName(displayName);
                          setIsEditingName(false);
                        }}
                        className={`flex-1 ${
                          isDarkTheme ? "bg-slate-700" : "bg-gray-200"
                        } py-3 rounded-xl font-bold`}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-2xl font-bold ${
                        isDarkTheme ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {displayName}
                    </span>
                    <button
                      onClick={() => {
                        setTempDisplayName(displayName);
                        setIsEditingName(true);
                      }}
                      className="p-3 bg-blue-600 text-white rounded-xl"
                    >
                      <Edit2 size={18} />
                    </button>
                  </div>
                )}
              </div>

              <div
                className={`${card} rounded-xl p-6 border shadow-xl card-3d interactive-block`}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 20;
                  const rotateY = (centerX - x) / 20;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
                }}
              >
                <h3
                  className={`font-bold text-lg mb-4 flex items-center gap-2 ${
                    isDarkTheme ? "text-white" : "text-gray-900"
                  }`}
                >
                  <IndianRupee size={20} />
                  Monthly Salary & Budget
                </h3>
                {isEditingSalary ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <IndianRupee
                        size={24}
                        className={isDarkTheme ? "text-white" : "text-gray-900"}
                      />
                      <input
                        type="number"
                        value={tempSalary}
                        onChange={(e) =>
                          setTempSalary(parseInt(e.target.value) || 0)
                        }
                        className={`flex-1 px-4 py-3 ${
                          isDarkTheme
                            ? "bg-slate-700 border-slate-600 text-white"
                            : "bg-white border-gray-300 text-gray-900"
                        } border-2 rounded-xl font-bold text-xl`}
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setMonthlySalary(tempSalary);
                          setMonthlyLimit(tempSalary);
                          setIncome(tempSalary);
                          setIsEditingSalary(false);
                        }}
                        className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                      >
                        <Save size={18} />
                        Save
                      </button>
                      <button
                        onClick={() => {
                          setTempSalary(monthlySalary);
                          setIsEditingSalary(false);
                        }}
                        className={`flex-1 ${
                          isDarkTheme ? "bg-slate-700" : "bg-gray-200"
                        } py-3 rounded-xl font-bold`}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-3xl font-bold flex items-center ${
                        isDarkTheme ? "text-white" : "text-gray-900"
                      }`}
                    >
                      <IndianRupee size={28} />
                      {monthlySalary.toLocaleString("en-IN")}
                    </span>
                    <button
                      onClick={() => {
                        setTempSalary(monthlySalary);
                        setIsEditingSalary(true);
                      }}
                      className="p-3 bg-blue-600 text-white rounded-xl"
                    >
                      <Edit2 size={18} />
                    </button>
                  </div>
                )}
              </div>

              <div
                className={`${card} rounded-xl p-6 border shadow-xl card-3d smooth-shadow`}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 20;
                  const rotateY = (centerX - x) / 20;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
                }}
              >
                <h3
                  className={`font-bold text-lg mb-4 ${
                    isDarkTheme ? "text-white" : "text-gray-900"
                  }`}
                >
                  Account Info
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span
                      className={
                        isDarkTheme ? "text-slate-400" : "text-gray-600"
                      }
                    >
                      User ID
                    </span>
                    <span
                      className={`font-bold ${
                        isDarkTheme ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {userName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span
                      className={
                        isDarkTheme ? "text-slate-400" : "text-gray-600"
                      }
                    >
                      Login Date
                    </span>
                    <span
                      className={`font-bold ${
                        isDarkTheme ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {currentTime.toLocaleDateString("en-IN")}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    setUserId("");
                    setPin("");
                    setPage("home");
                  }}
                  className="w-full bg-red-600 text-white py-4 rounded-xl font-bold"
                >
                  LOGOUT
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {showAddNote && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className={`${card} rounded-3xl w-full max-w-md p-6 border`}>
            <div className="flex justify-between items-center mb-6">
              <h2
                className={`text-2xl font-bold ${
                  isDarkTheme ? "text-white" : "text-gray-900"
                }`}
              >
                Add Note
              </h2>
              <button
                onClick={() => setShowAddNote(false)}
                className={`p-2 ${
                  isDarkTheme ? "hover:bg-slate-700" : "hover:bg-gray-100"
                } rounded-xl`}
              >
                <X
                  size={24}
                  className={isDarkTheme ? "text-white" : "text-gray-900"}
                />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                {noteIcons.map((icon) => (
                  <button
                    key={icon}
                    onClick={() => setNewNote({ ...newNote, icon })}
                    className={`text-2xl p-2 rounded-lg ${
                      newNote.icon === icon
                        ? "bg-blue-500/20"
                        : "hover:bg-slate-700"
                    }`}
                  >
                    {icon}
                  </button>
                ))}
              </div>
              <input
                type="text"
                value={newNote.title}
                onChange={(e) =>
                  setNewNote({ ...newNote, title: e.target.value })
                }
                placeholder="Note title"
                className={`w-full px-4 py-3 ${
                  isDarkTheme
                    ? "bg-slate-700 text-white"
                    : "bg-gray-100 text-gray-900"
                } rounded-xl outline-none font-semibold`}
              />
              <textarea
                value={newNote.content}
                onChange={(e) =>
                  setNewNote({ ...newNote, content: e.target.value })
                }
                placeholder="Write something..."
                rows={4}
                className={`w-full ${
                  isDarkTheme
                    ? "bg-slate-700 text-white"
                    : "bg-gray-100 text-gray-900"
                } rounded-xl p-4 outline-none`}
              />
              <select
                value={newNote.category}
                onChange={(e) =>
                  setNewNote({ ...newNote, category: e.target.value })
                }
                className={`w-full ${
                  isDarkTheme
                    ? "bg-slate-700 text-white"
                    : "bg-gray-100 text-gray-900"
                } px-4 py-4 rounded-xl font-semibold`}
              >
                <option value="Personal">Personal</option>
                <option value="Official">Official</option>
              </select>
              <button
                onClick={() => {
                  if (newNote.title.trim()) {
                    setNotes([
                      ...notes,
                      {
                        id: Date.now(),
                        title: newNote.title,
                        content: newNote.content,
                        category: newNote.category,
                        icon: newNote.icon,
                        date: new Date().toISOString().split("T")[0],
                      },
                    ]);
                    setNewNote({
                      title: "",
                      content: "",
                      category: "Personal",
                      icon: "📝",
                    });
                    setShowAddNote(false);
                  }
                }}
                className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold"
              >
                Add Note
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddTask && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className={`${card} rounded-3xl w-full max-w-md p-6 border`}>
            <div className="flex justify-between items-center mb-6">
              <h2
                className={`text-2xl font-bold ${
                  isDarkTheme ? "text-white" : "text-gray-900"
                }`}
              >
                Add Task
              </h2>
              <button
                onClick={() => setShowAddTask(false)}
                className={`p-2 ${
                  isDarkTheme ? "hover:bg-slate-700" : "hover:bg-gray-100"
                } rounded-xl`}
              >
                <X
                  size={24}
                  className={isDarkTheme ? "text-white" : "text-gray-900"}
                />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                value={newTask.title}
                onChange={(e) =>
                  setNewTask({ ...newTask, title: e.target.value })
                }
                placeholder="Task title"
                className={`w-full px-4 py-3 ${
                  isDarkTheme
                    ? "bg-slate-700 text-white"
                    : "bg-gray-100 text-gray-900"
                } rounded-xl outline-none font-semibold`}
              />
              <input
                type="date"
                value={newTask.dueDate}
                onChange={(e) =>
                  setNewTask({ ...newTask, dueDate: e.target.value })
                }
                className={`w-full px-4 py-3 ${
                  isDarkTheme
                    ? "bg-slate-700 text-white"
                    : "bg-gray-100 text-gray-900"
                } rounded-xl outline-none`}
              />
              <input
                type="time"
                value={newTask.dueTime}
                onChange={(e) =>
                  setNewTask({ ...newTask, dueTime: e.target.value })
                }
                className={`w-full px-4 py-3 ${
                  isDarkTheme
                    ? "bg-slate-700 text-white"
                    : "bg-gray-100 text-gray-900"
                } rounded-xl outline-none`}
              />
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={newTask.reminder}
                  onChange={(e) =>
                    setNewTask({ ...newTask, reminder: e.target.checked })
                  }
                  className="w-5 h-5"
                />
                <span className={isDarkTheme ? "text-white" : "text-gray-900"}>
                  Set reminder notification
                </span>
              </label>
              <button
                onClick={() => {
                  if (newTask.title.trim()) {
                    setTasks([
                      ...tasks,
                      {
                        id: Date.now(),
                        title: newTask.title,
                        category: "Work",
                        completed: false,
                        dueDate: newTask.dueDate,
                        dueTime: newTask.dueTime,
                        reminder: newTask.reminder,
                      },
                    ]);
                    setNewTask({
                      title: "",
                      dueDate: "",
                      dueTime: "",
                      reminder: false,
                    });
                    setShowAddTask(false);
                  }
                }}
                className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddGoal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className={`${card} rounded-3xl w-full max-w-md p-6 border`}>
            <div className="flex justify-between items-center mb-6">
              <h2
                className={`text-2xl font-bold ${
                  isDarkTheme ? "text-white" : "text-gray-900"
                }`}
              >
                Add Goal
              </h2>
              <button
                onClick={() => setShowAddGoal(false)}
                className={`p-2 ${
                  isDarkTheme ? "hover:bg-slate-700" : "hover:bg-gray-100"
                } rounded-xl`}
              >
                <X
                  size={24}
                  className={isDarkTheme ? "text-white" : "text-gray-900"}
                />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                value={newGoalTitle}
                onChange={(e) => setNewGoalTitle(e.target.value)}
                placeholder="Goal title"
                className={`w-full px-4 py-3 ${
                  isDarkTheme
                    ? "bg-slate-700 text-white"
                    : "bg-gray-100 text-gray-900"
                } rounded-xl outline-none font-semibold`}
              />
              <button
                onClick={() => {
                  if (newGoalTitle.trim()) {
                    setGoals([
                      ...goals,
                      {
                        id: Date.now(),
                        title: newGoalTitle,
                        progress: 0,
                      },
                    ]);
                    setNewGoalTitle("");
                    setShowAddGoal(false);
                  }
                }}
                className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold"
              >
                Add Goal
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddExpense && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div
            className={`${card} rounded-3xl w-full max-w-md p-6 border max-h-[90vh] overflow-y-auto`}
          >
            <div className="flex justify-between items-center mb-6">
              <h2
                className={`text-2xl font-bold ${
                  isDarkTheme ? "text-white" : "text-gray-900"
                }`}
              >
                Add Expense
              </h2>
              <button
                onClick={() => setShowAddExpense(false)}
                className={`p-2 ${
                  isDarkTheme ? "hover:bg-slate-700" : "hover:bg-gray-100"
                } rounded-xl`}
              >
                <X
                  size={24}
                  className={isDarkTheme ? "text-white" : "text-gray-900"}
                />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                value={newExpense.title}
                onChange={(e) =>
                  setNewExpense({ ...newExpense, title: e.target.value })
                }
                placeholder="Expense title"
                className={`w-full px-4 py-3 ${
                  isDarkTheme
                    ? "bg-slate-700 text-white"
                    : "bg-gray-100 text-gray-900"
                } rounded-xl outline-none font-semibold`}
              />
              <input
                type="number"
                value={newExpense.amount}
                onChange={(e) =>
                  setNewExpense({ ...newExpense, amount: e.target.value })
                }
                placeholder="Amount (₹)"
                className={`w-full px-4 py-3 ${
                  isDarkTheme
                    ? "bg-slate-700 text-white"
                    : "bg-gray-100 text-gray-900"
                } rounded-xl outline-none font-bold text-xl`}
              />
              <select
                value={newExpense.category}
                onChange={(e) => {
                  setNewExpense({ ...newExpense, category: e.target.value });
                  if (e.target.value === "Others-Custom") {
                    setShowCustomCategory(true);
                  } else {
                    setShowCustomCategory(false);
                  }
                }}
                className={`w-full ${
                  isDarkTheme
                    ? "bg-slate-700 text-white"
                    : "bg-gray-100 text-gray-900"
                } px-4 py-4 rounded-xl font-semibold`}
              >
                <optgroup label="🍕 Food">
                  <option value="Food-Morning">☕ Morning</option>
                  <option value="Food-Afternoon">🌅 Afternoon</option>
                  <option value="Food-Night">🌙 Night</option>
                </optgroup>
                <optgroup label="🚗 Transport">
                  <option value="Transport-Train">🚂 Train</option>
                  <option value="Transport-Bus">🚌 Bus</option>
                  <option value="Transport-Bike">🏍️ Bike</option>
                </optgroup>
                <optgroup label="🏠 Utilities">
                  <option value="Utility-Electricity">⚡ Electricity</option>
                  <option value="Utility-Water">💧 Water</option>
                  <option value="Utility-Gas">🔥 Gas</option>
                  <option value="Utility-Internet">🌐 Internet</option>
                </optgroup>
                <optgroup label="📱 Mobile & Recharge">
                  <option value="Mobile-Recharge">📱 Mobile Recharge</option>
                  <option value="Mobile-Bill">📞 Mobile Bill</option>
                  <option value="Mobile-DTH">📺 DTH/Cable</option>
                </optgroup>
                <optgroup label="🛒 Groceries">
                  <option value="Groceries-Monthly">
                    🛒 Monthly Groceries
                  </option>
                  <option value="Groceries-Vegetables">🥬 Vegetables</option>
                  <option value="Groceries-Dairy">🥛 Dairy Products</option>
                </optgroup>
                <optgroup label="💰 Investment">
                  <option value="Investment-SIP">📈 SIP</option>
                  <option value="Investment-Gold">💰 Gold</option>
                  <option value="Investment-Chit">💳 Chit Fund</option>
                  <option value="Investment-New">💹 New Investment</option>
                  <option value="Investment-Stock">📊 Stocks</option>
                </optgroup>
                <optgroup label="🏥 Health">
                  <option value="Health-Insurance">🏥 Health Insurance</option>
                  <option value="Health-Medicine">💊 Medicine</option>
                  <option value="Health-Checkup">🩺 Health Checkup</option>
                </optgroup>
                <optgroup label="📦 Others">
                  <option value="Others-Shopping">🛍️ Shopping</option>
                  <option value="Others-Entertainment">🎬 Entertainment</option>
                  <option value="Others-Education">📚 Education</option>
                  <option value="Others-Rent">🏠 Rent</option>
                  <option value="Others-Custom">✏️ Custom Type</option>
                </optgroup>
              </select>

              {showCustomCategory && (
                <input
                  type="text"
                  value={newExpense.customType}
                  onChange={(e) =>
                    setNewExpense({ ...newExpense, customType: e.target.value })
                  }
                  placeholder="Enter custom category (e.g., Gym, Books)"
                  className={`w-full px-4 py-3 ${
                    isDarkTheme
                      ? "bg-slate-700 text-white"
                      : "bg-gray-100 text-gray-900"
                  } rounded-xl outline-none font-semibold`}
                />
              )}

              <button
                onClick={() => {
                  if (
                    newExpense.title.trim() &&
                    newExpense.amount &&
                    parseFloat(newExpense.amount) > 0
                  ) {
                    const finalCategory =
                      newExpense.category === "Others-Custom" &&
                      newExpense.customType
                        ? `Others-${newExpense.customType}`
                        : newExpense.category;

                    setExpenses([
                      ...expenses,
                      {
                        id: Date.now(),
                        title: newExpense.title,
                        amount: parseFloat(newExpense.amount),
                        category: finalCategory,
                        date: new Date().toISOString().split("T")[0],
                      },
                    ]);
                    setNewExpense({
                      title: "",
                      amount: "",
                      category: "Food-Morning",
                      customType: "",
                    });
                    setShowCustomCategory(false);
                    setShowAddExpense(false);
                  }
                }}
                className="w-full bg-red-600 text-white py-4 rounded-xl font-bold"
              >
                Add Expense
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddHabit && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className={`${card} rounded-3xl w-full max-w-md p-6 border`}>
            <div className="flex justify-between items-center mb-6">
              <h2
                className={`text-2xl font-bold ${
                  isDarkTheme ? "text-white" : "text-gray-900"
                }`}
              >
                Add Habit
              </h2>
              <button
                onClick={() => setShowAddHabit(false)}
                className={`p-2 ${
                  isDarkTheme ? "hover:bg-slate-700" : "hover:bg-gray-100"
                } rounded-xl`}
              >
                <X
                  size={24}
                  className={isDarkTheme ? "text-white" : "text-gray-900"}
                />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                value={newHabit.title}
                onChange={(e) =>
                  setNewHabit({ ...newHabit, title: e.target.value })
                }
                placeholder="Habit title"
                className={`w-full px-4 py-3 ${
                  isDarkTheme
                    ? "bg-slate-700 text-white"
                    : "bg-gray-100 text-gray-900"
                } rounded-xl outline-none font-semibold`}
              />
              <button
                onClick={() => {
                  if (newHabit.title.trim()) {
                    setHabits([
                      ...habits,
                      {
                        id: Date.now(),
                        title: newHabit.title,
                        completed: false,
                        streak: 0,
                      },
                    ]);
                    setNewHabit({ title: "" });
                    setShowAddHabit(false);
                  }
                }}
                className="w-full bg-green-600 text-white py-4 rounded-xl font-bold"
              >
                Add Habit
              </button>
            </div>
          </div>
        </div>
      )}

      {showResetDialog && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className={`${card} rounded-3xl w-full max-w-md p-6 border`}>
            <div className="mb-6">
              <h2
                className={`text-2xl font-bold mb-3 ${
                  isDarkTheme ? "text-white" : "text-gray-900"
                }`}
              >
                Reset Dashboard
              </h2>
              <p
                className={`text-sm ${
                  isDarkTheme ? "text-slate-400" : "text-gray-600"
                }`}
              >
                This will clear all your expenses, tasks, notes, goals, and
                habits. Your current balance will reset to ₹0.
              </p>
              <div
                className={`mt-4 p-4 rounded-xl ${
                  isDarkTheme ? "bg-blue-500/10" : "bg-blue-50"
                }`}
              >
                <p
                  className={`text-sm font-semibold ${
                    isDarkTheme ? "text-blue-400" : "text-blue-700"
                  }`}
                >
                  Current Salary Limit: ₹{monthlySalary.toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleResetWithCurrentLimit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition flex items-center justify-center gap-2"
              >
                <RefreshCw size={20} />
                Reset with Current Limit (₹
                {monthlySalary.toLocaleString("en-IN")})
              </button>

              <button
                onClick={handleResetWithNewLimit}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-bold transition flex items-center justify-center gap-2"
              >
                <Edit2 size={20} />
                Reset and Set New Limit
              </button>

              <button
                onClick={() => setShowResetDialog(false)}
                className={`w-full ${
                  isDarkTheme
                    ? "bg-slate-700 hover:bg-slate-600"
                    : "bg-gray-200 hover:bg-gray-300"
                } py-4 rounded-xl font-bold transition`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="glass-bottom-nav fixed bottom-0 left-0 right-0 px-2 py-4 max-w-7xl mx-auto z-50 lg:rounded-t-2xl">
        <div className="flex justify-around items-center">
          <button
            onClick={() => setPage("home")}
            className={`nav-button ${
              page === "home" ? "active" : ""
            } flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
              page === "home"
                ? "text-blue-500"
                : isDarkTheme
                ? "text-slate-400"
                : "text-gray-500"
            }`}
          >
            <Home size={24} />
            <span className="text-xs font-semibold">Home</span>
          </button>
          <button
            onClick={() => setPage("notes")}
            className={`nav-button ${
              page === "notes" ? "active" : ""
            } flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
              page === "notes"
                ? "text-purple-500"
                : isDarkTheme
                ? "text-slate-400"
                : "text-gray-500"
            }`}
          >
            <FileText size={24} />
            <span className="text-xs font-semibold">Notes</span>
          </button>
          <button
            onClick={() => setPage("tasks")}
            className={`nav-button ${
              page === "tasks" ? "active" : ""
            } flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
              page === "tasks"
                ? "text-indigo-500"
                : isDarkTheme
                ? "text-slate-400"
                : "text-gray-500"
            }`}
          >
            <CheckCircle2 size={24} />
            <span className="text-xs font-semibold">Tasks</span>
          </button>
          <button
            onClick={() => setPage("goals")}
            className={`nav-button ${
              page === "goals" ? "active" : ""
            } flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
              page === "goals"
                ? "text-purple-500"
                : isDarkTheme
                ? "text-slate-400"
                : "text-gray-500"
            }`}
          >
            <Target size={24} />
            <span className="text-xs font-semibold">Goals</span>
          </button>
          <button
            onClick={() => setPage("habits")}
            className={`nav-button ${
              page === "habits" ? "active" : ""
            } flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
              page === "habits"
                ? "text-green-500"
                : isDarkTheme
                ? "text-slate-400"
                : "text-gray-500"
            }`}
          >
            <Sparkles size={24} />
            <span className="text-xs font-semibold">Habits</span>
          </button>
          <button
            onClick={() => setPage("settings")}
            className={`nav-button ${
              page === "settings" ? "active" : ""
            } flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
              page === "settings"
                ? "text-orange-500"
                : isDarkTheme
                ? "text-slate-400"
                : "text-gray-500"
            }`}
          >
            <Settings size={24} />
            <span className="text-xs font-semibold">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}
