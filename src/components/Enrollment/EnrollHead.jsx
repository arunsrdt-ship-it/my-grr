import React from "react";
import STARS from "../../assets/ForEnroll/Rating.png";
import INSTRUCTOR from "../../assets/ForEnroll/Instructor.png";
import COURSE from "../../assets/ForEnroll/course.png";
import FACEBOOK from "../../assets/ForEnroll/facebook.png";
import LINKEDIN from "../../assets/ForEnroll/linkedIn.png";
import WHATSAPP from "../../assets/ForEnroll/whatsapp.png";

const EnrollHead = () => {
  return (
    <div className="bg-[#F6F6FC] w-full left-0 right-0 relative">
      <div className="enroll-items-head flex flex-col md:flex-row items-center justify-center p-5 md:p-10 w-full relative">
        <div className="left-text  w-full md:w-[70vw] text-center md:text-left">
          <div className="head">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">Introduction to User Experience Design</h3>
            <p className="break-word mt-5 px-4 md:px-0">
              This course is meticulously crafted to provide you with a foundational understanding of the
              <br /> principles, methodologies, and tools that drive exceptional user experiences in the digital
              <br /> landscape.
            </p>

            {/* Rating and course details section. */}
            <div className="flex flex-col sm:flex-row gap-1 mt-5 items-center justify-center md:justify-start">
              <span className="text-[#FEC84B]">4.6</span>
              <span>
                <img src={STARS} alt="Rating stars" />
              </span>
              <span>(651651 rating)</span>
              <span> | 22 Total Hours. 155 Lectures. All levels</span>
            </div>

            {/* Instructor details. */}
            <div className="mt-7 flex items-center gap-2 justify-center md:justify-start">
              <img src={INSTRUCTOR} alt="Instructor icon" />
              <p>
                Created by <span className="text-[#806BBC]">Ronal Richards</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right side card. Replaced absolute positioning for mobile and enabled it for md screens. */}
        <div className="right-card mt-10 md:ml-auto  md:z-1 md:right-10 w-full md:w-auto">
          <div className="right-card-items bg-white p-5 border-2 border-[#E2E8F0] rounded-xl shadow-lg">
            <div className="image">
              <img src={COURSE} alt="Course preview" className="w-full h-auto rounded-md" />
            </div>

            <div className="mt-5 flex gap-3 sm:gap-5 justify-center">
              <div className="text-lg sm:text-xl font-semibold">₹00.0</div>
              <div className="text-lg sm:text-xl text-[#94A3B8] font-semibold line-through">₹499</div>
              <div className="text-lg sm:text-xl text-[#16A34A]">100% Off</div>
            </div>

            <div>
              <button className="mt-5 bg-[#704ca4] cursor-pointer w-full p-2 sm:p-3 rounded-xl text-white font-semibold flex justify-center items-center gap-2 sm:gap-3 text-sm sm:text-base hover:bg-[#5b3c8f] transition-colors duration-300">
                Enroll Now
              </button>
            </div>

            <div className="p-2 mt-5">
              <span className="font-semibold">Share</span>
              <div className="icons flex gap-5 justify-center mt-2">
                <span>
                  <img className="main-shadow p-2 rounded-full cursor-pointer" src={WHATSAPP} alt="Whatsapp icon" />
                </span>
                <span>
                  <img className="main-shadow p-2 rounded-full cursor-pointer" src={FACEBOOK} alt="Facebook icon" />
                </span>
                <span>
                  <img className="main-shadow p-2 rounded-full cursor-pointer" src={LINKEDIN} alt="LinkedIn icon" />
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