import React, { useState } from "react";
import Description from "./Description";

const EnrollDet = () => {
  const [toggle, setToggle] = useState("description");

  return (
    <div className="enroll-details justify-between">
      <div className="p-10">
        <div className="relative w-[70vw] flex gap-5 border-b-2 border-gray-300">
          <button
            onClick={() => setToggle("description")}
            className={`relative pb-2  font-semibold text-md cursor-pointer ${toggle === "academic" ? "text-[#6750A4]" : "text-gray-400"}`}
          >
            Description
            {toggle === "description" && <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-[#6750A4] transition-all duration-300"></span>}
          </button>

          <button
            onClick={() => setToggle("instructor")}
            className={`relative text-md pb-2 font-semibold cursor-pointer ${toggle === "skill" ? "text-[#6750A4]" : "text-gray-400"}`}
          >
            Instructor
            {toggle === "instructor" && <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-[#6750A4] transition-all duration-300"></span>}
          </button>
         

          <button onClick={() => setToggle("syllabus")} className={`relative text-md pb-2 font-semibold cursor-pointer ${toggle === "skill" ? "text-[#6750A4]" : "text-gray-400"}`}>
            Syllabus
            {toggle === "syllabus" && <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-[#6750A4] transition-all duration-300"></span>}
          </button>

          <button onClick={() => setToggle("reviews")} className={`relative text-md pb-2 font-semibold cursor-pointer ${toggle === "skill" ? "text-[#6750A4]" : "text-gray-400"}`}>
            Reviews
            {toggle === "reviews" && <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-[#6750A4] transition-all duration-300"></span>}
          </button>
        </div>

        <div className="mt-10">
          {toggle === "description" && (
            <div>
              <Description />
            </div>
          )}
          {toggle === "instructor" && (
            <div>
              <Instructor />
            </div>
          )}
          {toggle === "syllabus" && (
            <div>
              <Syllabus />
            </div>
          )}
          {toggle === "reviews" && (
            <div>
              <Reviews />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnrollDet;
