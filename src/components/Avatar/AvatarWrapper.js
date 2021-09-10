import React from 'react'
import { AvatarContainer, AvatarStatus, AvatarStatusMask } from './avatarStyles'
import Avatar from './Avatar'

function AvatarWrapper ({ status, background }) {
    return (
        <AvatarContainer role='img' background={background} >
            <Avatar/>
            <AvatarStatus background={background}>
                <AvatarStatusMask status={status} />
            </AvatarStatus>
        </AvatarContainer>
    )
}

export default AvatarWrapper
