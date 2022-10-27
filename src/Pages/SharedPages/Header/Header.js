import React from "react";
import { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [darkToggle, setDarkToggle] = React.useState(false)
  const handlelogout = () => {
    logout()
      .then(() => {})
      .catch((e) => {});
  };
 

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul 
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
              <label className="toggleDarkBtn lg:hidden ">
        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
        <span className="slideBtnTg round"></span>
      </label>
              </li>
              
            </ul>
          </div>
          <Link to="/" className=" normal-case text-xl">
            <img style={{height:'30px'}} src="https://i.ibb.co/S6qSDLY/Screenshot-6-removebg-preview.png" alt="" />
          </Link>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            bongVo
          </Link>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.photoURL? (
            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
              <button>
                {" "}
                <img
                  style={{ height: "30px" }}
                  className="mr-5 mt-3 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </button>
            </div>
          ) : (
            <>
              <FaUserAlt className="mr-5 rounded-full"></FaUserAlt>
            </>
          )}
          {user?.uid ? (
            <>
              <h2 className="mr-5">{user?.displayName}</h2>
              <Link onClick={handlelogout} className="btn">
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="btn mr-5">
                Login
              </Link>
              <Link to="/register" className="btn">
                Register
              </Link>
            </>
          )}
          <div className="ml-5 hidden lg:block">
          <label className="toggleDarkBtn ">
        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
        <span className="slideBtnTg round"></span>
      </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
