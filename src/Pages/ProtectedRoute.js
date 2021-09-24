import React, { useState } from 'react'
import { Redirect, Route } from 'react-router-dom'

function ProtectedRoute ({ component, ...rest }) {
    const [isLogin, ] = useState(window.localStorage.getItem('user') && window.localStorage.getItem('token'))

    if (isLogin) return <Route component={component} {...rest} />
    
    return <Redirect to='/login' />
}

export default ProtectedRoute
