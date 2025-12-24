import React from "react";
import {
  getGreeting,
  getDailyQuote,
  getCategoryIcon,
  exportToCSV,
  exportToText,
} from "../utils/helpers.jsx";
import {
  RefreshCw,
  IndianRupee,
  TrendingUp,
  Plus,
  Download,
  FileText,
  Sparkles,
} from "../components/Icons";

export default function Home({
  displayName,
  currentTime,
  isDarkTheme,
  card,
  expenses,
  setExpenses,
  income,
  monthlyLimit,
  setShowAddExpense,
  resetDashboard,
}) {
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const currentBalance = income - totalExpenses;
  const budgetProgress =
    monthlyLimit > 0 ? Math.round((totalExpenses / monthlyLimit) * 100) : 0;
  const todayExpenses = expenses
    .filter((e) => e.date === new Date().toISOString().split("T")[0])
    .reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="min-h-screen page-content">
      <div className="text-center mb-8 px-4 sm:px-6 lg:px-8">
        <h1
          className={`text-4xl font-black mb-2 ${
            isDarkTheme ? "text-white" : "text-gray-900"
          }`}
        >
          {getGreeting(currentTime)} 👋
        </h1>
        <p
          className={`text-base ${
            isDarkTheme ? "text-slate-400" : "text-gray-600"
          }`}
        >
          Welcome, {displayName}
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={resetDashboard}
          className="mb-6 w-full lg:max-w-md lg:mx-auto p-3 bg-red-500/20 rounded-xl hover:bg-red-500/30 transition interactive-block flex items-center justify-center gap-2"
        >
          <RefreshCw size={20} className="text-red-500" />
          <span className="text-red-500 font-bold">Reset Dashboard</span>
        </button>

        {/* Current Balance Card */}
        <div className={`mb-6 ${card} rounded-3xl p-6 border shadow-xl`}>
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

        {/* Budget Progress Card */}
        <div className={`mb-6 ${card} rounded-3xl p-6 border shadow-xl`}>
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
                  strokeDasharray={`${(budgetProgress / 100) * 502.4} 502.4`}
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

        {/* Today's Spending Card */}
        <div className={`mb-6 ${card} rounded-3xl p-6 border shadow-xl`}>
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

        {/* Recent Expenses Card */}
        <div className={`${card} rounded-xl p-5 border shadow-xl mb-6`}>
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

        {/* Daily Quote Card */}
        <div className="mb-6">
          <div
            className={`${card} rounded-xl p-5 border shadow-xl smooth-shadow`}
          >
            <div className="flex items-start gap-3">
              <Sparkles size={20} className="text-yellow-500 mt-1" />
              <p
                className={`text-sm leading-relaxed italic ${
                  isDarkTheme ? "text-slate-300" : "text-gray-700"
                }`}
              >
                "{getDailyQuote(currentTime)}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
