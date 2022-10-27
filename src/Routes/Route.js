import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Checkoutpage from "../Pages/CheckOut/Checkoutpage";
import Allcourse from "../Pages/Courses/Allcourse";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Privateroute from "./PrivateRoute/PrivateRoute";

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
        path: "/checkout/:id",
        element: <Privateroute><Checkoutpage></Checkoutpage></Privateroute>,
        loader:({params})=>fetch(`http://localhost:5000/checkout/${params.id}`)
      },
    
      {
        path: "/courses",
        element: <Allcourse></Allcourse>,
        loader:()=>fetch('http://localhost:5000/courses')
      },
      {
        path:'/course/:id',
        element:<Privateroute><Courses></Courses></Privateroute>,
        loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`)
        
    },
   
    
    ],
  },
]);
