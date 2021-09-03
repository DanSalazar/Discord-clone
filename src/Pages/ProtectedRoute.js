import React from 'react'
import { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { UserAuth } from '../Store/store'

function ProtectedRoute ({ component, ...rest }) {
    const { isLogin } = useContext(UserAuth)

    if(isLogin) return <Route component={component} {...rest} />
    
    return <Redirect to='/login' />
}

export default ProtectedRoute
