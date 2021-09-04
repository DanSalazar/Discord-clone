import styled from 'styled-components'

export const ChatBoxWrapper = styled.div`
    height: 100%;
    overflow-y: auto;
`

export const ChatBoxMessagesContent = styled.div`
    width: 100%;
` 

export const ChatMessageWrapper = styled.div`
    display: flex;
    width: 95%;
    height: auto;
    padding: 4px;
    margin: 20px auto;
`

export const ChannelMessageContent = styled.div`
    margin: 0 10px;
`

export const ChatChannelNameAndTimeWrapper = styled.div`

`

export const ChatChannelName = styled.p`
    font-weight: 500;
    display: inline-block;
    margin: 0;
    color: var(--text-primary);
`

export const ChatChannelTimestamp = styled.time`
    color: var(--text-secondary);
    font-size: 0.75em;
    font-weight: 500;
    margin: 0 5px;
`

export const ChatChannelMessage = styled.div`
    color: var(--text-message);
    margin: 0;
    word-break: break-all;
    font-size: 16px;
`