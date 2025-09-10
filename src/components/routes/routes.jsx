import ProtectedRoute from "../PrivateRoute";
import Login from "../../components/Login";
import Home from "../../pages/Home";
import Pro from "../Pro";
import Set from "../Set";
import Assessments from "../Assessments";
import Courses from "../../components/courses/Courses";
import Attendance from "../Attendance";
import Bookmark from "../Bookmark";
import Schedule from "../Schedule";
import Payment from "../Payment";
import Explore from "../Explore";
import Assignments from "../Assignments";
import EnrolledCourses from "../EnrolledCourses";
import SideEnroll from "../SideEnroll";
import SideExplore from "../SideExplore";
import ForEnroll from "../ForEnroll";

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
        path: "/courses",
        element: <Courses />,
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
        path: "/enroll",
        element: <ForEnroll />,
      },
    ],
  },

  {
    path: "/",
    element: <Login login={login} />,
  },
];

export default routes;
