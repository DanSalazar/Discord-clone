import React from 'react'
import { ChatBoxMessagesContent, ChatBoxWrapper } from './chatBoxStyles'
import Avatar from '../Avatar/Avatar'
import ChatMessage from './ChatMessage'

function ChatBox () {
    return (
        <ChatBoxWrapper>
            <ChatBoxMessagesContent>
                <ChatMessage channelName="User" messageContent="Tsss"/>
            </ChatBoxMessagesContent>
        </ChatBoxWrapper>
    )
}

export default ChatBox
