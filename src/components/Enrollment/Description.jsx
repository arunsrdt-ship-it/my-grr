import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { gettingDetails } from "../../features/details/detailThunk";

import AWARD from "../../assets/decription/award.png";
import GRAD from "../../assets/decription/grad.png";
import PLAY from "../../assets/decription/play.png";

const Description = () => {
  const { courseId } = useParams(); 
  const dispatch = useDispatch();
  const { detail, loading, error } = useSelector((state) => state.detail);

  useEffect(() => {
    if (courseId) {
      dispatch(gettingDetails(courseId));
    }
  }, [dispatch, courseId]);

  if (loading) return <p className="mt-6">Loading course details...</p>;
  if (error) return <p className="mt-6 text-red-500">{error}</p>;
  if (!detail) return <p className="mt-6">No details found.</p>;

  return (
    <div className="description w-[70vw]">
      <div className="description-elements">
        
    
        <h2 className="text-2xl font-bold mb-4">{detail.title}</h2>

        <div className="heading-1">
          <h3 className="font-semibold text-xl">Course Description</h3>
          <p>{detail.description || "No description available for this course."}</p>
        </div>

      

      
        </div>
      </div>
    
  );
};

export default Description;
