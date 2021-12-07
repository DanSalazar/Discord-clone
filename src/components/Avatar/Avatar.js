import React from 'react'
import { AvatarImg } from './avatarStyles'

function Avatar({ width, height, avatarImage }) {
  return <AvatarImg src={avatarImage} width={width} height={height} />
}

export default Avatar
