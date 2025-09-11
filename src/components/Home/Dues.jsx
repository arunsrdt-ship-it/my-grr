import React from "react";
import VECTORPNG from "../../assets/main/Vector.png";
import ICONPNG from "../../assets/main/icon.png";

const Dues = () => {
  return (
    <div className="dues-details border-2 border-gray-200 relative rounded-xl">
      <div className="dues-items p-4 sm:p-5">
   
        <div className="heading flex justify-between items-center flex-wrap gap-2">
          <h3 className="font-bold text-lg sm:text-xl">Dues Details</h3>
          <span className="text-sm sm:text-base text-[#704ca4] cursor-pointer">
            See All
          </span>
        </div>

        
        <div className="fees flex flex-col sm:flex-row sm:justify-between mt-5 gap-3">
          <div className="total">
            <h3 className="text-sm sm:text-md text-gray-400 font-semibold">
              Total Fees
            </h3>
            <span className="font-semibold text-base sm:text-md">
              ₹9,00,000
            </span>
          </div>
          <div className="started-on">
            <h5 className="text-xs sm:text-sm text-gray-400 font-semibold">
              Term Started on
            </h5>
            <span className="font-semibold text-sm sm:text-base">
              Jul 5, 2023
            </span>
          </div>
        </div>

      
        <div className="pending mt-5">
          <h3 className="text-sm sm:text-md text-gray-400 font-semibold">
            Pending Amount
          </h3>
          <span className="text-red-600 text-xl sm:text-2xl font-semibold">
            ₹97,141.00
          </span>
        </div>

      
        <div className="tagline mt-2 text-center text-gray-400 text-xs sm:text-sm font-semibold">
          **You have a past due balance of 971,410.00**
        </div>

       
        <div className="date flex flex-col sm:flex-row sm:items-center mt-5 gap-2">
          <div className="flex items-center gap-2">
            <img className="w-4 sm:w-5" src={VECTORPNG} alt="calendar" />
            <span className="font-semibold text-sm sm:text-base">
              Due Date 4 Jun 11:59 PM
            </span>
          </div>
        </div>

       
        <div className="button mt-4">
          <button className="bg-[#704ca4] cursor-pointer w-full p-2 sm:p-3 rounded-xl text-white font-semibold flex justify-center items-center gap-2 sm:gap-3 text-sm sm:text-base">
            Pay Now
            <img className="w-4 sm:w-5" src={ICONPNG} alt="pay-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dues;
