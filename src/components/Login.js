import React, { useState,useContext } from "react";
import { AuthContex } from '../Contex/ContextAutu' 


export default function Login() { 

    const [email,setEmail] = useState('') 
    const [password,setPassword] = useState('')   

  const authContext = useContext(AuthContex);  


    function login (e) { 
        e.preventDefault()
        console.log({email,password}); 
        
         // @todo: send api request to validate data and get token

         if(password === '123'){
            const token = 'abc';
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
            authContext.setAuth({token,email})   
           
        } else {
            alert('wrong details');  
        }
        
    }


  const  EmailHandler = e => {
    setEmail (e.target.value)

 };

  const PasswordHandler = e => {
    setPassword (e.target.value) 
 };

  return (
     
      <form> 
             <h2> Login  </h2>
        <input className='form-control' type="email" placeholder="email" value={email} onChange={EmailHandler} />
        <br />
        <br />
        <input className='form-control' type="password" placeholder="password" value={password} onChange={PasswordHandler} /> 
        <br />
        <button className=' btn btn-primary' onClick={login} >  Login </button> 
      </form>
   
  );
}
