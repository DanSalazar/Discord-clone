import React from 'react'
import { AvatarContainer, AvatarStatus, AvatarStatusMask } from './avatarStyles'
import Avatar from './Avatar'

function AvatarWrapper({ status, background, userAvatar }) {
  return (
    <AvatarContainer aria-label='Avatar' background={background}>
      <Avatar avatarImage={userAvatar} />
      {status && background &&
      <AvatarStatus background={background}>
        <AvatarStatusMask status={status} />
      </AvatarStatus>
      }
    </AvatarContainer>
  )
}

export default AvatarWrapper
