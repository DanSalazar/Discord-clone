import React, { useRef, useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { ChatBoxMessagesContent, ChatBoxWrapper } from './chatStyles'

function ChatBox({ messages }) {
  const messagesWrapper = useRef()

  // Messages component scroll to the last message
  useEffect(() => {
    messagesWrapper.current.scrollTop = messagesWrapper.current.scrollHeight
  }, [messages])

  return (
    <ChatBoxWrapper ref={messagesWrapper}>
      {messages && (
        <ChatBoxMessagesContent tabindex='-1'>
          {messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              message={msg.content}
              channelName={msg.author.username}
              avatar={msg.author.avatar}
            />
          ))}
        </ChatBoxMessagesContent>
      )}
    </ChatBoxWrapper>
  )
}

export default ChatBox
