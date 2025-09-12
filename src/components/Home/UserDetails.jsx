import React, { useEffect } from "react";
import FRAMEPNG from "../../assets/main/Frame.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { UserMila } from "../../features/user/userThunk";

const UserDetails = ({userId}) => {


  const dispath = useDispatch();
  const {UserDetails, loading, error} = useSelector((state) => state.user)
  
  useEffect(() => {
    if(userId){
      dispath(UserMila(userId))
    }
  })

  return (
    <div className="user-details bg-[#EFE9FF99] ml-10 rounded-3xl py-6 px-10 ">
      <div className="user-items flex items-center justify-between">
        <div>
          <div className="greeting font-bold text-4xl">
            <span>Hello, </span> <span>{UserDetails?.name}!</span>
          </div>

          <div className="programs text-md font-semibold font-xl mt-1 text-[#704ca4]">
            <span>Program - (B.Tech-{UserDetails?.course} 2025)</span>
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
