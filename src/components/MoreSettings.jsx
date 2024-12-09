import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppContext } from "../AppDataContext";

const MoreSettings = ({ onClose }) => {
  const {
    textContent,
    setTextContent,
    colorScheme,
    setColorScheme,
    logo,
    setLogo,
  } = useAppContext();
  const [data, setData] = useState({
    topbarText: "",
    title: "",
    subTitle: "",
    topbarColor: "",
    jobPostingBackgroundColor: "",
    logo: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textContent.topbarText.trim()) {
      setTextContent({
        topbarText: data.topbarText,
        title: data.title,
        subTitle: data.subTitle,
      });
      setColorScheme({
        topbarColor: data.topbarColor,
        jobPostingBackgroundColor: data.jobPostingBackgroundColor,
      });
      setLogo(data.logo);
      onClose();
    } else {
      alert("Both fields are required!");
    }
  };

  useEffect(() => {
    setData({
      topbarText: textContent.topbarText,
      title: textContent.title,
      subTitle: textContent.subTitle,
      topbarColor: colorScheme.topbarColor,
      jobPostingBackgroundColor: colorScheme.jobPostingBackgroundColor,
      logo: logo,
    });
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Content */}
      <div className="bg-white w-full max-w-4xl min-h-[400px] rounded-lg shadow-lg p-8">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-md font-semibold">More Settings</h3>
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
              Topbar Text
            </label>
            {console.warn(textContent.topbarText)}
            <input
              type="text"
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter section title"
              value={textContent.topbarText}
              onChange={(e) =>
                setTextContent((prev) => ({
                  ...prev,
                  topbarText: e.target.value,
                }))
              }
              required
            />
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MoreSettings;
