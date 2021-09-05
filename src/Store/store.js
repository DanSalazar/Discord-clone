import React, { useState } from 'react'

export const UserAuth = React.createContext({})
export const UserState = React.createContext({})

export function UserProvider ({children}) {
    const [isLogin, setLogin] = useState(localStorage.getItem('token') || false)
    
    return <UserAuth.Provider value={{ isLogin, setLogin } }>
        {children}
    </UserAuth.Provider>
}

export function UserDataProvider ({children}) {
    const [user, ] = useState(JSON.parse(localStorage.getItem('user')))
    const [username, setUsername] = useState(user.username)
    const [tag, setTag] = useState('#0001')
    const [status, setStatus] = useState('conected')
    
    return <UserState.Provider value={{ username, tag, status, setUsername, setTag, setStatus } }>
        {children}
    </UserState.Provider>
}

