import React from "react";

import EnrollHead from "./EnrollHead";
import Description from "./Description";
import EnrollDet from "./EnrollDet";

const ForEnroll = () => {
  return (
   <div className="enroll-items mt-19 grid grid-cols-1 gap-4 w-full">
  <EnrollHead />
 
    <EnrollDet />
  
</div>


  );
};

export default ForEnroll;
