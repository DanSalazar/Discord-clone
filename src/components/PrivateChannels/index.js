import Avatar from '../Avatar'
import { useRecoilState } from 'recoil'
import { currentChannelIdSelected } from '../../recoil/channels'
import {
  PrivateChannelName,
  PrivateChannelNameWrapper,
  PrivateChannelsWrapper,
  LinkStyled
} from './styles'
import { AVATAR_DIMENSIONS } from '../../constants'

function PrivateChannel({ avatar, username, id, position }) {
  const [currentChannelId, setCurrentChannelId] = useRecoilState(
    currentChannelIdSelected
  )
  const isSelected = position === currentChannelId ? 'channel-selected' : ''
  return (
    <LinkStyled
      to={`/${id}`}
      className={isSelected}
      onClick={() => setCurrentChannelId(id)}>
      <PrivateChannelsWrapper>
        <Avatar
          src={avatar}
          width={AVATAR_DIMENSIONS['AVATAR']}
          height={AVATAR_DIMENSIONS['AVATAR']}
        />
        <PrivateChannelNameWrapper>
          <PrivateChannelName className={'channel-username'}>
            {username}
          </PrivateChannelName>
        </PrivateChannelNameWrapper>
      </PrivateChannelsWrapper>
    </LinkStyled>
  )
}

export default PrivateChannel
