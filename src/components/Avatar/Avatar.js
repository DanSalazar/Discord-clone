import React from 'react'
import { AvatarImg } from './avatarStyles'

const URL_IMAGE = 'https://cdn.discordapp.com/avatars/846973614439137320/e35249272c67c39ba82e2c8a46098c3e.png?size=512'

function Avatar ({ width, height }) {
    return (
        <AvatarImg src={URL_IMAGE} width={width} height={height} />
    )
}

export default Avatar
