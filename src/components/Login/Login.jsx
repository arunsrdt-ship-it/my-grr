import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import COMP from "../../assets/login/Component3.png";
import GROU1 from "../../assets/login/Group (2).png";
import GROU2 from "../../assets/login/Group (1).png";
import GROU3 from "../../assets/login/Group (3).png";
import GROU5 from "../../assets/login/Group 1707486277.png";
import GROU6 from "../../assets/login/Group 1707486279.png";
import GROU7 from "../../assets/login/Group.png";
import GROU8 from "../../assets/login/image 2942.png";
import GROU9 from "../../assets/login/Logo (1).png";
import GROU10 from "../../assets/login/Section Text.png";
import GROU11 from "../../assets/login/Group (4).png";
import GROU12 from "../../assets/login/Group (5).png";
import users from "../../data/user";
import "../../components/styles/Login.css"

const Login = ({ login }) => {
  const [userId, setUserId] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    <div className="overflow-hidden">
      <div className="loginpage-items flex items-center justify-center h-screen gap-[5vw] p-5">
        <div className="image-section relative flex w-[40vw] h-[100vh]">
          <img className="absolute left-[5vw] z-20 top-[5vh]" src={GROU10} />
          <img
            className="absolute left-[3vw] top-[10vh] w-[37vw]"
            style={{ animation: "spin 10s linear infinite" }}
            src={COMP}
          />
          <img className="absolute left-[37vw] top-[30vh]" src={GROU1} />
          <img className="absolute left-[10vw] top-[73vh]" src={GROU2} />
          <img className="absolute left-[21vw] top-[23vh]" src={GROU3} />
          <img className="absolute left-[25vw] top-[40vh] z-20" src={GROU5} />
          <img className="absolute left-[18vw] top-[62vh] z-20" src={GROU6} />
          <img className="absolute left-[43vw] top-[5vh]" src={GROU7} />
          <img className="absolute left-[0vw] top-[19vh] z-10" src={GROU8} />
          <img className="absolute left-[5vw] top-[35vh] z-10" src={GROU11} />
          <img className="absolute left-[35vw] top-[70vh] z-10" src={GROU12} />
        </div>

        <div className="form-section flex flex-col justify-center items-center bg-violet-50 w-[30vw] h-full">
          <img className="w-[20vw]" src={GROU9} />

          <form className="p-5" onSubmit={handleLogin}>
            <div className="text-left mt-10">
              <h2 className="text-3xl font-semibold">
                &nbsp;&nbsp;&nbsp;Login to your Account
              </h2>
              <p className="font-light mt-1">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;See what is going on{" "}
              </p>
            </div>
            <div className="mt-10 my-5 text-md">
              <label className="block font-semibold">Students ID:</label>
              <input
                type="text"
                className="w-full border p-2 rounded-md border-gray-300"
                placeholder="323432534545"
                value={userDetailsId}
                onChange={(e) => setUserDetailById(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-semibold">Password:</label>
              <input
                type="password"
                className="w-full border p-2 rounded-md border-gray-300"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="check-box flex mt-1 gap-5 text-sm">
              <label>
                <input className="accent-[#704ca4]" type="checkbox" />
                &nbsp;Remember Me
              </label>
              <div className="cursor-pointer main-color-text">
                Forgot Password?
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full main-color-background text-white font-semibold cursor-pointer p-2 border-none mt-7 rounded-md"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
