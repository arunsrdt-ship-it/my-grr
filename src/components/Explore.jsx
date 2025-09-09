import React from "react";
import RATING from "../assets/academic/ratings.png";
import ENROLLED from "../assets/academic/Enrolled.png";

const Explore = () => {
  return (
    <div className="enrolled p-5">
      <div className="enrolled-items">
        <div className="heading flex items-center justify-between">
          <div className="flex items-center text-xl  gap-1">
            <h3 className="font-bold text-2xl ">Explore Courses</h3>
            <p className="mt-1.5 text-gray-500">(Skill-based Placement Programs)</p>
          </div>
          <div>
            <span className="main-color-text">See All</span>
          </div>
        </div>
        <div className="enrolled-cards mt-10 flex justify-between  flex-wrap gap-5">
          <div className="card p-2 border-1 border-gray-200 rounded-xl w-70 ">
            <div className="image">
              <img src={ENROLLED} />
            </div>
            <div className="heading font-semibold mt-3">
              <h4>Beginner’s Guide to Design</h4>
            </div>
            <div className="tutor-name text-sm mt-3">
              <p>By Ronald Richards</p>
            </div>
            <div className="ratings mt-3 flex items-center gap-2">
              <img src={RATING} />
              <span className="text-xs font-semibold">(1200 Ratings)</span>
            </div>
            <div className="hours and level text-sm justify-between mt-3">
              <p>22 Total Hours. 155 Lectures. Beginner</p>
            </div>
            <div className="price mt-3 font-bold text-xl">₹499.00</div>
          </div>
          <div className="card p-2 border-1 border-gray-200 rounded-xl w-70 ">
            <div className="image">
              <img src={ENROLLED} />
            </div> 
            <div className="heading font-semibold mt-3">
              <h4>Beginner’s Guide to Design</h4>
            </div>
            <div className="tutor-name text-sm mt-3">
              <p>By Ronald Richards</p>
            </div>
            <div className="ratings mt-3 flex items-center gap-2">
              <img src={RATING} />
              <span className="text-xs font-semibold">(1200 Ratings)</span>
            </div>
            <div className="hours and level text-sm justify-between mt-3">
              <p>22 Total Hours. 155 Lectures. Beginner</p>
            </div>
            <div className="price mt-3 font-bold text-xl">₹499.00</div>
          </div>
          <div className="card p-2 border-1 border-gray-200 rounded-xl w-70 ">
            <div className="image">
              <img src={ENROLLED} />
            </div>
            <div className="heading font-semibold mt-3">
              <h4>Beginner’s Guide to Design</h4>
            </div>
            <div className="tutor-name text-sm mt-3">
              <p>By Ronald Richards</p>
            </div>
            <div className="ratings mt-3 flex items-center gap-2">
              <img src={RATING} />
              <span className="text-xs font-semibold">(1200 Ratings)</span>
            </div>
            <div className="hours and level text-sm justify-between mt-3">
              <p>22 Total Hours. 155 Lectures. Beginner</p>
            </div>
            <div className="price mt-3 font-bold text-xl">₹499.00</div>
          </div>
          <div className="card p-2 border-1 border-gray-200 rounded-xl w-70 ">
            <div className="image">
              <img src={ENROLLED} />
            </div>
            <div className="heading font-semibold mt-3">
              <h4>Beginner’s Guide to Design</h4>
            </div>
            <div className="tutor-name text-sm mt-3">
              <p>By Ronald Richards</p>
            </div>
            <div className="ratings mt-3 flex items-center gap-2">
              <img src={RATING} />
              <span className="text-xs font-semibold">(1200 Ratings)</span>
            </div>
            <div className="hours and level text-sm justify-between mt-3">
              <p>22 Total Hours. 155 Lectures. Beginner</p>
            </div>
            <div className="price mt-3 font-bold text-xl">₹499.00</div>
          </div>
          <div className="card p-2 border-1 border-gray-200 rounded-xl w-70 ">
            <div className="image">
              <img src={ENROLLED} />
            </div>
            <div className="heading font-semibold mt-3">
              <h4>Beginner’s Guide to Design</h4>
            </div>
            <div className="tutor-name text-sm mt-3">
              <p>By Ronald Richards</p>
            </div>
            <div className="ratings mt-3 flex items-center gap-2">
              <img src={RATING} />
              <span className="text-xs font-semibold">(1200 Ratings)</span>
            </div>
            <div className="hours and level text-sm justify-between mt-3">
              <p>22 Total Hours. 155 Lectures. Beginner</p>
            </div>
            <div className="price mt-3 font-bold text-xl">₹499.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
