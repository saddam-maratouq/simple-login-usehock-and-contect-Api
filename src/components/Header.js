import React ,{ useContext }  from 'react'
import { AuthContex } from '../Contex/ContextAutu' 


export default function Header() { 

  const authContext = useContext(AuthContex);   

  const logoutHandler = () => {
    authContext.setAuth({}) 
  }

    return (
       
           <nav className="navbar navbar-light bg-light mt-2 mb-2">
            <a className="navbar-brand mb-0 h1">React Hooks</a>
           
            <div> 
              {authContext.auth.email ? <div > {authContext.auth.email}  {''} 
                <button className='btn btn-danger btn-sm' onClick={logoutHandler}> logout </button> 
                    </div> : 'you need to login'} 
                  
            </div>
            </nav>  
           
       
    ) 
}
 
