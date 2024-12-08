const sections = ["Section 1", "Section 2", "Section 3"];

const HomeScreen = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:h-screen">
      {/* Sections Panel */}
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-4">Sections</h2>
        {sections.map((section, index) => (
          <div key={index}>{section}</div>
        ))}
      </div>

      {/* Builder Panel */}
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-4">Builder</h2>
        <div>Drop Zone</div>
      </div>

      {/* Preview Settings Panel */}
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
    </div>
  );
};

export default HomeScreen;
