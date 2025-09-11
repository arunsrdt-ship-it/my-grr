import React from "react";

import EnrollHead from "./EnrollHead";
import Description from "./Description";
import EnrollDet from "./EnrollDet";
import EnrollReview from "./EnrollReview";
import EnrollSyllabus from "./EnrollSyllabus";
import EnrollStudents from "./EnrollStudents";
import MoreCourses from "./MoreCourses";

const ForEnroll = () => {
  return (
    <div className="enroll-items mt-19 grid grid-cols-1 gap-4 ml-6">
      <EnrollHead />
      <EnrollDet />
      <EnrollSyllabus />
      <EnrollReview />
      <EnrollStudents />
      <MoreCourses/>
    </div>
  );
};

export default ForEnroll;
