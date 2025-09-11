import { Navigate, Outlet } from "react-router-dom";
import Header from "../Home/Header";
import Sidebar from "../Sidebar/Sidebar";

import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const PrivateRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const expanded = isHovered || isPinned;
  function handleClick() {
    setIsPinned(!isPinned);
  }

  return (
    <div className="flex flex-col h-screen">
      <Header />
     <button
        onClick={handleClick}
        className={`absolute z-50 transition-all duration-50  cursor-pointer top-[205px] ${
          expanded ? "left-[212px]" : "left-[71px]"}`}>
        {expanded ? (
          <MdKeyboardArrowLeft
            color="gray"
            className="bg-white rounded-full border border-gray-300 shadow-xl z-13"
            size={25}
          />
        ) : (
          <MdKeyboardArrowRight
            className="bg-white border border-gray-300 rounded-full shadow-xl z-13 "
            color="gray"
            size={25}
          />
        )}
      </button>

      <div className="flex flex-1 gap-10 overflow-hidden">
        <Sidebar setIsHovered={setIsHovered} expanded={expanded} />

        <main className="flex-1 p-5 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PrivateRoute;
