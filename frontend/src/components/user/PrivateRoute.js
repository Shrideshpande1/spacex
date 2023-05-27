

import React from 'react'
import { Route,redirect } from 'react-router-dom'
export const PrivateRoute = ({children,...rest}) => {
    const isAuth=false
  return (
   <Route {...rest} render={()=>isAuth?(children):(<redirect to={"/"}/>)}/>
  )
}
