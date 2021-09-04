import styled from 'styled-components'

export const ChatView = styled.div`
    width: 100%;
    padding: 0 0 1em 0;
    background: var(--background-tertiary);
    display: none;
    flex-direction: column;

    @media screen and (min-width: 1024px){
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

    @media screen and (min-width: 768px){
        height: 25px;
        width: 25px;
    }
    
    &:hover {
        color: var(--text-primary)
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

export const ChatHeaderButtonsWrapper = styled.div`
`

export const ChatHeaderInputBox = styled.div`
    position: relative;
    background: var(--background-color);
    border-radius: var(--b-radius);
    overflow: hidden;
    padding: 0 8px;
    margin: 0 6px;
    width: 180px;
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

export const ChatInputBox = styled.div`
    background: var(--chat-input-background);
    display: flex;
    width: 95%;
    margin: auto;
    height: 55px;
    padding: 6px;
    border-radius: var(--b-radius);
`

export const ChatInputMessage = styled.input`
    background: none;
    color: var(--text-primary);
    flex: 2 0 auto;
    outline: none;
    margin: 0 8px;
    font-size: 15px;
    height: 100%;
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
    width: 30px;
    outline: 0;

    svg {
        font-size: 18px;
    }
    
    &:hover {
        color: var(--text-secondary-hover);
    }

`

export const ChatInputControlsWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0 12px;
    justify-content: space-around;
    width: 120px;
    height: 100%;
`

export const ChatInputControls = styled.button`
    border: 0;
    background: none;
    color: var(--text-primary-alt);
    transition: var(--duration-transitions);
    outline: 0;
    cursor: pointer;
    width: 25px;
    height: 25px;
    
    &:hover {
        color: var(--text-primary)
    }
`
