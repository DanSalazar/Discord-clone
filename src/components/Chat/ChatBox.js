import React from 'react'
import { ChatBoxMessagesContent, ChatBoxWrapper } from './chatBoxStyles'
import ChatMessage from './ChatMessage'

const messages = [
    {  channelName: 'User1', id: 0, messageContent: 'Heeeyeey'},
    {  channelName: 'User2', id: 1, messageContent: 'Heeeyeey'},
    {  channelName: 'User3', id: 2, messageContent: 'Heeeyeeyeeeyeey'}
]

function ChatBox () {
    return (
        <ChatBoxWrapper>
            <ChatBoxMessagesContent>
                {messages.map(message => (
                    <ChatMessage key={message.id} {...message}/>
                ))}
            </ChatBoxMessagesContent>
        </ChatBoxWrapper>
    )
}

export default ChatBox
