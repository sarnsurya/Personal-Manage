import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  FileText,
  CheckCircle2,
  Target,
  Sparkles,
  Settings,
} from "../Icons";

export default function BottomNav({ isDarkTheme }) {
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.pathname.slice(1) || "home";

  const navItems = [
    { path: "/", name: "home", icon: Home, color: "blue-500", label: "Home" },
    {
      path: "/notes",
      name: "notes",
      icon: FileText,
      color: "purple-500",
      label: "Notes",
    },
    {
      path: "/tasks",
      name: "tasks",
      icon: CheckCircle2,
      color: "indigo-500",
      label: "Tasks",
    },
    {
      path: "/goals",
      name: "goals",
      icon: Target,
      color: "purple-500",
      label: "Goals",
    },
    {
      path: "/habits",
      name: "habits",
      icon: Sparkles,
      color: "green-500",
      label: "Habits",
    },
    {
      path: "/settings",
      name: "settings",
      icon: Settings,
      color: "orange-500",
      label: "Settings",
    },
  ];

  return (
    <div className="glass-bottom-nav fixed bottom-0 left-0 right-0 px-2 py-4 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-around items-center">
        {navItems.map(({ path, name, icon: Icon, color, label }) => (
          <button
            key={name}
            onClick={() => navigate(path)}
            className={`nav-button ${
              page === name ? "active" : ""
            } flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
              page === name
                ? `text-${color}`
                : isDarkTheme
                ? "text-slate-400"
                : "text-gray-500"
            }`}
          >
            <Icon size={24} />
            <span className="text-xs font-semibold">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
