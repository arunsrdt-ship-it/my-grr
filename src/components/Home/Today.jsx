import React from "react";

const Today = () => {
  return (
    <div className="">
      <div className="today w-full bg-white rounded-2xl shadow-lg border border-gray-200">
        <div className="today-items p-6">
          <div className="pb-4 border-b border-gray-200 mb-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-gray-800">Today</h2>
          </div>

          <div className="item1 bg-[#f1f9f1] mt-4 p-4 rounded-lg border-l-4 border-[#4CAF50]">
            <h3 className="font-semibold text-lg sm:text-xl text-gray-800">UI/UX Design Principles</h3>
            <p className="font-light text-sm text-gray-600">01:30 PM - 03:30 PM</p>
          </div>

          <div className="item2 bg-[#fefaec] mt-3 p-4 rounded-lg border-l-4 border-[#FFBA00]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <h3 className="font-semibold text-lg sm:text-xl text-gray-800">UI/UX Design Principles</h3>
              <span className="bg-[#4CAF50] text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-full mt-2 sm:mt-0 whitespace-nowrap">Room No. - 123</span>
            </div>
            <p className="font-light text-sm text-gray-600">01:30 PM - 03:30 PM</p>
          </div>

          <div className="item3 bg-[#fdf0ef] mt-3 p-4 rounded-lg border-l-4 border-[#E74235]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <h3 className="font-semibold text-lg sm:text-xl text-gray-800">UI/UX Design Principles</h3>
              <span className="bg-[#4CAF50] text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-full mt-2 sm:mt-0 whitespace-nowrap">Room No. - 123</span>
            </div>
            <p className="font-light text-sm text-gray-600">01:30 PM - 03:30 PM</p>
          </div>

          <div className="item4 bg-[#eff5fe] border-l-4 mt-3 p-4 rounded-lg border-[#2683FB]">
            <h3 className="font-semibold text-lg sm:text-xl text-gray-800">12:23 P.M.</h3>
            <p className="font-light text-sm text-gray-600">UI/UX workshop</p>
            <span className="text-[#2683FB] font-medium text-sm mt-1 block cursor-pointer">Conference Room 123</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Today;
