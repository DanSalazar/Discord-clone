import { atom } from 'recoil'
import Avatar from '../../assets/avatar.png'

const user = JSON.parse(window.localStorage.getItem('user')) || false
const image = window.localStorage.getItem('avatar') || Avatar

export const UserAtom = atom({
	key: 'CurrentUser',
	default: {
		username: user?.username,
		avatar: image,
		tag: '#0001',
		status: 'Connect'
	}
})