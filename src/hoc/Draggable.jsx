import { useDraggable } from "@dnd-kit/core";
import { useDroppable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

// HOC for draggable and droppable component
function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.data.id,
    data: props.data,
  });

  const { setNodeRef: setDroppableRef, isOver } = useDroppable({
    id: props.data.id,
    data: props.data,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    backgroundColor: isOver ? "lightgreen" : "white",
    border: isOver ? "1px dashed green" : "1px solid #e6e6e6",
  };

  return (
    <button
      className="w-full p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2 cursor-grab select-none"
      ref={(node) => {
        setNodeRef(node); // Make it draggable
        setDroppableRef(node); // Make it droppable
      }}
      style={style}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </button>
  );
}

export default Draggable;
