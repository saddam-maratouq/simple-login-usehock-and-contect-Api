import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContex } from '../Contex/ContextAutu'


export default function Login() { 

 const [email,setEmail] = useState() 
 const [password,setPassword] = useState()   

 const authcontext = useContext(AuthContex)


 const emailHandler = (e) => {
    setEmail ( e.target.value) 
 }

 const passWordHandler = (e) =>  {
    setPassword (e.target.value) 
 }

 function login (e) {
    e.preventDefault() 

    if(password) {
        const token  ='wss'
         localStorage.setItem('token',token)
         localStorage.setItem('email',email) 
         authcontext.setAuth({token,email})  

         console.log({email,password}); 
         
    }
    else {
        alert ('try again ')   
    }
 }

    return (
        <div>
                <input  type="email" placeholder='email' value={email} onChange={emailHandler}  /> 
                <br /> 
                <br /> 
                <input  type="password" placeholder='password' value={password}  onChange={passWordHandler} />  
                <br /> 
                <br /> 
                <button className='btn btn-primary ' onClick={login}> login   </button>  

        </div>
    ) 
}
