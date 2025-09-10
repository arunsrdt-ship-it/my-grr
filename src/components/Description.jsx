import React from "react";
import ICON from "../assets/decription/icon.png";
import AWARD from "../assets/decription/award.png";
import GRAD from "../assets/decription/grad.png";
import PLAY from "../assets/decription/play.png";
const Description = () => {
  return (
    <div className="description w-[70vw] ">
      <div className="description-elements">
        <div className="heading-1">
          <h3 className="font-semibold text-xl">Course Description</h3>
          <p>
            This interactive e-learning course will introduce you to User Experience (UX) design, the art of creating products and services that are intuitive, enjoyable, and
            user-friendly. Gain a solid foundation in UX principles and learn to apply them in real-world scenarios through engaging modules and interactive exercises.{" "}
          </p>
        </div>

        <div className="heading-2">
          <h3 className="font-semibold text-xl mt-5">Certification</h3>
          <p>
            At Byway, we understand the significance of formal recognition for your hard work and dedication to continuous learning. Upon successful completion of our courses, you
            will earn a prestigious certification that not only validates your expertise but also opens doors to new opportunities in your chosen field.
          </p>
        </div>
        <div className="mt-9">
          <hr className="border-t-2 border-gray-300" />
        </div>

        <div className="heading-3">
          <div>
            <h3 className="font-semibold text-xl mt-5">Instructor</h3>
            <h3 className="mt-5">Ronald Richards</h3>
            <span>UI/UX Designer</span>
          </div>

          <div className="image-with-det mt-5 flex items-center gap-2">
            <div className="image">
              <img src={ICON} />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex">
                <img src={AWARD} />
                <span>4.5</span>
              </div>
              <div className="flex">
                <img src={GRAD} />
                <span>500 Students</span>
              </div>
              <div className="flex">
                <img src={PLAY} />
                <span>15 Courses</span>
              </div>
            </div>
          </div>

          <div className="about-inst">
            <p className="text-justify">
              With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom. He has played a pivotal role in designing user-centric
              interfaces for renowned tech companies, ensuring seamless and engaging user experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
