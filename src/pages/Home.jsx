import { useEffect, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

import SectionsPanel from "../panels/SectionsPanel";
import { useAppContext } from "../AppDataContext";
import PreviewPanel from "../panels/PreviewPanel";
import BuilderPanel from "../panels/BuilderPanel";
import { getSections } from "../api";

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const { sections, setSections, activeSections, setActiveSections } =
    useAppContext();

  useEffect(() => {
    getSections()
      .then((res) => {
        if (res.status === "success") setSections(res.data);
      })
      .finally((_) => {
        setLoading(false);
      });
  }, []);

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
        <SectionsPanel loading={loading} />

        {/* Builder Panel */}
        <BuilderPanel />

        {/* Preview Settings Panel */}
        <PreviewPanel />
      </div>
    </DndContext>
  );
};

export default HomeScreen;
