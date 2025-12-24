import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [userId, setUserId] = useState("");
  const [pin, setPin] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = () => {
    if (userId.length >= 2 && pin.length >= 4) {
      onLogin(userId);
      setLoginError("");
    } else {
      setLoginError("User ID must be 2+ characters and PIN must be 4+ digits");
    }
  };

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
              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none font-semibold text-gray-900"
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
              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none font-semibold tracking-widest text-gray-900"
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
