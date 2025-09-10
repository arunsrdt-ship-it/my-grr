import React from "react";
import MASKGROUP1 from "../assets/artificial/Mask.png";
import MASKGROUP2 from "../assets/artificial/Mask(1).png";
import MASKGROUP3 from "../assets/artificial/Mask(2).png";
import CLOCK from "../assets/artificial/ClockFill.png";
import PERSON from "../assets/artificial/PersonFill.png";
import VIDEO from "../assets/artificial/Icon(1).png";
import CALENDAR from "../assets/artificial/Group224.png";
import TREE from "../assets/artificial/Group1238.png";

const ArtificalSection = () => {
  return (
    <div className="section border-2 border-gray-200 ml-10 relative rounded-xl mt-9 p-4">
      <div className="section-heading-items flex items-center justify-between">
        <h3 className="font-bold text-2xl mb-7">Artificial Intelligence</h3>

        <div className="some-images flex items-center">
          <img src={MASKGROUP1} />
          <img src={MASKGROUP2} />
          <img src={MASKGROUP3} />
          <div className="tag text-gray-400 font-semibold">+ 25 people joined the class</div>
        </div>
      </div>
      <div className="just-for-button">
        <div className="section-data flex gap-10 text-gray-400 font-semibold">
          <div className="flex items-center gap-1">
            <span>
              <img src={CALENDAR} />
            </span>
            Monday, 28 June 2021
          </div>
          <div className="flex items-center gap-1">
            <span>
              <img src={PERSON} />
            </span>
            Mr. Mark Jefferson
          </div>
        </div>
        <div className="flex justify-between">
          <div className="section-data flex gap-20 text-gray-400 font-semibold">
            <div className="flex items-center gap-1">
              <span>
                <img src={CLOCK} />
              </span>
              02.00 - 03.30 PM
            </div>
            <div className="flex items-center gap-1">
              <span>
                <img src={TREE} />
              </span>
              Zoom
            </div>
          </div>

          <div className="flex main-color-background rounded-2xl w-40 justify-center  text-white ">
            <span className=" flex items-center ">
              <img src={VIDEO} />
            </span>
            <button className="p-3 font-semibold cursor-pointer">Join Class</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtificalSection;
