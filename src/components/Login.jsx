import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import COMP from "../assets/login/Component3.png";
import GROU1 from "../assets/login/Group (2).png";
import GROU2 from "../assets/login/Group (1).png";
import GROU3 from "../assets/login/Group (3).png";
import GROU5 from "../assets/login/Group 1707486277.png";
import GROU6 from "../assets/login/Group 1707486279.png";
import GROU7 from "../assets/login/Group.png";
import GROU8 from "../assets/login/image 2942.png";
import GROU9 from "../assets/login/Logo (1).png";
import GROU10 from "../assets/login/Section Text.png";
import GROU11 from "../assets/login/Group (4).png";
import GROU12 from "../assets/login/Group (5).png";
import users from "../data/user";

const Login = ({ login }) => {
  const [userId, setUserId] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find((u) => u.email === userId && u.password === pass);

    if (user) {
      login(user);
      navigate("/home");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div>
      <div className="loginpage-items flex items-center justify-center h-screen gap-[5vw] p-5">
        <div className="image-section relative flex w-[40vw]">
          <img className="absolute mx-[5vw]" src={GROU10} />
          <img className="mx-[3vw] w-[37vw]" src={COMP} />
          <img className="absolute  mx-[37vw] my-[30vh]" src={GROU1} />
          <img className="absolute mx-[10vw] my-[73vh]" src={GROU2} />
          <img className="absolute mx-[21vw] my-[23vh]" src={GROU3} />
          <img className="absolute mx-[25vw] my-[40vh] z-20" src={GROU5} />
          <img className="absolute my-[62vh] z-20 mx-[18vw]" src={GROU6} />
          <img className="absolute mx-[43vw] " src={GROU7} />
          <img className="absolute my-[19vh] z-10" src={GROU8} />
          <img className="absolute my-[35vh] mx-[5vw] z-10" src={GROU11} />
          <img className="absolute my-[70vh] mx-[35vw] z-10" src={GROU12} />
        </div>
        <div className="form-section flex flex-col  justify-center items-center  bg-violet-50 w-[30vw] h-full">
          <img className="w-[20vw]" src={GROU9} />

          <form className="p-5" onSubmit={handleLogin}>
            <div className="text-left mt-10">
              <h2 className="text-3xl font-semibold">&nbsp;&nbsp;&nbsp;Login to your Account</h2>
              <p className="font-light mt-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;See what is going on </p>
            </div>
            <div className="mt-10 my-5 text-md  ">
              <lable className="block font-semibold">Students ID:</lable>
              <input type="text" className="w-full border-1 p-2 rounded-md border-gray-300" placeholder="mail@abc.com" value={userId} onChange={(e) => setUserId(e.target.value)} />
            </div>
            <div>
              <label className="block font-semibold">Password:</label>
              <input type="password" className="w-full border-1 p-2 rounded-md border-gray-300" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
            </div>
            <div className="check-box flex mt-1 gap-29 text-sm ">
              <label>
                <input className="accent-[#704ca4]" type="checkbox" />
                &nbsp;Remember Me
              </label>
              <div className="cursor-pointer main-color-text">Fogot Password?</div>
            </div>
            <div>
              <button type="submit" className="w-full main-color-background text-white font-semibold cursor-pointer p-2 border-none mt-7 rounded-md">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
