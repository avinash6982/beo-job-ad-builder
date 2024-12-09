import React, { useEffect, useState } from "react";
import { useAppContext } from "../AppDataContext";

const PreviewPanel = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const { activeSections } = useAppContext();
  const [previewContent, setPreviewContent] = useState("");

  // Generate the HTML content
  const generateHTMLContent = () => {
    let htmlContent = `
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Job Posting</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f9;
            }
            .container {
              max-width: 900px;
              margin: 20px auto;
              padding: 20px;
            }
            .header {
              text-align: center;
              padding: 20px;
              background-color: #4f46e5;
              color: white;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header h1 {
              font-size: 2em;
              margin: 0;
            }
            .header p {
              font-size: 1em;
              margin-top: 10px;
            }
            .section {
              margin-bottom: 20px;
              padding: 15px;
              background-color: white;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .section h2 {
              font-size: 1.5em;
              color: #333;
              margin-bottom: 10px;
            }
            .section p {
              color: #666;
              line-height: 1.6;
              font-size: 0.9em;
            }
            .requirements ul,
            .benefits ul {
              list-style-type: square;
              margin-left: 20px;
              color: #666;
              font-size: 0.9em;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              font-size: 0.9em;
              color: #888;
            }
          </style>
        </head>
        <body class="h-full">
          <div class="container bg-white shadow-lg rounded-lg">
            <!-- Header Section -->
            <div class="header">
              <h1>Join Our Team!</h1>
              <p class="mt-2">We are looking for talented individuals.</p>
            </div>

            <!-- Dynamic Content Sections -->
            ${activeSections
              .map(
                (item) =>
                  `<div class="section">
                    ${item.html}
                  </div>`
              )
              .join("")}

            <!-- Footer Section -->
            <div class="footer">
              <p>© 2024 Company. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>`;
    return htmlContent;
  };

  // Function to download the generated HTML file
  const downloadHTMLFile = () => {
    const htmlContent = generateHTMLContent();
    const blob = new Blob([htmlContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "sections.html";
    link.click();
  };

  // Function to generate HTML and set it for preview
  const previewHTMLContent = () => {
    const htmlContent = generateHTMLContent();
    setPreviewContent(htmlContent); // Update state to render HTML in preview
  };

  useEffect(() => {
    previewHTMLContent(); // Regenerate preview when activeSections change
  }, [activeSections]);

  return (
    <div className="bg-white shadow rounded p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold mb-4">Preview</h2>
        <div className="mb-4">
          <div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={() => setIsMobileView(!isMobileView)}
                checked={isMobileView}
              />
              <span className="mr-3 text-sm font-medium text-gray-900">
                Mobile View
              </span>
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer-checked:bg-blue-600">
                <div
                  className={`absolute top-[2px] left-[2px] w-5 h-5 bg-white border border-gray-300 rounded-full transition-all ${
                    isMobileView ? "transform translate-x-5" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>
        </div>
        <div className="mt-6 flex justify-center items-center">
          <iframe
            style={{
              height: isMobileView ? "70vh" : "30vh",
              width: isMobileView ? "80%" : "100%",
            }}
            title="HTML Preview"
            srcDoc={previewContent}
            className="w-full h-96 border border-gray-300 iframe"
          ></iframe>
        </div>
      </div>
      <button
        onClick={downloadHTMLFile}
        className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
      >
        Export
      </button>
    </div>
  );
};

export default PreviewPanel;
