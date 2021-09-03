import React, { useState } from 'react'

export const UserAuth = React.createContext({})

export default function UserProvider ({children}) {
    const [isLogin, setLogin] = useState(localStorage.getItem('token') || false)
    
    return <UserAuth.Provider value={{ isLogin, setLogin } }>
        {children}
    </UserAuth.Provider>
}

