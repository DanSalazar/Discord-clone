import styled from 'styled-components'


export const PrivateChannelsWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 6px;
    cursor: pointer;
    width: 100%;
    border-radius: var(--b-radius);
    
    &:hover {
        background: var(--background-primary-hover);
    }
`

export const PrivateChannelNameWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    svg {
        font-size: 14px;
        color: var(--text-secondary);
    }

`

export const PrivateChannelName = styled.p`
    color: var(--text-channels);
    display: inline-block;
    margin: 0 10px;
    font-weight: 500;
    font-size: 0.875em;
`