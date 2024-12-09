import Draggable from "../hoc/Draggable";

function SectionItem({ data, id }) {
  return (
    <Draggable data={data}>
      <h5 className="text-sm font-semibold tracking-tight text-gray-900">
        {data.title}
      </h5>
    </Draggable>
  );
}

export default SectionItem;
