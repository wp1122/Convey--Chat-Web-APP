import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext= createContext();

export const AuthContextProvider= ({children}) => {
    const [currentUser,setCurrentUser] = useState({});
//children is complete App to which our user will be passed.
    useEffect(()=>{
        const unsub=onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            console.log(user);
        })

        //if u are listening a realtime function, u should use a cleanup function to avoid memory leakage in use effect
        return () => {
            unsub();
        }
    },[]);

    return(
    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
    );
};