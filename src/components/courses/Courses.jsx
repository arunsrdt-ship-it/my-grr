import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { getEnrolledCourses } from "../../features/courses/courseThunk";
import { IoMdLock } from "react-icons/io";

import instructorImg from "../../assets/courseDetail/Instructor.png";
import award from "../../assets/courseDetail/award-03.png";
import hat from "../../assets/courseDetail/graduation-hat-02.png";
import play from "../../assets/courseDetail/play.png";
import Lecture from "./Lectures";

const Courses = () => {
  const { id } = useParams(); // <-- course id from route
  const dispatch = useDispatch();
  const { enrolled, loading, error } = useSelector((state) => state.course);
  const { userDetailsId } = useSelector((state) => state.auth.user);

  const [activeTab, setActiveTab] = useState("overview");

  // Fetch enrolled courses if not already loaded
  useEffect(() => {
    if (userDetailsId && (!Array.isArray(enrolled) || enrolled.length === 0)) {
      dispatch(getEnrolledCourses({ userDetailsId }));
    }
  }, [dispatch, userDetailsId, enrolled]);

  const course = Array.isArray(enrolled)
    ? enrolled.find((c) => String(c.offeringId) === id)
    : null;

  if (loading) return <p className="mt-10 text-center">Loading course...</p>;
  if (error) return <p className="mt-10 text-red-500 text-center">{error}</p>;
  if (!course) return <p className="mt-10 text-center">Course not found!</p>;

  return (
    <div className="bg-white text-gray-800 p-6 text-md mt-24 ml-7">
      {/* Breadcrumb */}
      <nav className="text-md text-gray-600 mb-4 space-x-2 ml-1">
        <Link to="/home" className="main-color-text hover:underline">Home</Link>
        <span>&gt;</span>
        <Link to="/courses" className="main-color-text hover:underline">Enrolled Courses</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-bold">{course.subjectTitle}</span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 ml-1">{course.subjectTitle}</h1>

      {/* Tabs */}
      <div className="bg-white shadow-lg border shadow-gray-300 border-gray-200 rounded-lg px-8 pt-4 pb-7">
        <div className="mb-4 border-b border-gray-200">
          <nav className="flex space-x-4">
            {["overview", "lecture"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 border-b-2 font-medium text-md ${
                  activeTab === tab
                    ? "main-color-text"
                    : "text-gray-600 border-transparent hover:main-color-text"
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
              {course.description || "No overview available for this course."}
            </p>

            <h3 className="font-semibold mb-1">Key Learning Objectives</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              {course.objectives?.length > 0 ? (
                course.objectives.map((obj, index) => (
                  <li key={index}>{obj}</li>
                ))
              ) : (
                <li>No specific objectives listed.</li>
              )}
            </ul>

            <h3 className="font-semibold text-lg mb-2">Instructor</h3>
            <div className="mb-3">
              <p className="font-bold text-lg main-color-text">
                {course.facultyName || "Instructor TBA"}
              </p>
              {course.instructorTitle && (
                <p className="text-md">{course.instructorTitle}</p>
              )}
            </div>

            <div className="flex items-center gap-y-2 space-x-4">
              <img src={instructorImg} alt="Instructor" className="w-20 h-20 rounded-full"/>
              <div>
                <div className="flex items-center gap-x-1 text-sm text-gray-600 mt-1">
                  <img src={award} alt="reviews" /> 
                  <span>{course.reviews || 0} Reviews</span>
                </div>
                <div className="flex items-center gap-x-1 text-sm text-gray-600 mt-1">
                  <img src={hat} alt="students" /> 
                  <span>{course.students || 0} Students</span>
                </div>
                <div className="flex items-center gap-x-1 text-sm text-gray-600 mt-1">
                  <img src={play} alt="courses" /> 
                  <span>{course.totalCourses || 0} Courses</span>
                </div>
              </div>
            </div>

            {course.instructorBio && (
              <p className="mt-3 text-gray-700">{course.instructorBio}</p>
            )}
          </div>
        )}

        {activeTab === "lecture" && <Lecture />}
      </div>
    </div>
  );
};

export default Courses;
