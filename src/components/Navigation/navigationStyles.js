import styled from 'styled-components'

export const NavigationWrapper = styled.div`
    background: transparent;
    width: 80px;
    position: fixed;
    height: 100%;
    left: 0;
    top: 0;
`

export const NavigationTree = styled.div`
    margin: 0.5em 0;
    display: grid;
    grid-template-columns: repeat(1, fr);
    gap: 8px;
    place-items: center;
`

export const NavigationChannel = styled.button`
    background: var(--background-secondary);
    color: var(--navigation-color-channel);
    border-radius: 50%;
    width: 52px;
    height: 52px;
    border: 0;
    outline: 0;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
        background: var(--navigation-color-channel);
        color: var(--text-primary);
        border-radius: 16px;
    }
`



