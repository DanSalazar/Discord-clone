import { useRecoilState } from 'recoil'
import { selectChannelMessage, channelsMessages } from '../../recoil/channels'
import ChatBox from './ChatBox'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import { ChatView } from './chatStyles'

function Chat() {
  const [allMessages, setAllMessages] = useRecoilState(channelsMessages)
  const [{ messages, channelSelect },] = useRecoilState(selectChannelMessage)

  const sendMessage = (msg) => {
    const newMessages = [...messages.messages, msg]
    const allNewMessages = allMessages
      .filter(channels => channels.channelId !== messages.channelId)
      .concat({ ...messages, messages: newMessages })
    setAllMessages(allNewMessages)
  }

  return (
    <ChatView>
      <ChatHeader channelName={channelSelect.username} />
      <ChatBox messages={messages.messages} />
      <ChatInput sendMessage={sendMessage}/>
    </ChatView>
  )
}

export default Chat
