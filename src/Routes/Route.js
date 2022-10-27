import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Checkoutpage from "../Pages/CheckOut/Checkoutpage";
import Allcourse from "../Pages/Courses/Allcourse";
import Courses from "../Pages/Courses/Courses";
import Errorpage from "../Pages/ErrorPage/Errorpage";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Reacttopdf from "../Pages/Reacttopdf/Reacttopdf";
import Register from "../Pages/Register/Register";
import Privateroute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Errorpage></Errorpage>,
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
        path: "/pdf",
        element: <Reacttopdf></Reacttopdf>,
      },
      {
        path: "/checkout/:id",
        element: <Privateroute><Checkoutpage></Checkoutpage></Privateroute>,
        loader:({params})=>fetch(`https://b610-lerning-platform-server-side-inzamam-nur.vercel.app/checkout/${params.id}`)
      },
    
      {
        path: "/courses",
        element: <Allcourse></Allcourse>,
        loader:()=>fetch('https://b610-lerning-platform-server-side-inzamam-nur.vercel.app/courses')
      },
      {
        path:'/course/:id',
        element:<Privateroute><Courses></Courses></Privateroute>,
        loader:({params})=>fetch(`https://b610-lerning-platform-server-side-inzamam-nur.vercel.app/course/${params.id}`)
        
    },
   
    
    ],
  },
]);
