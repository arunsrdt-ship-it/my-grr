import React from "react";
import ProgressBar from "./ProgressBar";
import ASSESS from "../assets/academic/Assesment.png";
import GRADE from "../assets/academic/Grade.png";
import IOP from "../assets/academic/iop.png";
import { useNavigate } from "react-router-dom";

const AcademicCourses = () => {

  const navigate = useNavigate();
  const handleClick = () => {
navigate("/courses")
  }
  return (
    <div className="academic-courses w-full">
      <div className="academic-items cards  flex justify-around  flex-wrap gap-2">
        <div onClick={handleClick} className="card rounded-xl cursor-pointer  bg-[#6750A40A] w-70 p-3">
          <div className="heading">
            <h3 className="font-semibold text-xl">Research and Publication Ethics</h3>
            <p className="text-xs">By Ronald Richards.</p>
          </div>
          <div className="mt-6">
            <ProgressBar value={40} />
          </div>
          <div className="icons mt-4 flex items-center  justify-between">
            <div className="flex gap-1">
              <img src={IOP} />
              <img src={GRADE} />
              <img src={ASSESS} />
            </div>
            <div>
              <span className="text-xs"> 22 Hours. 15 Lectures</span>
            </div>
          </div>
        </div>
        <div className="card w-70 cursor-pointer bg-[#6750A40A] rounded-xl p-3">
          <div className="heading">
            <h3 className="font-semibold text-xl">Research and Publication Ethics</h3>
            <p className="text-xs">By Ronald Richards.</p>
          </div>
          <div className="mt-6">
            <ProgressBar value={40} />
          </div>
          <div className="icons mt-4 flex items-center  justify-between">
            <div className="flex gap-1">
              <img src={IOP} />
              <img src={GRADE} />
              <img src={ASSESS} />
            </div>
            <div>
              <span className="text-xs"> 22 Hours. 15 Lectures</span>
            </div>
          </div>
        </div>
        <div className="card w-70 cursor-pointer bg-[#6750A40A] rounded-xl p-3">
          <div className="heading">
            <h3 className="font-semibold text-xl">Research and Publication Ethics</h3>
            <p className="text-xs">By Ronald Richards.</p>
          </div>
          <div className="mt-6">
            <ProgressBar value={40} />
          </div>
          <div className="icons mt-4 flex items-center  justify-between">
            <div className="flex gap-1">
              <img src={IOP} />
              <img src={GRADE} />
              <img src={ASSESS} />
            </div>
            <div>
              <span className="text-xs"> 22 Hours. 15 Lectures</span>
            </div>
          </div>
        </div>
        <div className="card w-70 cursor-pointer bg-[#6750A40A] rounded-xl p-3">
          <div className="heading">
            <h3 className="font-semibold text-xl">Research and Publication Ethics</h3>
            <p className="text-xs">By Ronald Richards.</p>
          </div>
          <div className="mt-6">
            <ProgressBar value={40} />
          </div>
          <div className="icons mt-4 flex items-center  justify-between">
            <div className="flex gap-1">
              <img src={IOP} />
              <img src={GRADE} />
              <img src={ASSESS} />
            </div>
            <div>
              <span className="text-xs"> 22 Hours. 15 Lectures</span>
            </div>
          </div>
        </div>
        <div className="card w-70 cursor-pointer bg-[#6750A40A] rounded-xl p-3">
          <div className="heading">
            <h3 className="font-semibold text-xl">Research and Publication Ethics</h3>
            <p className="text-xs">By Ronald Richards.</p>
          </div>
          <div className="mt-6">
            <ProgressBar value={40} />
          </div>
          <div className="icons mt-4 flex items-center  justify-between">
            <div className="flex gap-1">
              <img src={IOP} />
              <img src={GRADE} />
              <img src={ASSESS} />
            </div>
            <div>
              <span className="text-xs"> 22 Hours. 15 Lectures</span>
            </div>
          </div>
        </div>
        <div className="card w-70 cursor-pointer bg-[#6750A40A] rounded-xl p-3">
          <div className="heading">
            <h3 className="font-semibold text-xl">Research and Publication Ethics</h3>
            <p className="text-xs">By Ronald Richards.</p>
          </div>
          <div className="mt-6">
            <ProgressBar value={40} />
          </div>
          <div className="icons mt-4 flex items-center  justify-between">
            <div className="flex gap-1">
              <img src={IOP} />
              <img src={GRADE} />
              <img src={ASSESS} />
            </div>
            <div>
              <span className="text-xs"> 22 Hours. 15 Lectures</span>
            </div>
          </div>
        </div>
        <div className="card w-70 cursor-pointer bg-[#6750A40A] rounded-xl p-3">
          <div className="heading">
            <h3 className="font-semibold text-xl">Research and Publication Ethics</h3>
            <p className="text-xs">By Ronald Richards.</p>
          </div>
          <div className="mt-6">
            <ProgressBar value={40} />
          </div>
          <div className="icons mt-4 flex items-center  justify-between">
            <div className="flex gap-1">
              <img src={IOP} />
              <img src={GRADE} />
              <img src={ASSESS} />
            </div>
            <div>
              <span className="text-xs"> 22 Hours. 15 Lectures</span>
            </div>
          </div>
        </div>
        <div className="card w-70 cursor-pointer bg-[#6750A40A] rounded-xl p-3">
          <div className="heading">
            <h3 className="font-semibold text-xl">Research and Publication Ethics</h3>
            <p className="text-xs">By Ronald Richards.</p>
          </div>
          <div className="mt-6">
            <ProgressBar value={40} />
          </div>
          <div className="icons mt-4 flex items-center  justify-between">
            <div className="flex gap-1">
              <img src={IOP} />
              <img src={GRADE} />
              <img src={ASSESS} />
            </div>
            <div>
              <span className="text-xs"> 22 Hours. 15 Lectures</span>
            </div>
          </div>
        </div>
        <div className="card w-70 cursor-pointer bg-[#6750A40A] rounded-xl p-3">
          <div className="heading">
            <h3 className="font-semibold text-xl">Research and Publication Ethics</h3>
            <p className="text-xs">By Ronald Richards.</p>
          </div>
          <div className="mt-6">
            <ProgressBar value={40} />
          </div>
          <div className="icons mt-4 flex items-center  justify-between">
            <div className="flex gap-1">
              <img src={IOP} />
              <img src={GRADE} />
              <img src={ASSESS} />
            </div>
            <div>
              <span className="text-xs"> 22 Hours. 15 Lectures</span>
            </div>
          </div>
        </div>
        <div className="card w-70 cursor-pointer bg-[#6750A40A] rounded-xl p-3">
          <div className="heading">
            <h3 className="font-semibold text-xl">Research and Publication Ethics</h3>
            <p className="text-xs">By Ronald Richards.</p>
          </div>
          <div className="mt-6">
            <ProgressBar value={40} />
          </div>
          <div className="icons mt-4 flex items-center  justify-between">
            <div className="flex gap-1">
              <img src={IOP} />
              <img src={GRADE} />
              <img src={ASSESS} />
            </div>
            <div>
              <span className="text-xs"> 22 Hours. 15 Lectures</span>
            </div>
          </div>
        </div>
        <div className="card w-70 cursor-pointer bg-[#6750A40A] rounded-xl p-3">
          <div className="heading">
            <h3 className="font-semibold text-xl">Research and Publication Ethics</h3>
            <p className="text-xs">By Ronald Richards.</p>
          </div>
          <div className="mt-6">
            <ProgressBar value={40} />
          </div>
          <div className="icons mt-4 flex items-center  justify-between">
            <div className="flex gap-1">
              <img src={IOP} />
              <img src={GRADE} />
              <img src={ASSESS} />
            </div>
            <div>
              <span className="text-xs"> 22 Hours. 15 Lectures</span>
            </div>
          </div>
        </div>
        <div className="card w-70 cursor-pointer bg-[#6750A40A] rounded-xl p-3">
          <div className="heading">
            <h3 className="font-semibold text-xl">Research and Publication Ethics</h3>
            <p className="text-xs">By Ronald Richards.</p>
          </div>
          <div className="mt-6">
            <ProgressBar value={40} />
          </div>
          <div className="icons mt-4 flex items-center  justify-between">
            <div className="flex gap-1">
              <img src={IOP} />
              <img src={GRADE} />
              <img src={ASSESS} />
            </div>
            <div>
              <span className="text-xs"> 22 Hours. 15 Lectures</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCourses;
