import React from "react";
import FRAMEPNG from "../../assets/main/Frame.png";

const UserDetails = ({user}) => {
  return (
    <div className="user-details bg-[#EFE9FF99] ml-10 rounded-3xl py-6 px-10 ">
      <div className="user-items flex items-center justify-between">
        <div>
          <div className="greeting font-bold text-4xl">
            <span>Hello, </span> <span>{user?.name}!</span>
          </div>

          <div className="programs text-md font-semibold font-xl mt-1 text-[#704ca4]">
            <span>Program - (B.Tech-{user?.course} 2025)</span>
          </div>

          <div className="tagline mt-7 text-md font-semibold text-gray-500">
            <span>Learn anytime, anywhere. Boost your skills, with flexible course.</span>
          </div>
        </div>
        <div className="logo-for-user-block">
          <img src={FRAMEPNG} />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
