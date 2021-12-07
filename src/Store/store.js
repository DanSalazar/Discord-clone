import React, { useState } from 'react'
import GenericAvatar from '../assets/3c6ccb83716d1e4fb91d3082f6b21d77.png'

export const UserState = React.createContext({})

export function UserDataProvider({ children }) {
  const [user] = useState(JSON.parse(window.localStorage.getItem('user')))
  const [username, setUsername] = useState(user.username)
  const [avatar, setAvatar] = useState(
    window.localStorage.getItem('avatar') || 
    GenericAvatar
  )
  const [tag, setTag] = useState('#0001')
  const [status, setStatus] = useState('absent')

  // If the tag is less than 4
  const setTagOfUser = (tag) => {
    const TAGS_UNITS = ['', '0', '00', '000']
    const calcTag = Math.abs(tag.length - 4)

    setTag(`#${TAGS_UNITS[calcTag]}${tag}`)
  }

  return (
    <UserState.Provider
      value={{
        username,
        tag,
        status,
        avatar,
        setAvatar,
        setUsername,
        setTagOfUser,
        setStatus
      }}>
      {children}
    </UserState.Provider>
  )
}
