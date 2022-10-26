import React, { useEffect, useState }  from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';


const auth = getAuth(app);
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
   

    const providerLogin=(Provider)=>
    {   
       
        return signInWithPopup(auth,Provider)
    }

    const emailpassSignin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const userCreateemailpass=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logout =()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
             setUser(currentUser);
         
         });
         return ()=>{
             unsubscribe();
         }
     },[])
    const authInfo={user,providerLogin,logout,emailpassSignin,userCreateemailpass};
    return (
       <AuthContext.Provider value={authInfo}>
       {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;