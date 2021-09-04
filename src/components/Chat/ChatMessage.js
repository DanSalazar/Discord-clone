import React from 'react'
import { ChatMessageWrapper, ChatChannelTimestamp, ChatChannelName, ChatChannelMessage, ChannelMessageContent, ChatChannelNameAndTimeWrapper } from './chatBoxStyles'
import Avatar from '../Avatar/Avatar'

function ChatMessage ({ channelName, messageContent }) {
    return (
        <ChatMessageWrapper>
            <Avatar width="40px" height="40px"/>
            <ChannelMessageContent>
                <ChatChannelNameAndTimeWrapper> 
                    <ChatChannelName>
                        { channelName }
                    </ChatChannelName>
                    <ChatChannelTimestamp>
                        <span> {new Date(Date.now()).toLocaleDateString()} </span>
                    </ChatChannelTimestamp>    
                </ChatChannelNameAndTimeWrapper>
                <ChatChannelMessage>
                    { messageContent }
                </ChatChannelMessage>
            </ChannelMessageContent>
        </ChatMessageWrapper>
    )
} 

export default ChatMessage