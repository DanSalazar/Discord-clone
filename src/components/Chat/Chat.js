import React from 'react'
import { ChatHeader, ChatInputMessage, ChatView } from './chatStyles'

function Chat() {
    return (
        <ChatView>
            <ChatHeader></ChatHeader>
            <ChatInputMessage/>
        </ChatView>
    )
}

export default Chat
