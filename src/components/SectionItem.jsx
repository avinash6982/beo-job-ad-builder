import Draggable from "../hoc/Draggable";

function SectionItem({ data, editMode, actions }) {
  if (editMode)
    return (
      <button className="w-full p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2 cursor-grab select-none">
        <div className="flex justify-between">
          <h4 className="p-1 text-sm font-semibold tracking-tight text-gray-900">
            {data.name}
          </h4>
          {actions}
        </div>
      </button>
    );

  return (
    <Draggable data={data}>
      <div className="flex justify-between">
        <h4 className="p-1 text-sm font-semibold tracking-tight text-gray-900 truncate">
          {data.name}
        </h4>
      </div>
    </Draggable>
  );
}

export default SectionItem;
