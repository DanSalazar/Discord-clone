import styled from 'styled-components'

export const ChatView = styled.div`
    width: 100%;
    background: var(--background-tertiary);
`

export const ChatHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    background: var(--background-primary);
    border-bottom: 1px solid var(--background-secondary);
`

export const ChatInputMessage = styled.input`
    background: var(--chat-input-background);
    border-radius: var(--b-radius);
    color: var(--text-secondary);
    width: 90%;
    display: block;
    margin: auto;
    padding: 0.875em;
    border: 0;
`
