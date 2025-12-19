export default function ProductSummary() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-4 mt-20">
      <h6 className="font-semibold mb-2 text-sm">Product</h6>

      <p className="font-medium mb-2 text-sm">
        Leather jacket (BR0004PO)
      </p>

      <div className="text-xs text-gray-500 mb-1">
        Variants
      </div>

      <div className="flex justify-between mb-1 text-sm">
        <div>
          <div className="font-medium">Pitch Black</div>
          <div className="text-xs text-gray-500">1,000 × $12</div>
        </div>
        <div>$12,000</div>
      </div>

      <div className="flex justify-between mb-2 text-sm">
        <div>
          <div className="font-medium">Metallic Blue</div>
          <div className="text-xs text-gray-500">5,000 × $16</div>
        </div>
        <div>$80,000</div>
      </div>

      <hr className="my-2" />

      <div className="flex justify-between font-semibold text-sm">
        <span>Total</span>
        <span>$92,000</span>
      </div>
    </div>
  );
}
