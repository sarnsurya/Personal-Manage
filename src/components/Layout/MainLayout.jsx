import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

export default function MainLayout({
  currentTime,
  isDarkTheme,
  setIsDarkTheme,
}) {
  const bg = isDarkTheme
    ? "bg-gradient-to-b from-indigo-950 via-blue-950 to-slate-900 text-white"
    : "bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 text-gray-900";

  return (
    <div className={`w-full min-h-screen ${bg}`}>
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

      <TopNav
        currentTime={currentTime}
        isDarkTheme={isDarkTheme}
        setIsDarkTheme={setIsDarkTheme}
      />

      <div className="pt-20 pb-28">
        <Outlet />
      </div>

      <BottomNav isDarkTheme={isDarkTheme} />
    </div>
  );
}
