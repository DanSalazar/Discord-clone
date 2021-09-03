import React from 'react'
import { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { UserContext } from '../Store/store'

function ProtectedRoute ({ component, ...rest }) {
    const userLogged = useContext(UserContext)

    if(userLogged) return (
        <Route component={component} {...rest} />
    )

    return <Redirect to='/login' />
}

export default ProtectedRoute
