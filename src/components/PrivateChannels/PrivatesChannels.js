import { Clear } from '@material-ui/icons'
import React, { useState } from 'react'
import Avatar from '../Avatar/Avatar'
import { PrivateChannelName, PrivateChannelNameWrapper, PrivateChannelsWrapper } from './privateChannelsStyles'

function PrivatesChannels () {
    const [onHover, setHover] = useState(false)

    // const handleHover = () => {
    //     setHover(!onHover)
    // }
    
    // const handleHoverOut = () => {
    //     setHover(!onHover)
    // }

    return (
        <PrivateChannelsWrapper>
            <Avatar colorBg='gray' />
            <PrivateChannelNameWrapper>
                <PrivateChannelName>
                    Usertest
                </PrivateChannelName>
                { onHover && <Clear/> }
            </PrivateChannelNameWrapper>
        </PrivateChannelsWrapper>
    )
}

export default PrivatesChannels
