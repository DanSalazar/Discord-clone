import React from 'react'
import { AvatarImg, AvatarStatusUser, AvatarWrapper } from './avatarStyles'

const URL_IMAGE = 'https://cdn.discordapp.com/avatars/663749915599568946/bbaa8746fcc5d66a82b7165c97d11f92.png?size=512'

function Avatar ({colorBg, children}) {
    return (
        <AvatarWrapper>
            <AvatarStatusUser colorBg={colorBg} />
            <AvatarImg src={URL_IMAGE} />
        </AvatarWrapper>
    )
}

export default Avatar
