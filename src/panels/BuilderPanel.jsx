import React, { useState } from "react";
import SectionItem from "../components/SectionItem";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Droppable from "../hoc/Droppable";
import { useAppContext } from "../AppDataContext";
import editIcon from "../assets/edit-text.png";
import deleteIcon from "../assets/trash.png";
import checkIcon from "../assets/check.png";
import plusIcon from "../assets/plus.png";

const BuilderPanel = () => {
  const [editMode, setEditMode] = useState(false);
  const { activeSections, setActiveSections } = useAppContext();

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
              extras="remove"
              extrasAction={setActiveSections}
              id={section.id}
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
    </div>
  );
};

export default BuilderPanel;
