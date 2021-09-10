import React from 'react'
import { AvatarImg } from './avatarStyles'

const URL_IMAGE = 'https://cdn.discordapp.com/avatars/846973614439137320/1b3992b9dd86b8e974c5cae8ee621940.png?size=256'

function Avatar ({ width, height }) {
    return (
        <AvatarImg src={URL_IMAGE} width={width} height={height} />
    )
}

export default Avatar
