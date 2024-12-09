import { DndContext } from "@dnd-kit/core";
import SectionItem from "../components/SectionItem";
import Droppable from "../hoc/Droppable";
import { useState } from "react";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const initialSections = [
  {
    id: 1,
    title: "Section 1",
  },
  {
    id: 2,
    title: "Section 2",
  },
  {
    id: 3,
    title: "Section 3",
  },
];

const HomeScreen = () => {
  const [sections, setSections] = useState(initialSections);
  const [activeSections, setActiveSections] = useState([]);

  function handleDragEnd({ active, over }) {
    // Get item which is currently being dragged
    let currentSection = active?.data?.current;
    // Check if target element is present
    if (over) {
      if (over.id === "sections-dropzone") {
        //case1: dropped into sections from builder
        let exists = sections.some((obj) => obj.id === currentSection.id);
        if (!exists) {
          setSections([...sections, currentSection]);
          setActiveSections(
            activeSections.filter((section) => section.id !== currentSection.id)
          );
        }
      } else if (over.id === "builder-dropzone") {
        //case2: dropped into builder from sections
        let exists = activeSections.some((obj) => obj.id === currentSection.id);
        if (!exists) {
          setActiveSections([...activeSections, currentSection]);
          setSections(
            sections.filter((section) => section.id !== currentSection.id)
          );
        }
      } else {
        //check if the current item is from sections
        //if not it is from activeSections
        let exists = sections.some((obj) => obj.id === currentSection.id);
        if (exists) {
          //case3: rearrange from sections
          const oldIndex = sections.findIndex((item) => item.id === active.id);
          const newIndex = sections.findIndex((item) => item.id === over.id);
          const newItems = arrayMove(sections, oldIndex, newIndex);
          setSections(newItems); // Update state with new order
        } else {
          //case4: rearrange from builder
          const oldIndex = activeSections.findIndex(
            (item) => item.id === active.id
          );
          const newIndex = activeSections.findIndex(
            (item) => item.id === over.id
          );
          const newItems = arrayMove(activeSections, oldIndex, newIndex);
          setActiveSections(newItems); // Update state with new order
        }
      }
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:h-screen">
        {/* Sections Panel */}
        <div className="bg-white shadow rounded p-2">
          <h2 className="text-lg font-semibold mb-4">Sections</h2>
          <div className="flex-grow flex flex-col justify-center items-center">
            <Droppable behavior="source" id={"sections-dropzone"}>
              {sections.map((section, index) => (
                <SectionItem data={section} key={index} />
              ))}
            </Droppable>
          </div>
        </div>

        {/* Builder Panel */}
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
                <SectionItem id={section.id} data={section} key={index} />
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
    </DndContext>
  );
};

export default HomeScreen;
