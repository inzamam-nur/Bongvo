import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Checkoutpage from "../Pages/CheckOut/Checkoutpage";
import CourseDetails from "../Pages/Courses/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element:<Blog></Blog>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/checkout",
        element: <Checkoutpage></Checkoutpage>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader:()=>fetch('http://localhost:5000/courses')
      },
      {
        path: "/coursedetails",
        element: <CourseDetails></CourseDetails>,
        loader:({params})=>fetch(`http://localhost:5000/coursedetails/${params.id}`)

      },
    ],
  },
]);
