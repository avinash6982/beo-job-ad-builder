import React, { useEffect, useState } from "react";
import { useAppContext } from "../AppDataContext";

const PreviewPanel = () => {
  const { activeSections } = useAppContext();
  const [previewContent, setPreviewContent] = useState("");

  // Generate the HTML content
  const generateHTMLContent = () => {
    let htmlContent = `
      <html>
        <head>
          <title>Job Posting</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
            .container { max-width: 800px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; padding: 20px; background-color: #f1f1f1; border-radius: 10px; }
            .header h1 { font-size: 2.5em; color: #333; margin: 0; }
            .section { margin-bottom: 20px; }
            .section h2 { font-size: 1.8em; color: #444; margin-bottom: 10px; }
            .section p { color: #666; line-height: 1.6; }
            .requirements, .benefits { margin-left: 20px; }
            .requirements ul, .benefits ul { list-style-type: square; }
            .contact { margin-top: 30px; padding: 10px; background-color: #f9f9f9; border-radius: 10px; }
            .footer { text-align: center; margin-top: 40px; font-size: 0.9em; color: #888; }
          </style>
        </head>
        <body>
          <div class="container"> 
            ${activeSections
              .map(
                (item) =>
                  `<div class="section"> 
                  ${item.html}
                </div>`
              )
              .join("")}
            <div class="footer">
              <p>© 2024 Job Posting Company. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;
    return htmlContent;
  };

  console.warn(activeSections);

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
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-lg font-semibold mb-4">Preview Settings</h2>
      <div className="mb-4">
        <h3 className="font-medium">View Modes</h3>
        <button
          onClick={previewHTMLContent}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        >
          Preview
        </button>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
          Expanded
        </button>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Preview:</h2>
        <iframe
          style={{
            height: "60vh",
          }}
          title="HTML Preview"
          srcDoc={previewContent}
          className="w-full h-96 border border-gray-300"
        ></iframe>
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
