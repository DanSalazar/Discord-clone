import React, { useState } from 'react'
import ChatBox from './ChatBox'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import { channel } from './chat_helpers'
import { ChatView } from './chatStyles'

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
