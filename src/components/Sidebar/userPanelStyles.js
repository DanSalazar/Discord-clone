import styled from 'styled-components'

export const UserSidebar = styled.section`
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

export const UserSidebarStatus = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`

export const UserSidebarInfo = styled.div`
    display: inline-flex;
    overflow: hidden;
    flex-direction: column;
    max-width: 80px;
    margin: 0 5px;
    align-items: flex-start;
`

export const UserSidebarUsername = styled.p`
    color: var(--text-primary);
    font-weight: 600;
    font-size: 0.875em;
    margin: 0;
`

export const UserSidebarId = styled.span`
    color: var(--text-secondary);
    margin: 0;
    font-size: 0.75em;
`

export const UserSidebarControlsWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const UserSidebarControls = styled.button`
    color: var(--text-secondary);
    display: inline-block;
    border: 0;
    background: 0;
    cursor: pointer;
    padding: 4px;
    border-radius: var(--b-radius);
    transition: var(--duration-transitions);

    svg {
        font-size: 20px;
    }

    &:hover {
        background: var(--background-primary-hover);
    }
    

`