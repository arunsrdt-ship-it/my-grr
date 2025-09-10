import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { BiBookmark } from "react-icons/bi";
import { BsBagCheck } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaFileCircleCheck } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { GrSchedulePlay } from "react-icons/gr";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
const Sidebar = ({setIsHovered, expanded}) => {
const sidebarContent = [
    { id: "1", label: "Dashboard", icon: <GoHome size={28} />, path: "/home" },
    { id: "2", label: "My Attendance", icon: <BsBagCheck size={28} />, path: "/attendance" },
    { id: "3", label: "Enrolled Courses", icon: <IoBagHandleOutline size={28} />, path: "/enrolled-courses" },
    { id: "4", label: "My Assignments", icon: <IoBookOutline size={28} />, path: "/assignments" },
    { id: "5", label: "My Assessments", icon: <FaFileCircleCheck size={28} />, path: "/assessments" },
    { id: "6", label: "Bookmark", icon: <BiBookmark size={28} />, path: "/bookmark" },
    { id: "7", label: "Schedule", icon: <GrSchedulePlay size={28} />, path: "/schedule" },
    { id: "8", label: "Payment", icon: <MdOutlinePayments size={28} />, path: "/payment" },
    { id: "9", label: "Explore Courses", icon: <GiGraduateCap size={28} />, path: "/explore" },
  ];

  const [colorToggle, setColorToggle] = useState();
 

  return (
    <div className="flex">
      <div
        className={`mt-25 fixed bg-white flex  flex-col z-10 shadow-xl h-screen transition ease-in-out duration-200  ${
          expanded ? "w-[11%] min-w-[224px]" : "w-[3%] min-w-[82px]"
        }`}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <div>

        {sidebarContent.map((content) => {
          return (
            <Link to={content.path} key={content.id}
              className={`flex my-3 cursor-pointer mx-3 rounded-2xl  py-2 gap-x-4 ${expanded ? " " : "flex justify-center items-center"} ${
                colorToggle===content.id ? "bg-[#6850a3] text-white" : ""
              }`}
              onClick={() => setColorToggle(content.id)}
            >
              <span className={`${expanded ? "pl-4" : "px-3"}`}>
                {content.icon}
              </span>
              <span
                className={`pt-0.5  ${colorToggle===content.id? 'text-white' : 'text-[#4b5565] hover:text-[#6d54a3] '}  ${expanded ? "block " : "hidden"}`}>
                {content.label}
              </span>
            </Link>
          );
        })}
        </div>



        <div className=" mt-67" >
          <button
            className={`bg-[#fce2e2] cursor-pointer  text-[#b91114] flex items-center mx-3  my-2 hover:bg-[#b91114] hover:text-white p-2  ${
              expanded ? "rounded-3xl w-[89%]" : "rounded-full h-auto w-[60%] ml-4"
            }`}
          >
            <div className={` flex pl-1 pr-2 py-1 `}>
              <CiLogout size={20} />
            </div>
            <div className={`${expanded ? "block" : "hidden"}`}>LogOut</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
