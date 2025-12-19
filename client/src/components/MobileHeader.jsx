export default function MobileHeader({ mode, onBack, onAddOrder }) {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="px-4">
        <div className="flex items-center justify-between h-[56px]">

          
          <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
            {mode === "details" && (
              <button
                onClick={onBack}
                className="text-lg leading-none"
              >
                ←
              </button>
            )}
            <span>Step 3 of 3: Order plan</span>
          </div>

          
          <button
            onClick={onAddOrder}
            className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm"
          >
            Add Order
          </button>

        </div>
      </div>
    </div>
  );
}
