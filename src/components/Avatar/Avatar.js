import React from 'react'
import { AvatarImg } from './avatarStyles'

const URL_IMAGE = 'https://cdn.discordapp.com/avatars/846973614439137320/0b5c6e74fbc90c6a5c336ace7a634ee4.png?size=256'

function Avatar ({ width, height }) {
    return (
        <AvatarImg src={URL_IMAGE} width={width} height={height} />
    )
}

export default Avatar
