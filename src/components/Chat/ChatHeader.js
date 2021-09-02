import { Bookmark, Help, Inbox, PersonAdd, PhoneCallback, Search, Videocam } from '@material-ui/icons'
import React from 'react'
import { ChatHeaderWrapper, ChatHeaderInput, ChatHeaderInputBox, ChatHeaderInputIcon, ChatIcons, ChatHeaderIconsWrapper, ChatHeaderLeftPart, ChatHeaderToolbar } from './chatStyles'


function ChatHeader ({ channelName, channelStatus }) {
    return (
        <ChatHeaderWrapper>
            
            <ChatHeaderLeftPart/>

            <ChatHeaderToolbar>
                <ChatHeaderIconsWrapper>
                    <ChatIcons>
                        <PhoneCallback/>
                    </ChatIcons>
                    <ChatIcons>
                        <Videocam/>
                    </ChatIcons>
                    <ChatIcons>
                        <Bookmark/>
                    </ChatIcons>
                    <ChatIcons>
                        <PersonAdd/>
                    </ChatIcons>
                </ChatHeaderIconsWrapper>

                <ChatHeaderInputBox>
                    <ChatHeaderInput placeholder="Search"/>
                    <ChatHeaderInputIcon>
                        <Search/>
                    </ChatHeaderInputIcon>
                </ChatHeaderInputBox>

                <ChatHeaderIconsWrapper>
                    <ChatIcons>
                        <Inbox/>
                    </ChatIcons>
                    <ChatIcons>
                        <Help/>
                    </ChatIcons>
                </ChatHeaderIconsWrapper>
            </ChatHeaderToolbar>

        </ChatHeaderWrapper>
    )
}

export default ChatHeader
