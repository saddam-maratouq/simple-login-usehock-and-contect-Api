import React, { createContext, useState } from 'react' 
import { useEffect } from 'react'



export const AuthContex = createContext() 


export  function AutuProvider(props) { 

    const [auth,setAuth] =useState({
        email : '' 
    }) 

    useEffect(() => {
      const token =  localStorage.getItem('token');
        const email= localStorage.getItem('email');  

        if(email) {
            setAuth({
                token,email 
            })
        }
    },[]) 

    return (
        <div>
            <AuthContex.Provider value={{auth,setAuth}} >   
                {props.children} 
             </AuthContex.Provider>   
        </div>
    )
} 

 