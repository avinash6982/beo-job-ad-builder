import React from "react";
import SectionItem from "../components/SectionItem";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Droppable from "../hoc/Droppable";
import { useAppContext } from "../AppDataContext";

const BuilderPanel = () => {
  const { activeSections, setActiveSections } = useAppContext();

  return (
    <div className="bg-white shadow rounded p-4 flex flex-col">
      <div>
        <h2 className="text-lg font-semibold mb-4">Builder</h2>
      </div>
      <div className="flex flex-col flex-grow">
        <h4 className="mb-2">Dropped Items</h4>

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
