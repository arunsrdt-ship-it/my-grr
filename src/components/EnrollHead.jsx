import React from "react";
import STARS from "../assets/ForEnroll/Rating.png";
import INSTRUCTOR from "../assets/ForEnroll/Instructor.png";
import COURSE from "../assets/ForEnroll/course.png";
import FACEBOOK from "../assets/ForEnroll/facebook.png";
import LINKEDIN from "../assets/ForEnroll/linkedIn.png";
import WHATSAPP from "../assets/ForEnroll/whatsapp.png";

const EnrollHead = () => {
  return (
    <div className="bg-[#F6F6FC] w-full left-0 right-0 relative">
      <div className="enroll-items-head items-center justify-center   flex p-10 w-full left-0 right-0 relative">
        <div className="left-text mt-30 w-[70vw]">
          <div className="head">
            <h3 className="text-5xl font-bold">Introduction to User Experience Design</h3>
            <p className="break-word mt-5">
              This course is meticulously crafted to provide you with a foundational understanding of the
              <br /> principles, methodologies, and tools that drive exceptional user experiences in the digital
              <br /> landscape.
            </p>

            <div className="flex gap-1 mt-5">
              <span className="text-[#FEC84B]">4.6</span>
              <span>
                <img src={STARS} />
              </span>
              <span>(651651 rating)</span>
              <span> | 22 Total Hours. 155 Lectures. All levels</span>
            </div>

            <div className="mt-7 flex items-center gap-2">
              <img src={INSTRUCTOR} />
              <p>
                Created by <span className="text-[#806BBC]">Ronal Richards</span>
              </p>
            </div>
          </div>
        </div>

        <div className="right-card ml-auto absolute mt-50 z-1 right-10">
          <div className="right-card-items mt-10 bg-white p-5 border-2 border-[#E2E8F0] rounded-xl">
            <div className="image">
              <img src={COURSE} />
            </div>

            <div className="mt-5 flex gap-5">
              <div className="text-xl font-semibold">₹00.0</div>
              <div className="text-xl text-[#94A3B8] font-semibold line-through">₹499</div>
              <div className="text-xl text-[#16A34A]">100% Off</div>
            </div>

            <div>
              <button className="mt-5 bg-[#704ca4] cursor-pointer w-full p-2 sm:p-3 rounded-xl text-white font-semibold flex justify-center items-center gap-2 sm:gap-3 text-sm sm:text-base">
                Enroll Now
              </button>
            </div>

            <div className="p-2 mt-5">
              <span className="font-semibold">Share</span>
              <div className="icons flex gap-5">
                <span>
                  <img className="main-shadow p-2 rounded-full" src={WHATSAPP} />
                </span>
                <span>
                  <img className="main-shadow p-2 rounded-full" src={FACEBOOK} />
                </span>
                <span>
                  <img className="main-shadow p-2 rounded-full" src={LINKEDIN} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollHead;
