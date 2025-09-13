import React, { useEffect } from "react";
import RATING from "../../assets/academic/ratings.png";
import ENROLLED from "../../assets/academic/Enrolled.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAvailableCourses } from "../../features/courses/courseThunk";

const Explore = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { availableCourses, loading, error } = useSelector((state) => state.course);
  const { userDetailsId } = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (userDetailsId) {
      dispatch(getAvailableCourses({ userDetailsId }));
    }
  }, [dispatch, userDetailsId]);

  const handleSeeAll = () => {
    navigate("/explore");
  };

  const handleCardClick = (courseId) => {
    navigate(`/enroll/${courseId}`);
  };

  return (
    <div className="enrolled px-10 py-6">
      <div className="enrolled-items">
        <div className="heading flex items-center justify-between">
          <div className="flex items-center text-xl gap-1">
            <h3 className="font-bold text-2xl">Explore Courses</h3>
            <p className="mt-1.5 text-gray-500">(Skill-based Placement Programs)</p>
          </div>
          <div>
            <span onClick={handleSeeAll} className="main-color-text cursor-pointer">
              See All
            </span>
          </div>
        </div>

        {loading ? (
          <p className="mt-10">Loading courses...</p>
        ) : error ? (
          <p className="mt-10 text-red-500">{error}</p>
        ) : !Array.isArray(availableCourses) || availableCourses.length === 0 ? (
          <p className="mt-10 text-gray-500">No courses available to explore.</p>
        ) : (
          <div className="enrolled-cards mt-10 flex flex-wrap gap-5">
            {availableCourses.map((course) => (
              <div
                key={course.offeringId}
                onClick={() => handleCardClick(course.offeringId)}
                className="card cursor-pointer p-2 border border-gray-200 rounded-xl w-70"
              >
                <div className="image">
                  <img src={ENROLLED} alt={course.subjectTitle} />
                </div>
                <div className="heading font-semibold mt-3">
                  <h4>{course.subjectTitle}</h4>
                </div>
                <div className="tutor-name text-sm mt-3">
                  <p>By {course.facultyName || "TBA"}</p>
                </div>
                <div className="ratings mt-3 flex items-center gap-2">
                  <img src={RATING} alt="Rating" />
                  <span className="text-xs font-semibold">({course.rating || 0} Ratings)</span>
                </div>
                <div className="hours text-sm mt-3">
                  {course.unitCount || 0} Total Hours. {course.lectures || 0} Lectures.{" "}
                  {course.level || "Beginner"}
                </div>
                <div className="price mt-3 font-bold text-xl">
                  ₹{course.price || 0}.00
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
