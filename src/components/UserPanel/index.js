import { useRecoilValue } from 'recoil'
import User from '../../recoil/user'
import { Headset, Mic, Settings } from '@material-ui/icons'
import Avatar from '../Avatar'
import {
  UserSidebar,
  UserSidebarControls,
  UserSidebarControlsWrapper,
  UserSidebarId,
  UserSidebarInfo,
  UserSidebarStatus,
  UserSidebarUsername
} from './styles'
import { AVATAR_DIMENSIONS } from '../../constants'

function UserPanel({ handleOptionView }) {
  const { username, avatar, tag } = useRecoilValue(User)

  return (
    <UserSidebar>
      <UserSidebarStatus>
        <Avatar
          src={avatar}
          width={AVATAR_DIMENSIONS['avatar']}
          height={AVATAR_DIMENSIONS['avatar']}
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
