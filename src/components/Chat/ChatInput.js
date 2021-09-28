import React, { useState, useContext } from 'react'
import { UserState } from '../../Store/store'
import { Add, EmojiEmotions, Gif, Send } from '@material-ui/icons'
import { ChatInputBox, ChatInputControls, ChatInputControlsWrapper, ChatInputDragAndDrog, ChatForm, ChatInputMessage } from './chatStyles'

function ChatInput ({ sendMessage }) {
  const [message, setMessage] = useState('')
  const { username, avatar} = useContext(UserState)

  const handleMessage = ({ target }) => {
    setMessage(target.value)
  }

  const handleForm = (e) => {
    e.preventDefault()

    if (message) {
      const messageToSend = {
        author: { username, avatar },
        content: message
      }

      sendMessage(messageToSend)
    }

    setMessage('')
  }

  return (
    <ChatForm onSubmit={handleForm}>
      <ChatInputBox>
          <ChatInputDragAndDrog>
              <Add/>
          </ChatInputDragAndDrog>

          <ChatInputMessage 
            placeholder="Send message to" 
            onChange={handleMessage} 
            value={message} 
          />

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
    </ChatForm>
  )
}

export default ChatInput
