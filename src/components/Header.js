import React from 'react'
import { useContext } from 'react' 
import { AuthContex } from '../Contex/ContextAutu'



export default function Header() { 
    const authcontext = useContext(AuthContex) 

    const logout = (e) =>  {
    e.preventDefault() 
    authcontext.setAuth({})  
        
    }

    return (
          

                <nav className="navbar navbar-light bg-light mt-2 mb-2">
                <a className="navbar-brand mb-0 h1">React Hooks</a>  
                
               

                {authcontext.auth.email ?  <div> {authcontext.auth.email} <button onClick={logout}  className='btn btn-danger btn-sm '> Logout </button>  
                </div> 
                 : 'need to login' } 
             
                </nav> 

        )
}
