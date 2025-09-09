import React from "react";
import VECTORPNG from "../assets/main/Vector.png";
import ICONPNG from "../assets/main/icon.png";

const Dues = () => {
  return (
    <div className="dues-details border-2 border-gray-200 relative rounded-xl ">
      <div className="dues-items p-5 items-center">
        <div className="heading flex justify-between">
          <h3 className="font-bold text-xl">Dues Details</h3>
          <span>See All</span>
        </div>

        <div className="fess flex justify-between mt-5">
          <div className="total">
            <h3 className="text-md text-gray-400 font-semibold">Total Fees</h3>
            <span className="font-semibold text-md">₹9,00,000</span>
          </div>
          <div className="started-on">
            <h5 className="text-xs ">Team Started on</h5>
            <span className="font-semibold">Jul 5, 2023</span>
          </div>
        </div>

        <div className="pending mt-5">
          <h3 className="text-md text-gray-400 font-semibold">Pending Amount</h3>
          <span className="text-red-600 text-2xl">₹97,141.00</span>
        </div>

        <div className="tagline mt-2 text-center text-gray-400 font-semibold">**You have a past due balance of 971,410.00**</div>

        <div className="date flex items-center mt-5 gap-2">
          <span>
            <img className="w-4" src={VECTORPNG} />
          </span>
          <span className="font-semibold">Due Date 4 Jun 11:59 PM</span>
        </div>

        <div className="button">
          <button className="bg-[#704ca4] cursor-pointer w-full mt-3 p-2 rounded-xl text-white font-semibold  justify-center flex items-center gap-3">
            Pay Now
            <span>
              <img src={ICONPNG} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dues;
