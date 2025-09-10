import React, { useState } from "react";
import { IoMdLock } from "react-icons/io";
import { Link } from "react-router-dom";
import instructor from '../../assets/courseDetail/Instructor.png'
import award from "../../assets/courseDetail/award-03.png";
import hat from "../../assets/courseDetail/graduation-hat-02.png";
import play from "../../assets/courseDetail/play.png";
import Lecture from "./Lectures";
const Courses = () => {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <div className="bg-white text-gray-800 p-6  text-md mt-24 ml-7">
      {/* Breadcrumb */}
      <nav className="text-md text-gray-600 mb-4 space-x-2 ml-1">
        <Link to="/home" className="text-purple-600 hover:underline">
          Home
        </Link>
        <span>&gt;</span>
        <Link to="/courses" className="text-purple-600 hover:underline">
          Enrolled Courses
        </Link>
        <span>&gt;</span>
        <Link className="text-gray-800  font-bold">
          Research and Publication Ethics
        </Link>
      </nav>
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 ml-1">
        Research and Publication Ethics
      </h1>
      {/* Tabs */}

      <div className="   bg-white shadow-lg border shadow-gray-300 border-gray-200 rounded-lg px-8  pt-4    pb-7          ">
        <div className="mb-4 border-b border-gray-200">
          <nav className="flex space-x-4">
            {["overview", "lecture"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 border-b-2 font-medium text-md
                ${
                  activeTab === tab
                    ? "text-purple-600 border-purple-600"
                    : "text-gray-600 border-transparent hover:text-purple-600 hover:border-purple-600"
                }`}
              >
                {tab === "overview" ? "Overview" : "Lecture"}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">Course Overview</h2>
            <p className="mb-4">
              Embark on a transformative journey into the dynamic world of User
              Experience (UX) Design with our comprehensive course,
              "Introduction to User Experience Design." This course is
              meticulously crafted to provide you with a foundational
              understanding of the principles, methodologies, and tools that
              drive exceptional user experiences in the digital landscape.
            </p>

            <h3 className="font-semibold mb-1">Key Learning Objective</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>
                {" "}
                Gain a clear understanding of what User Experience (UX) Design
                entails and its importance in today's digital world.
              </li>
              <li>
                Explore the fundamental principles of user-centered design and
                how to apply them to create intuitive and user-friendly
                interfaces.
              </li>
              <li>
                Learn about the various elements that contribute to a positive
                user experience, including information architecture, interaction
                design, and visual design.
              </li>
            </ul>

            <h3 className="font-semibold text-lg mb-2">Instructor</h3> 
              <div className="mb-3">
                <p className="font-bold text-lg text-purple-700">Ronald Richards</p>
                <p className="text-md">UI/UX Designer</p>
              </div>
            <div className="flex items-center gap-y-2 space-x-4">
              <div>
                 <img
                  src={instructor}
                  alt="Instructor"
                  className="w-20 h-20 rounded-full"
                />
                </div>
              <div>
                <div className="flex items-center gap-x-1 text-sm text-gray-600 mt-1">   <img src={award}/>  <span> 40,445 Reviews</span>   </div>
                <div className="flex items-center gap-x-1 text-sm text-gray-600 mt-1">   <img src={hat}/>     <span> 500 Students</span>  </div>
                <div className="flex items-center gap-x-1 text-sm text-gray-600 mt-1">   <img src={play}/>     <span>15 Courses</span>   </div>
              </div>
            </div>
            <p className="mt-3  text-gray-700">
             With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom. He has played a pivotal role in designing user-centric interfaces for renowned tech companies, ensuring seamless and engaging user experiences.
            </p>
          </div>
        )}
        {activeTab === "lecture" && (
          <Lecture/>
        )}
      </div>
    </div>
  );
};

export default Courses;