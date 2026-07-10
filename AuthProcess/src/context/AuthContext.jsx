import { createContext, useEffect, useState } from "react";


const AuthContext = createContext();

export default AuthContext

export const AuthProvider =({children})=>{


    const [user,setUser]=useState(null);

    useEffect(()=>{

        const currentUser =JSON.parse(localStorage.getItem("currentUser"));
        if(currentUser){
        setUser(currentUser);
        }

    },[])

    const login =(userData)=>{

        localStorage.setItem("currentUser",JSON.stringify(userData));
        setUser(userData)

    }

    const Logout =()=>{

        localStorage.removeItem("currentUser");
        setUser(null);
    
    }


    return(
        <>
        <AuthContext.Provider value={{user,login,Logout}}>
            {children}
        </AuthContext.Provider>
        </>
    )
}