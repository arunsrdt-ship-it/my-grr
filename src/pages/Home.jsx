import React from "react";
import UserDetails from "../components/Home/UserDetails";
import Dues from "../components/Home/Dues";
import ArtificalSection from "../components/Home/ArtificalSection";
import Calendar from "../components/Home/Calendar";
import Today from "../components/Home/Today";
import EnrolledCourses from "../components/Home/EnrolledCourses";
import Learning from "../components/Home/Learning";
import LeaderBoard from "../components/Home/LeaderBoard";
import Explore from "../components/Home/Explore";

const Home = ({ user }) => {
  return (
    <div className="home-container">
      <div className="mt-10 sm:mt-16 p-3 sm:p-5">
        <div className="wrapper grid grid-cols-1 [@media(min-width:1455px)]:grid-cols-4  gap-4 sm:gap-6">
          <div className="mt-6 col-span-1 [@media(min-width:1455px)]:col-span-3 space-y-5">
            <UserDetails user={user} />
            <ArtificalSection />
            <EnrolledCourses />
            <Learning />
            <Explore />
          </div>

          <div className="col-span-1 space-y-5 sm:p-5 md:p-5 ">
            <Dues />
            <Calendar />
            <Today />
            <LeaderBoard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
