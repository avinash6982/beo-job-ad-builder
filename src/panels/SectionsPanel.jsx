import SectionItem from "../components/SectionItem";
import Droppable from "../hoc/Droppable";
import editIcon from "../assets/edit-text.png";
import deleteIcon from "../assets/trash.png";
import checkIcon from "../assets/check.png";
import plusIcon from "../assets/plus.png";
import { useState } from "react";
import AddSectionFormModal from "../components/AddSectionForm";
import { useAppContext } from "../AppDataContext";

const SectionsPanel = ({ loading }) => {
  const { sections, setSections } = useAppContext();
  const [addSectionModalVisible, setAddSectionModalVisible] = useState(false);
  const [editSectionModal, setEditSectionModal] = useState(null);
  const [editMode, setEditMode] = useState(false);
  function handleSectionEdit(data) {
    setEditSectionModal(data);
  }
  function handleSectionDelete(data) {
    let userConfirmed = confirm(
      "Are you sure you want to delete this section?"
    );
    if (userConfirmed)
      setSections((prev) => prev.filter((section) => section.id !== data.id));
  }

  const EditActions = ({ section }) => (
    <div className="flex flex-row space-x-2">
      <div
        className="cursor-pointer p-1 hover:bg-blue-300 rounded-full flex items-center justify-center transition-all duration-200"
        onClick={() => handleSectionEdit(section)}
      >
        <img src={editIcon} width={14} alt="Edit" />
      </div>
      <div
        className="cursor-pointer p-1 hover:bg-red-300 rounded-full flex items-center justify-center transition-all duration-200"
        onClick={() => handleSectionDelete(section)}
      >
        <img src={deleteIcon} width={14} alt="Delete" />
      </div>
    </div>
  );

  return (
    <div className="bg-white shadow rounded p-4">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-lg font-semibold mb-4">Sections</h2>
        {sections.length > 0 && (
          <div className="flex flex-row">
            {editMode ? (
              <>
                <div
                  className="cursor-pointer w-8 h-8 hover:bg-green-300 rounded-full flex items-center justify-center transition-all duration-200 mr-2"
                  onClick={() => setEditMode(false)}
                >
                  <img src={checkIcon} width={16} alt="Delete" />
                </div>
              </>
            ) : (
              <>
                <div
                  className="cursor-pointer w-8 h-8 hover:bg-blue-300 rounded-full flex items-center justify-center transition-all duration-200 mr-2"
                  onClick={() => setEditMode(true)}
                >
                  <img src={editIcon} width={16} alt="Delete" />
                </div>
                <div
                  className="cursor-pointer w-8 h-8 hover:bg-green-300 rounded-full flex items-center justify-center transition-all duration-200"
                  onClick={() => setAddSectionModalVisible(true)}
                >
                  <img src={plusIcon} width={16} alt="Delete" />
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <div className="flex-grow flex flex-col justify-center items-center  ">
        {loading &&
          [0, 0, 0, 0].map((_, index) => (
            <button
              key={index}
              className="w-full p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2 cursor-grab select-none"
            >
              <div className="flex justify-between">
                <h4 className="p-2 text-sm font-semibold tracking-tight text-gray-900 bg-gray-300 animate-pulse w-32 h-6 rounded"></h4>
              </div>
            </button>
          ))}
        {sections.map((section, index) => (
          <SectionItem
            editMode={editMode}
            actions={<EditActions section={section} />}
            data={section}
            key={index}
          />
        ))}
        <Droppable id={"sections-dropzone"}>Drop items back here.</Droppable>
      </div>
      {addSectionModalVisible && (
        <AddSectionFormModal
          onClose={() => setAddSectionModalVisible(false)}
          onSuccess={(data) => setSections([...sections, data])}
        />
      )}
      {!!editSectionModal && (
        <AddSectionFormModal
          edit={true}
          data={editSectionModal}
          onClose={() => setEditSectionModal(null)}
          onSuccess={(data) => {
            setSections((prev) =>
              prev.map((section) => (section.id === data.id ? data : section))
            );
          }}
        />
      )}
    </div>
  );
};

export default SectionsPanel;
