import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { useState } from "react";

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
      <button onClick={handleClick} className={`absolute z-21 cursor-pointer top-[22%] ${expanded ? "left-[11.1%]" : "left-[3.6%]"}`}>
        {expanded ? <IoIosArrowDropright color="gray" size={25} /> : <IoIosArrowDropleft color="gray" size={25} />}
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
