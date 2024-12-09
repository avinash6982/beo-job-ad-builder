import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddSectionFormModal = ({ onClose, onSuccess, edit, data }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [html, setHtml] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && description.trim()) {
      const newSection = {
        id: edit ? data.id : uuidv4(), // Generate a unique ID
        name,
        description,
        html,
      };
      onSuccess(newSection);
      onClose();
    } else {
      alert("Both fields are required!");
    }
  };

  useEffect(() => {
    if (edit && !!data) {
      setName(data?.name);
      setDescription(data?.description);
      setHtml(data?.html);
    }
  }, [edit, data]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Content */}
      <div className="bg-white w-full max-w-4xl min-h-[400px] rounded-lg shadow-lg p-8">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-md font-semibold">Add Section</h3>
          <button
            className="text-gray-500 hover:text-gray-700 transition"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-6">
          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter section title"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter section description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              required
            ></textarea>
          </div>

          {/* Html Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              HTML
            </label>
            <textarea
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter HTML"
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              rows="8"
              required
            ></textarea>
          </div>

          {/* Modal Footer */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-3 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-400 transition"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSectionFormModal;
