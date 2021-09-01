import { Headset, Mic, Settings } from '@material-ui/icons'
import React from 'react'
import { UserSidebar, UserSidebarControls, UserSidebarControlsWrapper } from './barUserStyles'

function BarUser () {
    return (
        <UserSidebar>
            <UserSidebarControlsWrapper>
                <UserSidebarControls>
                    <Mic/>
                </UserSidebarControls>
                <UserSidebarControls>
                    <Headset/>
                </UserSidebarControls>
                <UserSidebarControls>
                    <Settings/>
                </UserSidebarControls>
            </UserSidebarControlsWrapper>
        </UserSidebar>
    )
}

export default BarUser
