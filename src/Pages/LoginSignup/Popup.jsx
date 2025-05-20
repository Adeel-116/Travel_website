import React from "react";

function Popup({ type = "success", message, onClose }) {
  const baseColor = type === "success" ? "green" : "red";

  return (
    <div className={`fixed top-5 right-5 z-50 bg-${baseColor}-100 border-l-4 border-${baseColor}-500 text-${baseColor}-700 p-4 rounded shadow-lg transition-all duration-300`}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">{message}</p>
        <button onClick={onClose} className="ml-4 text-xl font-bold text-gray-600 hover:text-gray-900">&times;</button>
      </div>
    </div>
  );
}

export default Popup