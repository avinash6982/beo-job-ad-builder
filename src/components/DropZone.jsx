import { useDroppable } from "@dnd-kit/core";

function DropZone(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
    border: isOver ? "1px dotted green" : "1px dotted #ccc",
    borderStyle: "dotted",
    borderRadius: "5px",
    padding: "8px 10px",
    width: "100%",
    height: "100%",
    minHeight: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

export default DropZone;
