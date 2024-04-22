import React from 'react'
import UserInfo from './UserInfo'
import authContext from './auth-context'
export default function Main() {
  return (

    <authContext.Provider value={{id : 24}}>
 <div>
      <UserInfo /> 
      {/* miad az akharin provider ke khat 7 hast daryaft mikone  */}
    </div>
  

    </authContext.Provider>
  )
}
