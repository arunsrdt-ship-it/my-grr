import React from "react";
import BELLLPNG from "../../assets/header/Bell.png";
import LOGOPNG from "../../assets/header/Logo.png";
import USERPNG from "../../assets/header/User.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
      const { user } = useSelector((state) => state.auth);

  return (
    <div className="navbar fixed overflow-hidden w-[100vw] top-0 bg-white z-10">
      <div className="nav-items  w-[100vw] flex items-center justify-between p-4 border-b-3 border-gray-200">
        <div className="logo">
          <Link to="/">
            <img className="cursor-pointer" src={LOGOPNG} />
          </Link>
        </div>

        <div className="others flex gap-7 items-center p-1">
          <img className="w-6 h-6 cursor-pointer" src={BELLLPNG} />
          <img className="w-10 h-10 rounded-full cursor-pointer" src={user.profilePhoto} />
        </div>
      </div>
    </div>
  );
};

export default Header;
