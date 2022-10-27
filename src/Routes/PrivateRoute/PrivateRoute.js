import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
const Privateroute = ({children}) => {
    const location=useLocation();
    const {user,loading}=useContext(AuthContext);

    if(loading){
        return <h2>Loading...</h2>
       
        
    }
   if(!user){
     return <Navigate to='/login' state={{from:location}} replace></Navigate>
   }
   else{
    return children;
   }
};

export default Privateroute;