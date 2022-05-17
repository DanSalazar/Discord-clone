import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import User from '../../recoil/user'
import { Add, EmojiEmotions, Gif, Send } from '@material-ui/icons'
import {
  ChatInputBox,
  ChatInputControls,
  ChatInputControlsWrapper,
  ChatInputDragAndDrog,
  ChatForm,
  ChatInputMessage
} from './chatStyles'
import { v4 as uuid } from 'uuid'

function ChatInput({ sendMessage }) {
  const [message, setMessage] = useState('')
  const user = useRecoilValue(User)

  const handleMessage = ({ target }) => {
    setMessage(target.value)
  }

  const handleForm = (e) => {
    e.preventDefault()

    if (message) {
      const messageToSend = {
        author: { avatar: user.photo_url, username: user.username },
        content: message,
        id: uuid()
      }

      sendMessage(messageToSend)
    }

    setMessage('')
  }

  return (
    <ChatForm onSubmit={handleForm}>
      <ChatInputBox>
        <ChatInputDragAndDrog>
          <Add />
        </ChatInputDragAndDrog>

        <ChatInputMessage
          placeholder='Send message to'
          onChange={handleMessage}
          value={message}
        />

        <ChatInputControlsWrapper>
          <ChatInputControls>
            <Gif />
          </ChatInputControls>
          <ChatInputControls>
            <EmojiEmotions />
          </ChatInputControls>
          <ChatInputControls>
            <Send />
          </ChatInputControls>
        </ChatInputControlsWrapper>
      </ChatInputBox>
    </ChatForm>
  )
}

export default ChatInput
