import React from 'react'
import { ChatMessageWrapper, ChatChannelTimestamp, ChatChannelName, ChatChannelMessage, ChannelMessageContent } from './chatBoxStyles'
import Avatar from '../Avatar/Avatar'

function ChatMessage ({ channelName, messageContent }) {
    return (
        <ChatMessageWrapper>
            <Avatar width="40px" height="40px"/>
            <ChannelMessageContent>
                <ChatChannelName>
                    { channelName }
                </ChatChannelName>
                <ChatChannelTimestamp>
                    <span>
                        Time
                    </span>
                </ChatChannelTimestamp>
                <ChatChannelMessage>
                    { messageContent }
                </ChatChannelMessage>
            </ChannelMessageContent>
        </ChatMessageWrapper>
    )
} 

export default ChatMessage
