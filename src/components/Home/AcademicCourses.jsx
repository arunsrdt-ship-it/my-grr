import React, { useEffect } from "react";
import ProgressBar from "../ProgressBar";
import ASSESS from "../../assets/academic/Assesment.png";
import GRADE from "../../assets/academic/Grade.png";
import IOP from "../../assets/academic/iop.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getEnrolledCourses } from "../../features/courses/courseThunk";

const AcademicCourses = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { enrolled, loading, error } = useSelector((state) => state.course);
  const { userDetailsId } = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (userDetailsId) {
      dispatch(getEnrolledCourses({ userDetailsId }));
    }
  }, [dispatch, userDetailsId]);

  const handleClick = (offeringId) => {
    navigate(`/courses/${offeringId}`);
  };

  return (
    <div className="academic-courses w-full">
      {loading ? (
        <p className="mt-4">Loading courses...</p>
      ) : error ? (
        <p className="mt-4 text-red-500">{error}</p>
      ) : !Array.isArray(enrolled) || enrolled.length === 0 ? (
        <p className="mt-4 text-gray-500">No enrolled courses yet.</p>
      ) : (
        <div className="academic-items cards flex flex-wrap gap-2">
          {enrolled.map((course) => (
            <div
              key={course.offeringId}
              onClick={() => handleClick(course.offeringId)}
              className="card rounded-xl cursor-pointer bg-[#6750A40A] w-70 p-3"
            >
              <div className="heading">
                <h3 className="font-semibold text-xl">{course.subjectTitle}</h3>
                <p className="text-xs">By {course.facultyName || "TBA"}</p>
              </div>
              <div className="mt-6">
                <ProgressBar value={course.progress || 0} />
              </div>
              <div className="icons mt-4 flex items-center justify-between">
                <div className="flex gap-1">
                  <img src={IOP} alt="iop" />
                  <img src={GRADE} alt="grade" />
                  <img src={ASSESS} alt="assess" />
                </div>
                <div>
                  <span className="text-xs">
                    {course.unitCount || 0} Hours. {course.lectures || 0} Lectures
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AcademicCourses;
