import { Headset, Mic, Settings } from '@material-ui/icons'
import React from 'react'
import Avatar from '../Avatar/Avatar'
import { UserSidebar, UserSidebarControls, UserSidebarControlsWrapper, UserSidebarId, UserSidebarInfo, UserSidebarStatus, UserSidebarUsername } from './barUserStyles'

const USERNAME = 'Usertest 🐢'

function BarUser () {
    return (
        <UserSidebar>
            <UserSidebarStatus>
                <Avatar/>
                <UserSidebarInfo>
                    <UserSidebarUsername>
                        {USERNAME.length > 12 
                        ? USERNAME.slice(0, 12) + '...'
                        : USERNAME
                        }
                    </UserSidebarUsername>
                    <UserSidebarId>
                        #0001
                    </UserSidebarId>
                </UserSidebarInfo>
            </UserSidebarStatus>

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
