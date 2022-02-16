import { useState } from 'react'
import ChatBox from './ChatBox'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import { ChatView } from './chatStyles'
import Avatar from '../../assets/avatar.png'

export const channel = {
  messages: [
    {
      id: 0,
      author: {
        username: 'Usertest',
        avatar: Avatar
      },
      content: 'Message test'
    },
    {
      id: 1,
      author: {
        username: 'Usertest',
        avatar: Avatar
      },
      content: 'Another message test'
    }
  ]
}


function Chat() {
  const [messages, setMessages] = useState(channel.messages)

  const sendMessage = (message) => {
    setMessages(messages.concat({ ...message, id: messages.length + 1 }))
  }
  return (
    <ChatView>
      <ChatHeader />
      <ChatBox messages={messages} />
      <ChatInput sendMessage={sendMessage} />
    </ChatView>
  )
}

export default Chat
