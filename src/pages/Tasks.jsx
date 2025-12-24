import React from "react";
import { exportToCSV, exportToText } from "../utils/helpers.jsx";
import {
  Download,
  FileText,
  Plus,
  Trash2,
  Circle,
  CheckCircle2,
  Clock,
  AlarmClock,
} from "../components/Icons";

export default function Tasks({
  tasks,
  setTasks,
  isDarkTheme,
  card,
  setShowAddTask,
}) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 page-content">
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
            className={`${card} rounded-xl p-4 border shadow-lg`}
          >
            <div className="flex items-start gap-3">
              <button
                onClick={() =>
                  setTasks(
                    tasks.map((t) =>
                      t.id === task.id ? { ...t, completed: !t.completed } : t
                    )
                  )
                }
              >
                {task.completed ? (
                  <CheckCircle2 size={28} className="text-green-500 mt-1" />
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
                onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}
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
