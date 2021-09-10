import React, { useState } from 'react'

export const UserAuth = React.createContext({})
export const UserState = React.createContext({})

export function UserProvider ({children}) {
    const [isLogin, setLogin] = useState(window.localStorage.getItem('user') && window.localStorage.getItem('token'))
    
    return <UserAuth.Provider value={{ isLogin, setLogin } }>
        {children}
    </UserAuth.Provider>
}

export function UserDataProvider ({children}) {
    const [user, ] = useState(JSON.parse(window.localStorage.getItem('user')))
    const [username, setUsername] = useState(user.username)
    const [tag, setTag] = useState('#0001')
    const [status, setStatus] = useState('absent')

    // If the tag is less than 4
    const setTagOfUser = (tag) => {
        const TAGS_UNITS = ['', '0', '00', '000']
        const calcTag = Math.abs(tag.length - 4)

        setTag(`#${TAGS_UNITS[calcTag]}${tag}`)
    }
    
    return <UserState.Provider value={{ username, tag, status, setUsername, setTagOfUser, setStatus } }>
        {children}
    </UserState.Provider>
}

