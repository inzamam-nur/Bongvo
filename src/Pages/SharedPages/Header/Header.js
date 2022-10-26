import React from "react";
import { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
    const {user,logout}=useContext(AuthContext)
    const handlelogout=()=>{
      logout()
      .then(()=>{})
      .catch((e)=>{})
    }
  return (
    <div className="sticky ">
      <div  className="navbar text-white bg-black	">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost normal-case text-xl">BongVo</Link>
        </div>
        <div className="flex-none 	">
          <ul className="menu menu-horizontal p-0">

            {
              user?.uid ?
              <>
             
              <h2 className="mr-5 inline-block align-middle">{user?.displayName}</h2>
              {user?.photoURL ? 
                  // eslint-disable-next-line jsx-a11y/img-redundant-alt
                  <img className="rounded-full mr-5" style={{ height: "25px"}} src={user?.photoURL}  alt="user Image " />
                 : 
                  < FaUserAlt className="align-middle"></FaUserAlt>
                }
            <button onClick={handlelogout}>Logout</button>
            
              </>
              :
              <>
                <li>
              <Link  to='/login'>Login</Link>
            </li>
            <li>
            <Link to='/register'>Register</Link>
            </li>
              </>
            }
          
            
            
          
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
