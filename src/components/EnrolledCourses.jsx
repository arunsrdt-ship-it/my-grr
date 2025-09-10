import React, { useState } from "react";
import AcademicCourses from "./AcademicCourses";
import SkillEnhancement from "./SkillEnhancement";
import { useNavigate } from "react-router-dom";

const EnrolledCourses = () => {
  const [toggle, setToggle] = useState("academic");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/enrolled-courses")
  }

  return (
    <div className="enrolled-courses px-10 py-6">
      <div className="enrolled-courses-items">
        <div className="heading flex justify-between items-center">
          <h3 className="font-bold text-2xl">Enrolled Courses</h3>
          <span onClick={handleClick} className="cursor-pointer">See All</span>
        </div>

        <div className="mt-5">
          <div className="relative flex gap-5 border-b-2 border-gray-300">
            <button onClick={() => setToggle("academic")} className={`relative pb-2  font-semibold text-xl cursor-pointer ${toggle === "academic" ? "text-[#6750A4]" : "text-gray-400"}`}>
              Academic Courses
              {toggle === "academic" && <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-[#6750A4] transition-all duration-300"></span>}
            </button>

            <button onClick={() => setToggle("skill")} className={`relative text-xl pb-2 font-semibold cursor-pointer ${toggle === "skill" ? "text-[#6750A4]" : "text-gray-400"}`}>
              Skill Enhancement Courses
              {toggle === "skill" && <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-[#6750A4] transition-all duration-300"></span>}
            </button>
          </div>

          <div className="mt-10">
            {toggle === "academic" && (
              <div>
                <AcademicCourses />
              </div>
            )}
            {toggle === "skill" && (
              <div>
                <SkillEnhancement />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCourses;
