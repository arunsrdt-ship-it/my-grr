import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { enrollDo } from "../../features/courses/courseThunk";

const EnrollHead = ({ course }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.course);
  const { userDetailsId } = useSelector((state) => state.auth.user);

  const [enrolling, setEnrolling] = useState(false);

  const handleEnrollNow = async () => {
    if (!userDetailsId) return alert("User not logged in");

    setEnrolling(true);

    try {
      await dispatch(
        enrollDo({ userDetailsId, subjectId: course.offeringId })
      ).unwrap();
      alert("Enrolled successfully!");
    } catch (error) {
      alert(error || "Enrollment failed");
    } finally {
      setEnrolling(false);
    }
  };

  return (
    <div className="bg-[#F6F6FC] w-full left-0 right-0 relative">
      <div className="enroll-items-head flex flex-col md:flex-row items-center justify-center p-5 md:p-10 w-full relative">
        {/* Left Section */}
        <div className="left-text w-full md:w-[70vw] text-center md:text-left">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {course.subjectTitle}
          </h3>
          <p className="break-word mt-5 px-4 md:px-0">
            {course.description || "No description available"}
          </p>

          <div className="mt-7 flex items-center gap-2 justify-center md:justify-start">
            <p>
              Created by
              <span className="text-[#806BBC]">
                {course.facultyName || "TBA"}
              </span>
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-card mt-10 md:ml-auto md:z-1 md:right-10 w-full md:w-auto">
          <div className="right-card-items bg-white p-5 border-2 border-[#E2E8F0] rounded-xl shadow-lg">
            <img
              src={course.courseImage || "/default-course.png"}
              alt="Course preview"
              className="w-full h-auto rounded-md"
            />

            <div className="mt-5 flex gap-3 sm:gap-5 justify-center">
              <div className="text-lg sm:text-xl font-semibold">
                {course.unitCount || 0} Units
              </div>
            </div>

            <button
              onClick={handleEnrollNow}
              disabled={loading || enrolling}
              className={`mt-5 w-full p-2 sm:p-3 rounded-xl text-white font-semibold flex justify-center items-center gap-2 sm:gap-3 text-sm sm:text-base 
                ${
                  enrolling || loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#704ca4] hover:bg-[#5b3c8f]"
                } 
                transition-colors duration-300`}
            >
              {enrolling ? "Enrolling..." : "Enroll Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollHead;
