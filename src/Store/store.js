import React, { useState } from 'react'

export const UserContext = React.createContext({})

export default function UserProvider ({children}) {
    const [isLogged, setLogged] = useState(localStorage.getItem('user') || false)
    
    return <UserContext.Provider value={isLogged}>
        {children}
    </UserContext.Provider>
}

