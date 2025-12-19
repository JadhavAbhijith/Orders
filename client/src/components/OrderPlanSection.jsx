import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import MilestoneRow from "./MilestoneRow";

export default function OrderPlanSection({ data, setData }) {

  const handleDragEnd = (result, sectionKey) => {
    if (!result.destination) return;

    const items = Array.from(data[sectionKey]);
    const [moved] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, moved);

    setData({ ...data, [sectionKey]: items });
  };

  const renderSection = (title, sectionKey) => (
    <section className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        <input type="checkbox" defaultChecked />
        <span className="font-semibold text-sm">{title}</span>
      </div>

      <DragDropContext
        onDragEnd={(result) => handleDragEnd(result, sectionKey)}
      >
        <Droppable droppableId={sectionKey}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {data[sectionKey].map((milestone, index) => (
                <Draggable
                  key={milestone.id}
                  draggableId={milestone.id}
                  index={index}
                >
                  {(provided) => (
                    <MilestoneRow
                      milestone={milestone}
                      innerRef={provided.innerRef}
                      draggableProps={provided.draggableProps}
                      dragHandleProps={provided.dragHandleProps}
                      onChange={(type, value) => {
                        const updated = [...data[sectionKey]];
                        if (type === "name") {
                          updated[index].name = value;
                        } else {
                          updated[index].startDate = value[0];
                          updated[index].endDate = value[1];
                        }
                        setData({ ...data, [sectionKey]: updated });
                      }}
                      onRemove={() => {
                        setData({
                          ...data,
                          [sectionKey]: data[sectionKey].filter(
                            (_, i) => i !== index
                          ),
                        });
                      }}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <button className="text-blue-600 text-sm mt-1">
        + Add Milestone
      </button>
    </section>
  );

  return (
    <div className="bg-white rounded-xl border shadow-sm -pt-1 -pb-5">
      
      <div className="px-5 py-3 border-b">
        <h5 className="mb-0 font-semibold text-sm">
          Order plan
        </h5>
      </div>

      
      <div className="px-5 py-4 text-sm">
        {renderSection("SOURCING", "sourcing")}

        <div className="flex items-center gap-2 mb-4">
          <input type="checkbox" />
          <span className="font-semibold text-sm">SAMPLING</span>
        </div>

        {renderSection("ORDER CREATION", "orderCreation")}
        {renderSection("TRIMS & FABRIC ORDERS", "trims")}

        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <span className="font-semibold text-sm">PROTOTYPING</span>
        </div>
      </div>
    </div>
  );
}
