import { useRecoilValue } from 'recoil'
import User from '../../recoil/user' 
import { Headset, Mic, Settings } from '@material-ui/icons'
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
  const { username, photo_url, tag } = useRecoilValue(User)

  return (
    <UserSidebar>
      <UserSidebarStatus>
        <AvatarWrapper
          userAvatar={photo_url}
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
