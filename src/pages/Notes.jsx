import React from "react";
import { exportToCSV, exportToText } from "../utils/helpers.jsx";
import { Download, FileText, Plus, Trash2 } from "../components/Icons";

export default function Notes({
  notes,
  setNotes,
  isDarkTheme,
  card,
  setShowAddNote,
}) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 page-content">
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
            className={`notion-card ${card} rounded-xl p-5 border shadow-lg cursor-pointer`}
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
                onClick={() => setNotes(notes.filter((n) => n.id !== note.id))}
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
  );
}
