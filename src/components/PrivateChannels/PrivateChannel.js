import Avatar from '../Avatar/Avatar'
import { useRecoilState } from 'recoil'
import { currentSelectChannel } from '../../recoil/channels'
import {
  PrivateChannelName,
  PrivateChannelNameWrapper,
  PrivateChannelsWrapper,
  LinkStyled
} from './privateChannelsStyles'

function PrivateChannel({ photo_url, username, id }) {
  const [, setCurrentChannelId] = useRecoilState(currentSelectChannel)
  return (
    <LinkStyled to={`/home/${id}`} onClick={() => setCurrentChannelId(id)} >
      <PrivateChannelsWrapper >
        <Avatar colorBg='gray' avatarImage={photo_url}/>
        <PrivateChannelNameWrapper>
          <PrivateChannelName>{username}</PrivateChannelName>
        </PrivateChannelNameWrapper>
      </PrivateChannelsWrapper>
    </LinkStyled>
  )
}

export default PrivateChannel
