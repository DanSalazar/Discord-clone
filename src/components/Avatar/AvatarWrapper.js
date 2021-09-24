import React from 'react'
import { AvatarContainer, AvatarStatus, AvatarStatusMask } from './avatarStyles'
import Avatar from './Avatar'

function AvatarWrapper({ status, background, userAvatar }) {
    return (
        <AvatarContainer role='img' background={background} >
            <Avatar avatarImage={userAvatar} />
            <AvatarStatus background={background}>
                <AvatarStatusMask status={status} />
            </AvatarStatus>
        </AvatarContainer>
    )
}

export default AvatarWrapper
