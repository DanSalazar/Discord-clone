import { Headset, Mic, Settings } from '@material-ui/icons'
import React, { useContext } from 'react'
import { UserState } from '../../Store/store'
import Avatar from '../Avatar/Avatar'
import { UserSidebar, UserSidebarControls, UserSidebarControlsWrapper, UserSidebarId, UserSidebarInfo, UserSidebarStatus, UserSidebarUsername } from './userPanelStyles'

function UserPanel () {
    const { username, tag } = useContext(UserState)

    return (
        <UserSidebar>
            <UserSidebarStatus>
                <Avatar/>
                <UserSidebarInfo>
                    <UserSidebarUsername>
                        {username.length > 12 
                        ? username.slice(0, 12) + '...'
                        : username
                        }
                    </UserSidebarUsername>
                    <UserSidebarId>
                        {tag}
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

export default UserPanel
