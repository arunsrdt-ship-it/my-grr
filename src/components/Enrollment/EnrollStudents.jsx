import React from "react";
import VECTOR from "../../assets/enroll/Vector.png";
import ECLIIP from "../../assets/enroll/Ellipse.png";

const EnrollStudents = () => {
  return (
    <div className="students-reviews px-10 py-5 bg-[#F8FAFC]">
      <div className="reviews-items">
        <div className="items-heding">
          <div className="heading">
            <h3 className="text-xl font-bold">
              What Our Students Say
              <br />
              About Us
            </h3>
          </div>
        </div>

      <div className="cards mt-5 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-full overflow-hidden">
  {/* Card 1 */}
  <div className="card wrapper grid grid-cols-6 bg-white gap-4  p-4 rounded-2xl shadow-lg w-full max-w-full">
    <div className="col-span-1 flex items-start">
      <img src={VECTOR} alt="vector" className="max-w-full h-auto" />
    </div>
    <div className="col-span-5">
      <p>
        "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, 
        I appreciate the up-to-date content and engaging multimedia."
      </p>
    </div>
    <div className="col-span-1 flex items-center">
      <img src={ECLIIP} alt="avatar" className="w-12 h-12 rounded-full" />
    </div>
    <div className="col-span-5 flex flex-col justify-center">
      <p className="font-semibold">Jane Doe</p>
      <p className="text-sm text-[#334155]">Designer</p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="card wrapper grid grid-cols-6 gap-4 bg-white  p-4 rounded-2xl shadow-lg w-full max-w-full">
    <div className="col-span-1 flex items-start">
      <img src={VECTOR} alt="vector" className="max-w-full h-auto" />
    </div>
    <div className="col-span-5">
      <p>
        "The instructors are amazing! They explain concepts so clearly that even difficult topics become easy to understand."
      </p>
    </div>
    <div className="col-span-1 flex items-center">
      <img src={ECLIIP} alt="avatar" className="w-12 h-12 rounded-full" />
    </div>
    <div className="col-span-5 flex flex-col justify-center">
      <p className="font-semibold">John Smith</p>
      <p className="text-sm text-[#334155]">Developer</p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="card wrapper grid grid-cols-6 gap-4 bg-white  p-7 rounded-2xl shadow-lg w-full max-w-full">
    <div className="col-span-1 flex items-start">
      <img src={VECTOR} alt="vector" className="max-w-full h-auto" />
    </div>
    <div className="col-span-5">
      <p>
        "I love the practical projects. They give me real-world skills I can apply immediately at work."
      </p>
    </div>
    <div className="col-span-1 flex items-center">
      <img src={ECLIIP} alt="avatar" className="w-12 h-12 rounded-full" />
    </div>
    <div className="col-span-5 flex flex-col justify-center">
      <p className="font-semibold">Alice Brown</p>
      <p className="text-sm text-[#334155]">Product Manager</p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default EnrollStudents;
