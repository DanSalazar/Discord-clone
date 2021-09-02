import styled from 'styled-components'

export const AvatarWrapper = styled.div`
    border-radius: 50%;
    display: inline-block;
    width: ${props => props.width ? props.width : '35px'};
    height: ${props => props.height ? props.width : '35px'};
    position: relative;
`

export const AvatarImg = styled.img`
    border-radius: 50%;
    width: 100%;
    height: auto;
`

export const AvatarStatusUser = styled.div`
    background: var(--navigation-color-channel);
    border: 4px solid ${props => props.colorBg === 'gray'
    ? 'var(--background-secondary)'
    : 'var(--background-secondary-alt)'};;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    position: absolute;
    right: 0px;
    bottom: -4px;
    z-index: 10;
`
