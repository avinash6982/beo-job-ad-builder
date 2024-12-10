import React, { useState } from "react";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { useAppContext } from "../AppDataContext";
import Droppable from "../hoc/Droppable";
import SectionItem from "../components/SectionItem";
import AddSectionFormModal from "../components/AddSectionForm";

import editIcon from "../assets/edit-text.png";
import checkIcon from "../assets/check.png";
import closeIcon from "../assets/close.png";

const BuilderPanel = () => {
  const [editMode, setEditMode] = useState(false);
  const { activeSections, setActiveSections, setSections } = useAppContext();
  const [editSectionModal, setEditSectionModal] = useState(false);

  function handleSectionEdit(data) {
    setEditSectionModal(data);
  }
  function handleSectionDelete(data) {
    setActiveSections((prev) =>
      prev.filter((section) => section.id !== data.id)
    );
    setSections((prev) => [...prev, data]);
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
        <img src={closeIcon} width={14} alt="Delete" />
      </div>
    </div>
  );

  return (
    <div className="bg-white shadow rounded p-4 flex flex-col">
      <div className="flex flex-row justify-between">
        <h2 className="text-lg font-semibold mb-4">Builder</h2>
        {activeSections.length > 0 && (
          <div
            className="cursor-pointer w-8 h-8 hover:bg-green-300 rounded-full flex items-center justify-center transition-all duration-200 mr-2"
            onClick={() => setEditMode(!editMode)}
          >
            <img
              src={editMode ? checkIcon : editIcon}
              width={16}
              alt="Delete"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="font-medium mb-2">Dropped Items</h3>

        <SortableContext
          items={activeSections}
          strategy={verticalListSortingStrategy}
        >
          {activeSections.map((section, index) => (
            <SectionItem
              editMode={editMode}
              actions={<EditActions section={section} />}
              data={section}
              key={index}
            />
          ))}
        </SortableContext>

        {/* {activeSections.map((section, index) => (
        <SectionItem id={section.id} data={section} key={index} />
      ))} */}
        <div className="flex-grow flex justify-center items-center">
          <Droppable id={"builder-dropzone"}>
            <div>Drop Items Here</div>
          </Droppable>
        </div>
      </div>
      {!!editSectionModal && (
        <AddSectionFormModal
          edit={true}
          data={editSectionModal}
          onClose={() => setEditSectionModal(null)}
          onSuccess={(data) => {
            setActiveSections((prev) =>
              prev.map((section) => (section.id === data.id ? data : section))
            );
          }}
        />
      )}
    </div>
  );
};

export default BuilderPanel;
