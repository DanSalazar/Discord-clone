import styled from 'styled-components'
import { animBounceTiny } from '../GlobalComponents/styles'

export const OptionViewWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--background-primary);
    display: flex;
    animation: 0.1s ${animBounceTiny} ease-in-out;
`

export const OptionViewModal = styled(OptionViewWrapper)`
    background: rgba(0, 0, 0, 0.6);
    display: grid;
    animation: 0.1s ${animBounceTiny} ease-in-out;
    place-items: center;
`

export const OptionViewSidebar = styled.div`
    width: 700px;
    height: 100%;
    background: var(--background-secondary);
    padding: 4em 0.5em;
    `

export const OptionViewSetting = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 4em 1em;
    background: var(--background-primary);
`

export const OptionViewQuit = styled.div`
    width: 550px;
    padding: 4em 1em;
    background: var(--background-primary);
`

export const OptionViewQuitButton = styled.button`
    border: 2px solid var(--text-secondary);
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 50%;
    margin: 5px 0;
    background: none;
    color: var(--text-secondary);
    
    svg {
        font-size: 1.5em;
    }
    
    &:hover {
        background: var(--background-secondary);
    }
    `

export const OptionViewQuitText = styled.span`
    font-size: 0.875em;
    color: var(--text-secondary);
    text-transform: uppercase;
    font-weight: 600;
    `

export const OptionBox = styled.section`
    background: var(--background-color);
    padding: 12px;
    border-radius: var(--b-radius);
    height: 350px;
    width: 80%;

    @media screen and (min-width: 768px){
        width: 100%;
    }
    `

export const OptionBoxChildren = styled.div`
    background: var(--background-tertiary);
    border-radius: var(--b-radius);
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const OptionEditBox = styled.div`
    width: 350px;
    overflow: hidden;
    height: 300px;
    position: relative;
    border-radius: var(--b-radius);
    background: var(--background-secondary);
`

export const OptionEditBoxButtonContainer = styled.div`
    background: var(--background-color);
    padding: 8px;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 60px;
`

export const OptionEditLabel = styled.p`
    color: var(--text-primary-alt);
    font-weight: 500;
    text-transform:uppercase;
    margin: 5px 0;
    font-size: 1em;
`

export const OptionUsername = styled.p`
    color: var(--text-primary);
    display: inline-block;
    font-size: 1em;
`

export const OptionUserTag = styled.span`
    color: var(--text-secondary);
    font-size: 0.875em;
`