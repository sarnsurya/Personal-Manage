import React from "react";
import { useNavigate } from "react-router-dom";
import { Sun, Moon, User } from "../Icons";

export default function TopNav({ currentTime, isDarkTheme, setIsDarkTheme }) {
  const navigate = useNavigate();

  return (
    <div className="glass-nav fixed top-0 left-0 right-0 px-4 sm:px-6 py-4 w-full mx-auto z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
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
            onClick={() => navigate("/settings")}
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
  );
}
