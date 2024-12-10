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
          <div className="flex flex-col md:flex-row">
            {/* Title Input */}
            <div className="pr-2 flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Topbar Text
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter section title"
                value={data.topbarText}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    topbarText: e.target.value,
                  }))
                }
              />
            </div>
            {/* Title color Input */}
            <div className="pr-2">
              <label className="block text-sm font-medium text-gray-700">
                Topbar Color
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter section title"
                value={data.topbarColor}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    topbarColor: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            {/* Posting Title Input */}
            <div className="pr-2 flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Posting Title Text
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter section title"
                value={data.title}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
              />
            </div>{" "}
            {/* Posting Title Color */}
            <div className="pr-2">
              <label className="block text-sm font-medium text-gray-700">
                Posting Color
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter section title"
                value={data.jobPostingBackgroundColor}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    jobPostingBackgroundColor: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          {/* Posting subtitle Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Posting Sub-title Text
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter section title"
              value={data.subTitle}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  subTitle: e.target.value,
                }))
              }
            />
          </div>

          {/* Logo upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload File
            </label>
            <div className="mt-1 flex items-center space-x-4">
              <label
                htmlFor="file-upload"
                className="cursor-pointer px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Choose File
              </label>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept=".pdf,.jpg,.png"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setData((prev) => ({
                      ...prev,
                      logo: file,
                      previewUrl: URL.createObjectURL(file),
                    }));
                  }
                }}
              />
              {data.logo && (
                <span className="text-sm text-gray-700">{data.logo.name}</span>
              )}
            </div>
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
