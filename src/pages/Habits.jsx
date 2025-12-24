import React from "react";
import { exportToCSV, exportToText } from "../utils/helpers.jsx";
import {
  Download,
  FileText,
  Plus,
  Trash2,
  Circle,
  CheckCircle2,
} from "../components/Icons";

export default function Habits({
  habits,
  setHabits,
  isDarkTheme,
  card,
  setShowAddHabit,
}) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 page-content">
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
            className={`${card} rounded-xl p-4 border shadow-lg`}
          >
            <div className="flex items-start gap-3">
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
                    className={isDarkTheme ? "text-slate-600" : "text-gray-400"}
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
  );
}
