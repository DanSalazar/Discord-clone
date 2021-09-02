import styled from 'styled-components'

export const SidebarWrapper = styled.div`
    background: var(--background-secondary);
    position: relative;
    width: 300px;
`

export const SidebarHeader = styled.div`
    height: 60px;
    display: grid;
    place-items: center;
    width: 100%;
`

export const SidebarSearchBar = styled.input`
    background: var(--background-color);
    color: var(--text-secondary);
    display: block;
    margin: auto;
    border: 0;
    width: 90%;
    padding: 6px;
    border-radius: var(--b-radius);
`

export const SidebarOptions = styled.div`
    height: 80px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`

export const SidebarOptionsButtons = styled.button`
    border: 0;
    outline: none;
    width: 100%;
    padding: 8px 0;
    cursor: pointer;
    font-weight: 600;
    font-size: 1em;
    color: var(--text-channels);
    background: none;

    &:hover {
        background: var(--background-color);
    }
`