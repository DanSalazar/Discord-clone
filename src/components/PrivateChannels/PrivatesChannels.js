import Avatar from '../Avatar/Avatar'
import image from '../../assets/avatar.png'
import {
  PrivateChannelName,
  PrivateChannelNameWrapper,
  PrivateChannelsWrapper
} from './privateChannelsStyles'

function PrivatesChannels() {
  return (
    <PrivateChannelsWrapper>
      <Avatar colorBg='gray' avatarImage={image}/>
      <PrivateChannelNameWrapper>
        <PrivateChannelName>Usertest</PrivateChannelName>
      </PrivateChannelNameWrapper>
    </PrivateChannelsWrapper>
  )
}

export default PrivatesChannels
