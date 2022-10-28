import { atom } from 'recoil'
import Avatar from '../../assets/avatar.png'

const user = JSON.parse(window.localStorage.getItem('user')) || {
  username: 'User',
  tag: '#0001',
  avatar: Avatar
}

export const UserAtom = atom({
  key: 'User',
  default: user
})
