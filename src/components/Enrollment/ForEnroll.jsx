import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import EnrollHead from "./EnrollHead";
import Description from "./Description";
import EnrollDet from "./EnrollDet";
import EnrollReview from "./EnrollReview";
import EnrollSyllabus from "./EnrollSyllabus";
import EnrollStudents from "./EnrollStudents";
import MoreCourses from "./MoreCourses";

const ForEnroll = () => {
  const { courseId } = useParams();
  const { enrolled, availableCourses } = useSelector((state) => state.course);
    const { detail, loading, error } = useSelector((state) => state.detail);
  

  const course = [...enrolled, ...availableCourses].find(
    (c) => c.offeringId === parseInt(courseId)
  );

  if (!course) {
    return <p className="mt-10 text-gray-500 ml-6">Course not found.</p>;
  }

  return (
    <div className="enroll-items mt-19 grid grid-cols-1 gap-4 ml-6">
      <EnrollHead course={detail || course} />
      <EnrollDet course={detail || course} />
      <EnrollSyllabus  />
      <EnrollReview  />
      <EnrollStudents />
      <MoreCourses currentCourseId={course.offeringId} />
    </div>
  );
};

export default ForEnroll;
