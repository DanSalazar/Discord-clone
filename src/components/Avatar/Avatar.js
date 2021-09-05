import React from 'react'
import { AvatarImg } from './avatarStyles'

const URL_IMAGE = 'https://cdn.discordapp.com/avatars/846973614439137320/f9eb0a211cb40cdec09ae1384a1a6ace.png?size=256'

function Avatar ({ width, height }) {
    return (
        <AvatarImg src={URL_IMAGE} width={width} height={height} />
    )
}

export default Avatar
