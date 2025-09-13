import ProtectedRoute from "../../components/AllRoutes/PrivateRoute";
import Login from "../../components/Login/Login";
import Home from "../../pages/Home";

import Assessments from "../Sidebar/Assessments";
import Courses from "../../components/courses/Courses";
import Attendance from "../Sidebar/Attendance";
import Bookmark from "../Sidebar/Bookmark";
import Schedule from "../Sidebar/Schedule";
import Payment from "../Sidebar/Payment";
import Explore from "../Home/Explore";
import Assignments from "../Sidebar/Assignments";
import EnrolledCourses from "../Home/EnrolledCourses";
import SideEnroll from "../Sidebar/SideEnroll";
import SideExplore from "../Sidebar/SideExplore";
import ForEnroll from "../Enrollment/ForEnroll";

const routes = (isAuthenticated, currentUser, login) => [
  {
    element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
    children: [
      { path: "/home", element: <Home user={currentUser} /> },

      {
        path: "/assessments",
        element: <Assessments />,
      },
      {
        path: "/assignments",
        element: <Assignments />,
      },
      
      {
        path: "/attendance",
        element: <Attendance />,
      },
      {
        path: "/bookmark",
        element: <Bookmark />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/explore",
        element: <SideExplore />,
      },
      {
        path: "/enrolled-courses",
        element: <SideEnroll />,
      },
      {
        path: "/enroll/:courseId",
        element: <ForEnroll />,
      },
      {
        path:"/courses/:id",
        element: <Courses/>
      }
    ],
  },

  {
    path: "/",
    element: <Login login={login} />,
  },
];

export default routes;
