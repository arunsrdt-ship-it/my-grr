import React, { useState } from "react";
import AcademicCourses from "./AcademicCourses";
import SkillEnhancement from "./SkillEnhancement";

const EnrolledCourses = () => {
  const [toggle, setToggle] = useState("academic");

  return (
    <div className="enrolled-courses p-5">
      <div className="enrolled-courses-items">
        <div className="heading flex justify-between items-center">
          <h3 className="font-bold text-2xl">Enrolled Courses</h3>
          <span>See All</span>
        </div>

        <div className=" mt-5">
          <div className="flex gap-5">
            <button onClick={() => setToggle("academic")} className={`font-semibold cursor-pointer ${toggle === "academic" ? "main-color-text" : "text-gray-400"} `}>
              Academic Courses
            </button>

            <button onClick={() => setToggle("skill")} className={`font-semibold cursor-pointer ${toggle === "skill" ? "main-color-text" : "text-gray-400"} `}>
              Skill Enhancement Courses
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
