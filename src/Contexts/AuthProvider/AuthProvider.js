import React, { useEffect, useState }  from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.init';


const auth = getAuth(app);
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
   

    const providerLogin=(Provider)=>
    {   
       
        return signInWithPopup(auth,Provider)
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
             console.log('user from statechanged');
             setUser(currentUser);
         
         });
         return ()=>{
             unsubscribe();
         }
     },[])
    const authInfo={user,providerLogin};
    return (
       <AuthContext.Provider value={authInfo}>
       {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;