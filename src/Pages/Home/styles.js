import styled from 'styled-components'

export const AppLayoutLoggedIn = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: stretch;
`

export const ButtonSmall = styled.button`
    background: none;
    border: 0;
    outline: 0;
    cursor: pointer;
    color: ${props => props.color && 'var(--text-primary)'};
`