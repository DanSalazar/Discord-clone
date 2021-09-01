import styled from 'styled-components'

export const AvatarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    position: relative;
    height: 45px;
`

export const AvatarImg = styled.img`
    border-radius: 50%;
    object-fit: cover;
    width: 100%;
    height: 40px;
`

export const AvatarStatusUser = styled.div`
    background: var(--background-secondary);
    width: 10px;
    height: 10px;
    position: absolute;
    right: 5px;
    bottom: 5px;
    z-index: 10;
`
