import React, { useContext } from 'react'
import { Headset, Mic, Settings } from '@material-ui/icons'
import { UserState } from '../../Store/store'
import AvatarWrapper from '../Avatar/AvatarWrapper'
import {
  UserSidebar,
  UserSidebarControls,
  UserSidebarControlsWrapper,
  UserSidebarId,
  UserSidebarInfo,
  UserSidebarStatus,
  UserSidebarUsername
} from './userPanelStyles'

function UserPanel({ handleOptionView }) {
  const { username, tag, status, avatar } = useContext(UserState)

  return (
    <UserSidebar>
      <UserSidebarStatus>
        <AvatarWrapper
          status={status}
          background='secondaryAlt'
          userAvatar={avatar}
        />
        <UserSidebarInfo>
          <UserSidebarUsername>
            {username.length > 11 ? username.slice(0, 11) + '...' : username}
          </UserSidebarUsername>
          <UserSidebarId>{tag}</UserSidebarId>
        </UserSidebarInfo>
      </UserSidebarStatus>

      <UserSidebarControlsWrapper>
        <UserSidebarControls>
          <Mic />
        </UserSidebarControls>
        <UserSidebarControls>
          <Headset />
        </UserSidebarControls>
        <UserSidebarControls onClick={handleOptionView}>
          <Settings />
        </UserSidebarControls>
      </UserSidebarControlsWrapper>
    </UserSidebar>
  )
}

export default UserPanel
