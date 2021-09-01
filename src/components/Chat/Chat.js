import { Add, EmojiEmotions, Gif, Send } from '@material-ui/icons'
import React from 'react'
import ChatHeader from './ChatHeader'
import { ChatBox, ChatInputBox, ChatInputControls, ChatInputControlsWrapper, ChatInputDragAndDrog, ChatInputMessage, ChatView } from './chatStyles'

function Chat () {
    return (
        <ChatView>
            <ChatHeader/>

            <ChatBox/>

            <ChatInputBox>
                <ChatInputDragAndDrog>
                    <Add/>
                </ChatInputDragAndDrog>

                <ChatInputMessage placeholder="Send message to" />

                <ChatInputControlsWrapper>
                    <ChatInputControls>
                        <Gif/>
                    </ChatInputControls>
                    <ChatInputControls>
                        <EmojiEmotions/>
                    </ChatInputControls>
                    <ChatInputControls>
                        <Send/>
                    </ChatInputControls>
                </ChatInputControlsWrapper>
            </ChatInputBox>
        </ChatView>
    )
}

export default Chat
