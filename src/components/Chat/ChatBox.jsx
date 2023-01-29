import React, { useRef, useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { ChatBoxWrapper } from './styles'

function ChatBox({ messages }) {
  const messagesWrapper = useRef()

  useEffect(() => {
    messagesWrapper.current.scrollTop = messagesWrapper.current.scrollHeight
  }, [messages])

  return (
    <ChatBoxWrapper ref={messagesWrapper}>
      {messages && (
        <div>
          {messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              message={msg.content}
              channelName={msg.author.username}
              avatar={msg.author.avatar}
            />
          ))}
        </div>
      )}
    </ChatBoxWrapper>
  )
}

export default ChatBox
