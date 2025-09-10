import React from "react";
import BAG from "../assets/learning/Bag.png";
import CHAMP from "../assets/learning/Champ.png";
import LOPO from "../assets/learning/Lopo.png";

const Learning = () => {
  return (
    <div className="learning px-10 py-6">
      <div className="learning-items">
        <div className="learning-heading font-bold text-2xl mb-5">
          <h3>Learning Summary</h3>
        </div>

       
        <div className="learning-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          <div className="card w-full p-5 rounded-xl border border-gray-200 shadow-sm bg-white flex items-center gap-4">
            <div className="logo bg-[#EBF2FF] p-4 rounded-full flex-shrink-0">
              <img src={BAG} alt="Academic Courses" className="w-8 h-8" />
            </div>
            <div className="min-w-0">
              <div className="number text-xl sm:text-2xl font-bold">
                <span>09</span>
              </div>
              <div className="one-line text-sm sm:text-base md:text-lg text-[#9DAAC9] break-words">
                Academic Courses
              </div>
            </div>
          </div>

         
          <div className="card w-full p-5 rounded-xl border border-gray-200 shadow-sm bg-white flex items-center gap-4">
            <div className="logo bg-[#FDE6E4] p-4 rounded-full flex-shrink-0">
              <img src={CHAMP} alt="Skill Courses" className="w-8 h-8" />
            </div>
            <div className="min-w-0">
              <div className="number text-xl sm:text-2xl font-bold">
                <span>05</span>
              </div>
              <div className="one-line text-sm sm:text-base md:text-lg text-[#9DAAC9] break-words">
                Skill Enhancement Courses
              </div>
            </div>
          </div>

          <div className="card w-full p-5 rounded-xl border border-gray-200 shadow-sm bg-white flex items-center gap-4">
            <div className="logo bg-[#E3FFED] p-4 rounded-full flex-shrink-0">
              <img src={LOPO} alt="Attendance" className="w-8 h-8" />
            </div>
            <div className="min-w-0">
              <div className="number text-xl sm:text-2xl font-bold">
                <span>75.80%</span>
              </div>
              <div className="one-line text-sm sm:text-base md:text-lg text-[#9DAAC9] break-words">
                Overall Attendance
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
