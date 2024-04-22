import React, {useContext} from 'react'
import authContext from './auth-context'
export default function UserInfo() {

    const user =useContext(authContext)

  return (
   <p>user ID : {user.id}</p>
  )
}
