import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

function SectionItem() {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "unique-id",
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      Hi
    </button>
  );
}

export default SectionItem;
