import React, { useEffect, useState }  from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.init';


const auth = getAuth(app);
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

   

    const providerLogin=(Provider)=>
    {   
        setLoading(true);
        return signInWithPopup(auth,Provider)
    }

    const emailpassSignin=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const updateName = name => {
        setLoading(true)
        return updateProfile(auth.currentUser, { displayName: name })
      }
    const userCreateemailpass=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logout =()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
             setUser(currentUser);
             setLoading(false)
         
         });
         return ()=>{
             unsubscribe();
         }
     },[])
    const authInfo={user, loading,providerLogin,logout,emailpassSignin,userCreateemailpass,updateName};
    return (
       <AuthContext.Provider value={authInfo}>
       {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;