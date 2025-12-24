import {
  Coffee,
  Sunset,
  CloudMoon,
  Train,
  Bus,
  Bike,
} from "../components/Icons";

// Greeting based on time of day
export const getGreeting = (currentTime) => {
  const hour = currentTime.getHours();
  if (hour < 12) return "GOOD MORNING";
  if (hour < 17) return "GOOD AFTERNOON";
  if (hour < 21) return "GOOD EVENING";
  return "GOOD NIGHT";
};

// Daily motivational quote
export const getDailyQuote = (currentTime) => {
  const quotes = [
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
  ];
  const dayOfYear = Math.floor(
    (currentTime - new Date(currentTime.getFullYear(), 0, 0)) /
      1000 /
      60 /
      60 /
      24
  );
  return quotes[dayOfYear % quotes.length];
};

// Get icon for expense category
export const getCategoryIcon = (category) => {
  if (category.includes("Morning"))
    return <Coffee size={20} className="text-yellow-500" />;
  if (category.includes("Afternoon"))
    return <Sunset size={20} className="text-orange-500" />;
  if (category.includes("Night"))
    return <CloudMoon size={20} className="text-blue-500" />;
  if (category.includes("Train"))
    return <Train size={20} className="text-green-500" />;
  if (category.includes("Bus"))
    return <Bus size={20} className="text-red-500" />;
  if (category.includes("Bike"))
    return <Bike size={20} className="text-purple-500" />;
  if (category.includes("Utility"))
    return <span className="text-yellow-600">⚡</span>;
  if (category.includes("Mobile"))
    return <span className="text-blue-600">📱</span>;
  if (category.includes("Groceries"))
    return <span className="text-green-600">🛒</span>;
  if (category.includes("SIP"))
    return <span className="text-indigo-600">📈</span>;
  if (category.includes("Gold"))
    return <span className="text-yellow-500">💰</span>;
  if (category.includes("Chit"))
    return <span className="text-purple-600">💳</span>;
  if (category.includes("Investment"))
    return <span className="text-teal-600">💹</span>;
  if (category.includes("Insurance"))
    return <span className="text-red-600">🏥</span>;
  if (category.includes("Other"))
    return <span className="text-gray-600">📦</span>;
  return null;
};

// Export data to CSV format
export const exportToCSV = (data, type) => {
  let csv = "";
  const date = new Date().toISOString().split("T")[0];

  if (type === "expenses") {
    csv = "Title,Amount (₹),Category,Date\\n";
    data.forEach((item) => {
      csv += `"${item.title}",${item.amount},"${item.category}","${item.date}"\\n`;
    });
  } else if (type === "tasks") {
    csv = "Title,Category,Status,Due Date,Due Time,Reminder\\n";
    data.forEach((item) => {
      csv += `"${item.title}","${item.category}","${
        item.completed ? "Completed" : "Pending"
      }","${item.dueDate || "N/A"}","${item.dueTime || "N/A"}","${
        item.reminder ? "Yes" : "No"
      }"\\n`;
    });
  } else if (type === "notes") {
    csv = "Title,Content,Category,Date,Icon\\n";
    data.forEach((item) => {
      csv += `"${item.title}","${item.content}","${item.category}","${item.date}","${item.icon}"\\n`;
    });
  } else if (type === "goals") {
    csv = "Title,Progress (%)\\n";
    data.forEach((item) => {
      csv += `"${item.title}",${item.progress}\\n`;
    });
  } else if (type === "habits") {
    csv = "Title,Status,Streak (days)\\n";
    data.forEach((item) => {
      csv += `"${item.title}","${item.completed ? "Completed" : "Pending"}",${
        item.streak
      }\\n`;
    });
  }

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", `${type}_${date}.csv`);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Export data to text format
export const exportToText = (data, type) => {
  let text = "";
  const date = new Date().toLocaleDateString("en-IN");

  if (type === "expenses") {
    text = `EXPENSES REPORT\\nGenerated: ${date}\\n${"=".repeat(50)}\\n\\n`;
    data.forEach((item, i) => {
      text += `${i + 1}. ${item.title}\\n`;
      text += `   Amount: ₹${item.amount}\\n`;
      text += `   Category: ${item.category}\\n`;
      text += `   Date: ${item.date}\\n\\n`;
    });
    text += `${"=".repeat(50)}\\n`;
    text += `Total Expenses: ₹${data.reduce(
      (sum, exp) => sum + exp.amount,
      0
    )}\\n`;
  } else if (type === "tasks") {
    text = `TASKS REPORT\\nGenerated: ${date}\\n${"=".repeat(50)}\\n\\n`;
    data.forEach((item, i) => {
      text += `${i + 1}. ${item.title}\\n`;
      text += `   Category: ${item.category}\\n`;
      text += `   Status: ${item.completed ? "✓ Completed" : "○ Pending"}\\n`;
      text += `   Due: ${item.dueDate || "N/A"} ${item.dueTime || ""}\\n`;
      text += `   Reminder: ${item.reminder ? "Yes" : "No"}\\n\\n`;
    });
  } else if (type === "notes") {
    text = `NOTES COLLECTION\\nGenerated: ${date}\\n${"=".repeat(50)}\\n\\n`;
    data.forEach((item, i) => {
      text += `${item.icon} ${item.title}\\n`;
      text += `${"-".repeat(40)}\\n`;
      text += `${item.content}\\n\\n`;
      text += `Category: ${item.category} | Date: ${item.date}\\n`;
      text += `\\n${"=".repeat(50)}\\n\\n`;
    });
  } else if (type === "goals") {
    text = `GOALS TRACKER\\nGenerated: ${date}\\n${"=".repeat(50)}\\n\\n`;
    data.forEach((item, i) => {
      text += `${i + 1}. ${item.title}\\n`;
      text += `   Progress: ${item.progress}%\\n`;
      text += `   Status: ${"█".repeat(
        Math.floor(item.progress / 10)
      )}${"░".repeat(10 - Math.floor(item.progress / 10))}\\n\\n`;
    });
  } else if (type === "habits") {
    text = `HABITS TRACKER\\nGenerated: ${date}\\n${"=".repeat(50)}\\n\\n`;
    data.forEach((item, i) => {
      text += `${i + 1}. ${item.title}\\n`;
      text += `   Status: ${item.completed ? "✓ Done Today" : "○ Pending"}\\n`;
      text += `   Streak: ${item.streak} days 🔥\\n\\n`;
    });
  }

  const blob = new Blob([text], { type: "text/plain;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute(
    "download",
    `${type}_${new Date().toISOString().split("T")[0]}.txt`
  );
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
