import React from 'react'
import { useContext } from 'react'
import Header from './components/Header'
import Login from './components/Login'
import { AutuProvider,AuthContex } from './Contex/ContextAutu' 



 function App() { 

  const authContext = useContext(AuthContex);
  return (
    <div className='container'>
        <Header/>  
       { authContext.auth.email? 'Welcome' : <Login/>}
    </div>
  )
} 


 function AuthApp() {   
  return (
   <AutuProvider>
     <App/>
   </AutuProvider>
  )
}


export default AuthApp;  