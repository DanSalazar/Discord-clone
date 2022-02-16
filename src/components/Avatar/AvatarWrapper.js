import React from 'react'
import { AvatarContainer } from './avatarStyles'
import Avatar from './Avatar'

function AvatarWrapper({ status, background, userAvatar }) {
  return (
    <AvatarContainer aria-label='Avatar' background={background}>
      <Avatar avatarImage={userAvatar} />
    </AvatarContainer>
  )
}

export default AvatarWrapper
