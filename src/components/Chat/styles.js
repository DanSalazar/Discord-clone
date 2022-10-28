import styled from 'styled-components'

export const ChatView = styled.div`
  width: 100%;
  padding: 0 0 1em 0;
  background: var(--background-primary);
  display: none;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`

export const ChatButtons = styled.button`
  border: 0;
  background: none;
  color: var(--text-primary-alt);
  transition: var(--duration-transitions);
  outline: 0;
  margin: 0 12px 0 0;
  cursor: pointer;
  height: 12px;
  width: 12px;

  @media screen and (min-width: 768px) {
    height: 25px;
    width: 25px;
  }

  &:hover {
    color: var(--text-primary);
  }
`
export const ChatHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
  width: 100%;
  height: 60px;
  background: var(--background-primary);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

export const ChatHeaderChannelName = styled.p`
  font-size: 1em;
  color: var(--text-primary);
  font-weight: 500;
  margin: 0 5px;
`

export const ChatHeaderToolbar = styled.div`
  display: flex;
`

export const ChatHeaderButtonsWrapper = styled.div``

export const ChatHeaderInputBox = styled.div`
  position: relative;
  background: var(--background-color);
  border-radius: var(--b-radius);
  overflow: hidden;
  padding: 0 8px;
  margin: 0 6px;
  width: 150px;
  height: 25px;
`

export const ChatHeaderInputIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  right: 5px;
  top: 0;

  svg {
    color: var(--text-secondary);
    font-size: 18px;
  }
`

export const ChatHeaderInput = styled.input`
  background: none;
  width: 90%;
  height: 100%;
  border: 0;
  outline: none;
  color: var(--text-primary);

  &::placeholder {
    color: var(--text-secondary);
  }
`

export const ChatForm = styled.form`
  padding: 0 16px;
`

export const ChatInputBox = styled.div`
  background: var(--chat-input-background);
  display: flex;
  align-items: center;
  height: auto;
  margin: auto;
  padding: 12px;
  border-radius: var(--b-radius);
`

export const ChatInputMessage = styled.input`
  background: none;
  color: var(--text-primary);
  flex: 1 0 auto;
  outline: none;
  margin: 0 8px;
  font-size: 15px;
  border: 0;

  &::placeholder {
    color: var(--text-secondary);
  }
`
export const ChatInputDragAndDrog = styled.button`
  background: var(--chat-input-background);
  cursor: pointer;
  color: var(--text-primary-alt);
  border: 0;
  outline: 0;

  svg {
    font-size: 1.5em;
  }

  &:hover {
    color: var(--text-secondary-hover);
  }
`

export const ChatInputControlsWrapper = styled.div`
  display: flex;
  padding: 0 12px;
  justify-content: space-around;
  width: 120px;
`

export const ChatInputControls = styled.button`
  border: 0;
  background: none;
  color: var(--text-primary-alt);
  outline: 0;
  cursor: pointer;

  svg {
    font-size: 2em;
  }

  &:hover {
    color: var(--text-primary);
  }
`

// Chat box styles

export const ChatBoxWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 0 16px;

  ::-webkit-scrollbar {
    width: 0.45em;
  }

  ::-webkit-scrollbar-track {
    background: var(--scrollbar-color-track);
    border-radius: 9999px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--scrollbar-color-thumb);
    border-radius: 9999px;
  }
`

export const ChatMessageWrapper = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 8px;
`

export const ChatChannelNameAndTimeWrapper = styled.div``

export const ChatChannelName = styled.p`
  font-weight: 500;
  display: inline-block;
  font-size: 1em;
  margin: 0;
  color: var(--text-primary);
`

export const ChatChannelTimestamp = styled.time`
  color: var(--text-secondary);
  font-size: 0.7em;
  margin: 0 6px;
`

export const ChatChannelMessage = styled.div`
  color: var(--text-message);
  margin: 0;
  word-break: break-all;
  font-size: 1em;
`
