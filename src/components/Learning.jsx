import React from "react";
import BAG from "../assets/learning/Bag.png";
import CHAMP from "../assets/learning/Champ.png";
import LOPO from "../assets/learning/Lopo.png";

const Learning = () => {
  return (
    <div className="learning p-5">
      <div className="learning-items">
        <div className="learning-heading font-bold text-2xl">
          <h3>Learning Summary</h3>
        </div>
        <div className="learning-cards flex justify-around p-3">
          <div className="card p-7 rounded-xl mt-5 border-1 border-gray-200 w-90">
            <div className="flex items-center gap-2">
              <div className="logo bg-[#EBF2FF] p-5 rounded-full">
                <span className="">
                  <img src={BAG} />
                </span>
              </div>
              <div>
                <div className="number text-2xl font-bold">
                  <span>09</span>
                </div>
                <div className="one-line text-xl text-[#9DAAC9]">Academic Courses</div>
              </div>
            </div>
          </div>
          <div className="card p-7 rounded-xl mt-5 border-1 border-gray-200 w-90">
            <div className="flex items-center gap-2">
              <div className="logo bg-[#FDE6E4] p-5 rounded-full">
                <span className="">
                  <img src={CHAMP} />
                </span>
              </div>
              <div>
                <div className="number text-2xl font-bold">
                  <span>05</span>
                </div>
                <div className="one-line text-xl text-[#9DAAC9]">Skill Enhancement Courses</div>
              </div>
            </div>
          </div>
          <div className="card p-7 rounded-xl mt-5 border-1 border-gray-200 w-90">
            <div className="flex items-center gap-2">
              <div className="logo bg-[#E3FFED] p-5 rounded-full">
                <span className="">
                  <img src={LOPO} />
                </span>
              </div>
              <div>
                <div className="number text-2xl font-bold">
                  <span>75.80%</span>
                </div>
                <div className="one-line text-xl text-[#9DAAC9]">Overall Attendance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
