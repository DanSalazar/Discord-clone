import { atom } from 'recoil'
import Avatar from '../../assets/avatar.png'

const user = window.localStorage.getItem('user') || false
const photo_url = window.localStorage.getItem('img') || Avatar
const tag = window.localStorage.getItem('tag') || '#0001'

export const UserAtom = atom({
  key: 'CurrentUser',
  default: {
    username: user || 'no-name',
    photo_url,
    tag,
    status: 'Connect'
  }
})
