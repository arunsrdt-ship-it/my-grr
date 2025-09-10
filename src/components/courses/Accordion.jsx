import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";
import book from "../../assets/courseDetail/book.png";
import video from "../../assets/courseDetail/video.png";
import { TiTick } from "react-icons/ti";
import VideoPlayer from "./VideoPlayer";
import { useVideo } from "../../context/VideoContext";

const Accordion = ({ module }) => {
  const [isActive, setIsActive] = useState(false);
  const [activeTitle, setActiveTitle] = useState(null);
  const { setSelectedVideoURL } = useVideo();

  return (
    <div>
      <div>
        <div className="flex flex-col gap-y-3 px-2 py-1 border-b border-b-gray-400 text-md font-semibold">
          <div
            className="text-md text-gray-800 mt-2"
            onClick={() => setIsActive(!isActive)}
          >
            <div className="flex justify-between items-center font-semibold mb-2">
              {module.title}

              {isActive ? (
                <MdChevronRight size={20} />
              ) : (
                <IoChevronDown size={14} />
              )}
            </div>

            <div className="text-sm text-gray-500">
              {module.duration} | {module.completed}/{module.lectures} Lectures
            </div>
          </div>

          <div className={`${isActive ? "mb-3" : ""}`}>
            {isActive && (
              <div>
                {" "}
                {module.lessons.map((courseContent) => {
                  const isActiveTopic = activeTitle === courseContent.title;
                  return (
                    <div
                      className={`flex justify-center font-semibold w-[100%] items-center gap-4 my-2 p-4  ${
                        isActiveTopic ? "bg-[#9471F233] text-[#6750A4]" : ""
                      }`}
                      onClick={() => {
                        setActiveTitle(courseContent.title);
                        setSelectedVideoURL(null);
                      }}
                    >
                      <div
                        className={`w-5 h-5 border-1 border-gray-300  ${
                          courseContent.completed ? "bg-[#6750A4]" : "bg-white"
                        }  rounded-full flex items-center justify-center cursor-pointer`}
                      >
                        {courseContent.completed ? (
                          <TiTick color="white" />
                        ) : (
                          ""
                        )}
                      </div>

                      <span className={`text-sm w-[80%] `}>
                        {courseContent.title}
                      </span>

                      <div className="ml-auto  flex gap-2 text-purple-500 text-sm">
                        {courseContent.book && (
                          <span className="relative group">
                            <img src={book} />
                            <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                              Take a test
                            </div>
                          </span>
                        )}
                        {courseContent.video && (
                          <span
                            className="relative group"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedVideoURL(courseContent.url);
                            }}
                          >
                            <img src={video} className="cursor-pointer" />
                            <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                              Play video
                            </div>
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
