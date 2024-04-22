import React, { useState } from 'react'
import Main from './Main'
import authContext from './auth-context'
export default function App() {

  const [user, setUser] = useState({id:12})
  return (


   <authContext.Provider value={user}> 
   {/* provider ha ye props migire be onvan value  */}

    <Main />
   </authContext.Provider>
      
    
  )
}
