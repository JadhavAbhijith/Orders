export default function Header({ onAddOrder }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container-fluid px-4">
        <div className="flex items-center justify-between h-[64px]">

          
          <div className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <span className="text-lg">←</span>
            <span>Back to Orders</span>
          </div>

          
          <div className="flex items-center bg-white border rounded-full px-4 py-2 shadow-sm">

            <div className="flex items-center gap-2 px-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
                ✓
              </div>
              <span className="text-sm font-medium text-gray-900">
                Order details
              </span>
            </div>

            <div className="w-4" />

            <div className="flex items-center gap-2 px-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
                ✓
              </div>
              <span className="text-sm font-medium text-gray-900">
                Manufacturer
              </span>
            </div>

            <div className="w-4" />

            <div className="flex items-center gap-2 px-2">
              <div className="w-6 h-6 rounded-full border-2 border-blue-600 text-blue-600 text-xs flex items-center justify-center font-semibold">
                3
              </div>
              <span className="text-sm font-medium text-blue-600">
                Order plan
              </span>
            </div>

          </div>

          
          <div className="flex items-center gap-2">
            <button className="btn btn-outline-secondary btn-sm px-3">
              Save Draft
            </button>
            <button
              className="btn btn-primary btn-sm px-3"
              onClick={onAddOrder}
            >
              Add Order
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
