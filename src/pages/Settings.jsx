import React from "react";
import { User, IndianRupee, Edit2, Save, X } from "../components/Icons";

export default function Settings({
  displayName,
  setDisplayName,
  tempDisplayName,
  setTempDisplayName,
  isEditingName,
  setIsEditingName,
  monthlySalary,
  setMonthlySalary,
  tempSalary,
  setTempSalary,
  isEditingSalary,
  setIsEditingSalary,
  monthlyLimit,
  setMonthlyLimit,
  isDarkTheme,
  card,
  onLogout,
}) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 page-content">
      <h1
        className={`text-3xl font-bold mb-6 ${
          isDarkTheme ? "text-white" : "text-gray-900"
        }`}
      >
        SETTINGS
      </h1>

      <div className="space-y-4">
        {/* Display Name Card */}
        <div className={`${card} rounded-xl p-6 border shadow-xl`}>
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
              />
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setDisplayName(tempDisplayName);
                    setIsEditingName(false);
                  }}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition"
                >
                  <Save size={20} />
                  Save
                </button>
                <button
                  onClick={() => {
                    setTempDisplayName(displayName);
                    setIsEditingName(false);
                  }}
                  className={`flex-1 ${
                    isDarkTheme
                      ? "bg-slate-700 hover:bg-slate-600"
                      : "bg-gray-200 hover:bg-gray-300"
                  } py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition`}
                >
                  <X size={20} />
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <span
                className={`text-2xl font-black ${
                  isDarkTheme ? "text-white" : "text-gray-900"
                }`}
              >
                {displayName}
              </span>
              <button
                onClick={() => setIsEditingName(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2 transition"
              >
                <Edit2 size={18} />
                Edit
              </button>
            </div>
          )}
        </div>

        {/* Monthly Salary Card */}
        <div className={`${card} rounded-xl p-6 border shadow-xl`}>
          <h3
            className={`font-bold text-lg mb-4 flex items-center gap-2 ${
              isDarkTheme ? "text-white" : "text-gray-900"
            }`}
          >
            <IndianRupee size={20} />
            Monthly Salary
          </h3>
          {isEditingSalary ? (
            <div className="space-y-3">
              <input
                type="number"
                value={tempSalary}
                onChange={(e) => setTempSalary(Number(e.target.value))}
                className={`w-full px-4 py-3 ${
                  isDarkTheme
                    ? "bg-slate-700 border-slate-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                } border-2 rounded-xl font-bold text-xl`}
              />
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setMonthlySalary(tempSalary);
                    setIsEditingSalary(false);
                  }}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition"
                >
                  <Save size={20} />
                  Save
                </button>
                <button
                  onClick={() => {
                    setTempSalary(monthlySalary);
                    setIsEditingSalary(false);
                  }}
                  className={`flex-1 ${
                    isDarkTheme
                      ? "bg-slate-700 hover:bg-slate-600"
                      : "bg-gray-200 hover:bg-gray-300"
                  } py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition`}
                >
                  <X size={20} />
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <span
                className={`text-2xl font-black flex items-center ${
                  isDarkTheme ? "text-white" : "text-gray-900"
                }`}
              >
                <IndianRupee size={24} />
                {monthlySalary.toLocaleString("en-IN")}
              </span>
              <button
                onClick={() => setIsEditingSalary(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2 transition"
              >
                <Edit2 size={18} />
                Edit
              </button>
            </div>
          )}
        </div>

        {/* Monthly Budget Limit Card */}
        <div className={`${card} rounded-xl p-6 border shadow-xl`}>
          <h3
            className={`font-bold text-lg mb-4 ${
              isDarkTheme ? "text-white" : "text-gray-900"
            }`}
          >
            Monthly Budget Limit
          </h3>
          <div className="flex items-center gap-4">
            <input
              type="number"
              value={monthlyLimit}
              onChange={(e) => setMonthlyLimit(Number(e.target.value))}
              className={`flex-1 px-4 py-3 ${
                isDarkTheme
                  ? "bg-slate-700 border-slate-600 text-white"
                  : "bg-white border-gray-300 text-gray-900"
              } border-2 rounded-xl font-bold text-xl`}
            />
            <IndianRupee
              size={24}
              className={isDarkTheme ? "text-white" : "text-gray-900"}
            />
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
