import styled from 'styled-components'

export const AvatarWrapper = styled.div`
    border-radius: 50%;
    display: inline-block;
    width:35px;
    height: 35px;
    position: relative;
`

export const AvatarImg = styled.img`
    border-radius: 50%;
    width: 100%;
    height: auto;
`

export const AvatarStatusUser = styled.div`
    background: var(--navigation-color-channel);
    border: 4px solid var(--background-secondary-alt);
    border-radius: 50%;
    width: 18px;
    height: 18px;
    position: absolute;
    right: 0px;
    bottom: -4px;
    z-index: 10;
`