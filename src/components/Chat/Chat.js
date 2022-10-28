import { useRecoilState, useRecoilValue } from 'recoil'
import {
  getCurrentChannelMessages,
  channelsMessages
} from '../../recoil/channels'
import ChatBox from './ChatBox'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import { ChatView } from './styles'

function Chat() {
  const [allMessages, setAllMessages] = useRecoilState(channelsMessages)
  const { currentMessages, currentChannel } = useRecoilValue(
    getCurrentChannelMessages
  )

  const sendMessage = (msg) => {
    const newMessages = [...currentMessages.messages, msg]
    const allNewMessages = allMessages.map((m) => {
      if (m.channelId === currentChannel.channelId) {
        return { ...m, messages: newMessages }
      }
      return m
    })
    setAllMessages(allNewMessages)
  }

  return (
    <ChatView>
      {currentChannel && (
        <>
          <ChatHeader channelName={currentChannel.username} />
          <ChatBox messages={currentMessages.messages} />
          <ChatInput sendMessage={sendMessage} />
        </>
      )}
    </ChatView>
  )
}

export default Chat
