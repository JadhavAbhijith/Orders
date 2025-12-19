import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function MilestoneRow({
  milestone,
  onChange,
  onRemove,
  dragHandleProps,
  innerRef,
  draggableProps,
}) {
  return (
    <div
      ref={innerRef}
      {...draggableProps}
      className="flex items-center gap-2 mb-2"
    >
      
      <div {...dragHandleProps} className="cursor-grab">
        <div className="grid grid-cols-2 gap-[2px]">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="w-[3px] h-[3px] bg-gray-400 rounded-full"
            />
          ))}
        </div>
      </div>

      
      <input
        type="text"
        value={milestone.name}
        onChange={(e) => onChange("name", e.target.value)}
        className="form-control h-[36px] text-sm"
      />

      
      <DatePicker
        selectsRange
        startDate={milestone.startDate}
        endDate={milestone.endDate}
        onChange={(dates) => onChange("dates", dates)}
        placeholderText="Select start and end date"
        className="form-control h-[36px] text-sm"
      />

      
      <button
        title="Remove"
        onClick={onRemove}
        className="text-gray-400 hover:text-red-500 text-lg leading-none"
      >
        ×
      </button>
    </div>
  );
}
