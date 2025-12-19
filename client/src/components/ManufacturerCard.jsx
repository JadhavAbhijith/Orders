export default function ManufacturerCard() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-4">
      <h6 className="font-semibold mb-2 text-sm">Manufacturer</h6>

      <p className="font-medium mb-1 mr-48 text-sm">
        Clothing Manufacturer Ltd.
      </p>

      <p className="text-sm text-gray-600 mb-3 leading-snug">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolor numquam neque laborum optio illum sint beatae aperiam facere laudantium cumque voluptatibus ab doloribus consequatur aliquid maiores doloremque laboriosam dolore velit reprehenderit unde explicabo ipsa veritatis.
      </p>

      <div className="text-sm mb-2">
        <div className="text-gray-500">Minimal order quantity</div>
        <div className="font-medium">10,000</div>
      </div>

      <div className="text-sm mb-2">
        <div className="text-gray-500">Fabric sourcing</div>
        <div className="font-medium">Yes</div>
      </div>

      <div className="text-sm">
        <div className="text-gray-500">Payment terms</div>
        <div className="font-medium leading-snug">
          40% at order<br />
          30% before shipment<br />
          30% after shipment
        </div>
      </div>
    </div>
  );
}
