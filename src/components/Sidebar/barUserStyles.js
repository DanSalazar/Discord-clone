import styled from 'styled-components'

export const UserSidebar = styled.div`
    background: var(--background-secondary-alt);
    width: 100%;
    padding: 0.5em;
    height: 60px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const UserSidebarControlsWrapper = styled.div`
`

export const UserSidebarControls = styled.button`
    color: var(--text-secondary);
    display: inline-block;
    border: 0;
    background: 0;
    cursor: pointer;
    border-radius: var(--b-radius);
    transition: var(--duration-transitions);

    svg {
        font-size: 22px;
    }

    &:hover {
        background: var(--background-primary-hover);
    }
    

`