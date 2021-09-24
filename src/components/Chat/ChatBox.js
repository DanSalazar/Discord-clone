import React from 'react'
import ChatMessage from './ChatMessage'
import { ChatBoxMessagesContent, ChatBoxWrapper } from './chatStyles'

function ChatBox ({ messages }) {
    return (
        <ChatBoxWrapper>
            {messages &&
              <ChatBoxMessagesContent>
                {messages.map(msg => (
                  <ChatMessage 
                    key={msg.id} 
                    message={msg.content} 
                    channelName={msg.author.username} 
                    avatar={msg.author.avatar}
                  />
                ))}
              </ChatBoxMessagesContent>
            }
        </ChatBoxWrapper>
    )
}

export default ChatBox
