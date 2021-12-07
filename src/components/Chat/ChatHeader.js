import {
  Bookmark,
  Help,
  Inbox,
  PersonAdd,
  PhoneCallback,
  Search,
  Videocam
} from '@material-ui/icons'
import React from 'react'
import {
  ChatHeaderWrapper,
  ChatHeaderInput,
  ChatHeaderInputBox,
  ChatHeaderInputIcon,
  ChatButtons,
  ChatHeaderButtonsWrapper,
  ChatHeaderChannelName,
  ChatHeaderToolbar
} from './chatStyles'

function ChatHeader({ channelName }) {
  return (
    <ChatHeaderWrapper>
      <ChatHeaderChannelName>User</ChatHeaderChannelName>

      <ChatHeaderToolbar>
        <ChatHeaderButtonsWrapper>
          <ChatButtons>
            <PhoneCallback />
          </ChatButtons>
          <ChatButtons>
            <Videocam />
          </ChatButtons>
          <ChatButtons>
            <Bookmark />
          </ChatButtons>
          <ChatButtons>
            <PersonAdd />
          </ChatButtons>
        </ChatHeaderButtonsWrapper>

        <ChatHeaderInputBox>
          <ChatHeaderInput placeholder='Search' />
          <ChatHeaderInputIcon>
            <Search />
          </ChatHeaderInputIcon>
        </ChatHeaderInputBox>

        <ChatHeaderButtonsWrapper>
          <ChatButtons>
            <Inbox />
          </ChatButtons>
          <ChatButtons>
            <Help />
          </ChatButtons>
        </ChatHeaderButtonsWrapper>
      </ChatHeaderToolbar>
    </ChatHeaderWrapper>
  )
}

export default ChatHeader
