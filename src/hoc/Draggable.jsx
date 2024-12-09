import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

// hoc for draggable component
function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.data.id,
    data: props.data,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <button
      className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2 cursor-grab select-none"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </button>
  );
}

export default Draggable;
