import React, { createContext, useState,useEffect } from 'react' 

 export  const  AuthContex = createContext()  

export  function AuthProvider(props) {  

    const [auth,setAuth] = useState({
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
      <AuthContex.Provider value={{auth,setAuth }}> 
          {props.children} 
      </AuthContex.Provider>
    )
}
 
 