import React from "react";
import { Link } from "react-router-dom";

const Today = () => {
  return (
    <div className="today mt-10 border-2 border-gray-200 relative rounded-xl">
      <div className="today-itmes p-5 ">
        <div>
          <h3 className="font-bold text-2xl"> Today</h3>
        </div>
        <div className="item1 bg-[#f1f9f1] mt-10  p-3 border-l-4 border-[#4CAF50]">
          <h4 className="font-semibold text-xl">UI/UX Design Principles</h4>
          <p className="font-light text-xs">01:30 PM - 03:30 PM</p>
        </div>
        <div className="item2 bg-[#fefaec]   mt-2  p-4 border-l-4 border-[#FFBA00]">
          <div className="flex justify-between">
            <h4 className="font-semibold text-xl">UI/UX Design Principles</h4>
           <div> <span className="bg-[#4CAF50] text-white rounded-full">Room No. - 123</span></div>
          </div>
          <p className="font-light text-xs">01:30 PM - 03:30 PM</p>
        </div>
        <div className="item3 bg-[#fdf0ef] mt-2 p-3 border-l-4 border-[#E74235]">
          <div className="flex justify-between">
            <h4 className="font-semibold text-xl">UI/UX Design Principles</h4>
            <span className="bg-[#4CAF50] text-white p-1 rounded-full">Room No. - 123</span>
          </div>
          <p className="font-light text-xs">01:30 PM - 03:30 PM</p>
        </div>
        <div className="item4 bg-[#eff5fe] border-l-4 mt-2 p-3 border-[#2683FB]">
          <h4 className="font-semibold text-xl">12:23 P.M.</h4> <p className="font-light text-xs">UI/UX workshop</p>
          <Link className="main-color-text">Conference Room 123</Link>
        </div>
      </div>
    </div>
  );
};

export default Today;
