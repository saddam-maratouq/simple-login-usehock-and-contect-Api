import React from 'react'
import { useContext } from 'react'
import Header from './components/Header'
import Login from './components/Login' 
import { AuthProvider,AuthContex } from './Contex/ContextAutu'

  function App() { 

    const authcontext = useContext(AuthContex)
  return (
    <div className='container'> 
       <Header/> 

        {authcontext.auth.email ? <div> <h2>  welcome dude  &hearts;  {authcontext.auth.email}  &hearts; </h2>  </div>  : <Login/> }
    </div>
  )
}
  



function AuthStore() {
  return (
    <AuthProvider>
      <App/> 
    </AuthProvider>
     
  )
}

export default AuthStore; 