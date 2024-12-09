import { useDroppable } from "@dnd-kit/core";

// HOC for dropzone component
function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  const sourceStyle = {
    color: isOver ? "green" : undefined,
    border: isOver ? "1px dotted green" : undefined,
  };

  const defaultStyles = {
    color: isOver ? "green" : undefined,
    border: isOver ? "1px dotted green" : "1px dotted #ccc",
  };

  // different dropzone stylings made for sections list
  // supposed to be active when the section is dragged back-
  // -to its initial position ie, the sections tab
  if (props?.behavior === "source")
    return (
      <div
        ref={setNodeRef}
        className="p-2 pb-0 rounded flex flex-col h-full w-full min-h-[100px] pb-20"
        style={sourceStyle}
      >
        {props.children.length > 0 ? (
          props.children
        ) : (
          <div className="flex justify-center items-center flex-grow">
            Drop sections back here.
          </div>
        )}
      </div>
    );

  return (
    <div
      ref={setNodeRef}
      className="p-1 rounded flex justify-center items-center h-full w-full min-h-[100px]"
      style={defaultStyles}
    >
      {props.children}
    </div>
  );
}

export default Droppable;
