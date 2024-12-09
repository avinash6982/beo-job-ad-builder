import React from "react";

const PreviewPanel = () => {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-lg font-semibold mb-4">Preview Settings</h2>
      <div className="mb-4">
        <h3 className="font-medium">View Modes</h3>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
          Compact
        </button>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
          Expanded
        </button>
      </div>
      <button className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600">
        Export
      </button>
    </div>
  );
};

export default PreviewPanel;
