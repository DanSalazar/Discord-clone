import styled from 'styled-components'

export const PrivateChannelsTitle = styled.p`
    color: var(--text-channels);
    margin: 5px 0;
    font-size: 1em;
    font-weight: 600;
`

export const PrivateChannelsWrapper = styled.div`
    margin: 30px 0;
    height: 100px;
    display: grid;
    grid-template-columns: repeat(1, fr);
    place-items: flex-start;
    gap: 10px 0;
`