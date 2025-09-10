import React from "react";
import UserDetails from "../components/UserDetails";
import Dues from "../components/Dues";
import Header from "../components/Header";
import ArtificalSection from "../components/ArtificalSection";
import Calendar from "../components/Calendar";
import Today from "../components/Today";
import EnrolledCourses from "../components/EnrolledCourses";
import Learning from "../components/Learning";
import LeaderBoard from "../components/LeaderBoard";
import Explore from "../components/Explore";

const Home = ({ user }) => {
  return (
    <div className="home-container">
      <div className="mt-10 sm:mt-16 p-3 sm:p-5">
        <div className="wrapper grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="mt-6 col-span-1 md:col-span-3 space-y-5">
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


