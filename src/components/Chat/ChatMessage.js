import React from 'react'
import { ChatMessageWrapper, ChatChannelTimestamp, ChatChannelName, ChatChannelMessage, ChannelMessageContent, ChatChannelNameAndTimeWrapper } from './chatStyles'
import Avatar from '../Avatar/Avatar'

function ChatMessage ({ channelName, message, avatar }) {
    return (
        <ChatMessageWrapper>
            <Avatar width="40px" height="40px" avatarImage={avatar} />
            <ChannelMessageContent>
                <ChatChannelNameAndTimeWrapper> 
                    <ChatChannelName>
                        {channelName}
                    </ChatChannelName>
                    <ChatChannelTimestamp dateTime={new Date(Date.now()).toLocaleDateString()}>
                        {new Date(Date.now()).toLocaleDateString()}
                    </ChatChannelTimestamp>    
                </ChatChannelNameAndTimeWrapper>
                <ChatChannelMessage>
                    {message}
                </ChatChannelMessage>
            </ChannelMessageContent>
        </ChatMessageWrapper>
    )
} 

export default ChatMessage