import {
  ChatMessageWrapper,
  ChatChannelTimestamp,
  ChatChannelName,
  ChatChannelMessage,
  ChatChannelNameAndTimeWrapper
} from './styles'
import Avatar from '../Avatar'
import { AVATAR_DIMENSIONS } from '../../constants'

const dateNow = () => new Date().toLocaleDateString()

function ChatMessage({ channelName, message, avatar }) {
  return (
    <ChatMessageWrapper>
      <Avatar
        width={AVATAR_DIMENSIONS['MESSAGE_AVATAR']}
        height={AVATAR_DIMENSIONS['MESSAGE_AVATAR']}
        src={avatar}
      />
      <div>
        <ChatChannelNameAndTimeWrapper>
          <ChatChannelName>{channelName}</ChatChannelName>
          <ChatChannelTimestamp dateTime={dateNow()}>
            {dateNow()}
          </ChatChannelTimestamp>
        </ChatChannelNameAndTimeWrapper>
        <ChatChannelMessage>{message}</ChatChannelMessage>
      </div>
    </ChatMessageWrapper>
  )
}

export default ChatMessage
