import React from "react";
import { exportToCSV, exportToText } from "../utils/helpers.jsx";
import { Download, FileText, Plus, Trash2 } from "../components/Icons";

export default function Goals({
  goals,
  setGoals,
  isDarkTheme,
  card,
  setShowAddGoal,
}) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 page-content">
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
            className={`${card} rounded-xl p-5 border shadow-lg`}
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
                        ? { ...g, progress: Math.min(100, g.progress + 10) }
                        : g
                    )
                  )
                }
                className="flex-1 py-2 bg-blue-600 rounded-xl font-bold text-white"
              >
                +10%
              </button>
              <button
                onClick={() => setGoals(goals.filter((g) => g.id !== goal.id))}
                className="px-4 py-2 bg-red-500 rounded-xl"
              >
                <Trash2 size={18} className="text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
