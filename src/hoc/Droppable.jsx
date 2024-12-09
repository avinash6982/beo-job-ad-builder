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

  return (
    <div
      ref={setNodeRef}
      className="p-1 rounded flex justify-center items-center h-full w-full min-h-[150px]"
      style={defaultStyles}
    >
      {props.children}
    </div>
  );
}

export default Droppable;
