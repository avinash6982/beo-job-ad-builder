import Draggable from "../hoc/Draggable";

function SectionItem({ data, editMode, actions }) {
  if (editMode)
    return (
      <button className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2 cursor-grab select-none">
        <div className="flex justify-between">
          <h5 className="text-sm font-semibold tracking-tight text-gray-900 pb-3">
            {data.title}
          </h5>
          {actions}
        </div>
      </button>
    );

  return (
    <Draggable data={data}>
      <div className="flex justify-between">
        <h5 className="text-sm font-semibold tracking-tight text-gray-900 pb-3">
          {data.title}
        </h5>
      </div>
    </Draggable>
  );
}

export default SectionItem;
