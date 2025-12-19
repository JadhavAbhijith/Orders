import { useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import OrderPlanSection from "../components/OrderPlanSection";
import ProductSummary from "../components/ProductSummary";
import ManufacturerCard from "../components/ManufacturerCard";

export default function OrderPlan() {
  const [mobileView, setMobileView] = useState("plan");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const [orderData, setOrderData] = useState({
    sourcing: [
      { id: "s1", name: "Material sourcing", startDate: null, endDate: null },
      { id: "s2", name: "Fabric sourcing", startDate: null, endDate: null },
    ],
    orderCreation: [
      { id: "o1", name: "Order creation", startDate: null, endDate: null },
      { id: "o2", name: "Contract signing", startDate: null, endDate: null },
    ],
    trims: [
      { id: "t1", name: "Buttons", startDate: null, endDate: null },
      { id: "t2", name: "Fabric", startDate: null, endDate: null },
    ],
  });

  const handleAddOrder = async () => {
    try {
      await axios.post("http://localhost:5000/api/orders", orderData);
      setShowSuccessPopup(true);
    } catch (error) {
      console.error(error);
      setShowErrorPopup(true);
    }
  };

  return (
    <div className="bg-[#f6f8fc] min-h-screen">

     
      <div className="hidden md:block">
        <Header onAddOrder={handleAddOrder} />
      </div>

      
      <div className="md:hidden">
        <MobileHeader
          mode={mobileView}
          onBack={() => setMobileView("plan")}
          onAddOrder={handleAddOrder}
        />
      </div>

      
      <div className="hidden md:block px-4 md:px-20 pt-[64px] pb-24 ml-14 mr-14">
        <div className="row gx-6">
          <div className="col-lg-7">
            <h1 className="font-semibold mb-4 mt-4 ml-1">New order</h1>
            <OrderPlanSection
              data={orderData}
              setData={setOrderData}
            />
          </div>

          <div className="col-lg-5 -mt-3">
            <div className="mt-[52px] pr-10">
              <ProductSummary />
            </div>
            <div className="pt-4 pr-10 mt-2">
              <ManufacturerCard />
            </div>
          </div>
        </div>
      </div>

 
      <div className="md:hidden fixed inset-0 flex flex-col pt-[56px] pb-[72px]">

        
        <div className="flex-1 overflow-y-auto px-4">

          {mobileView === "plan" && (
            <OrderPlanSection
              data={orderData}
              setData={setOrderData}
            />
          )}

          {mobileView === "details" && (
            <div className="space-y-4">
              <ProductSummary />
              <ManufacturerCard />
            </div>
          )}

        </div>
      </div>

      
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-[72px] bg-blue-600 text-white p-4 flex justify-between items-center">
        <div>
          <div className="text-xs">Total</div>
          <div className="font-semibold text-lg">$92,000</div>
        </div>

        <button
          onClick={() => setMobileView("details")}
          className="bg-white text-blue-600 px-4 py-2 rounded font-medium"
        >
          View Details
        </button>
      </div>

      
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-sm text-center p-6 pointer-events-auto">

            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <h5 className="font-semibold mb-2">
              Order saved successfully
            </h5>

            <button
              className="btn btn-success mt-3 w-full"
              onClick={() => setShowSuccessPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}



      {showErrorPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-sm text-center p-6 pointer-events-auto">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-3xl">
                ✕
              </div>
            </div>
            <h5 className="font-semibold mb-3">
              Failed to add order
            </h5>
            <button
              className="btn btn-danger w-full"
              onClick={() => setShowErrorPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      
    </div>
  );
}
