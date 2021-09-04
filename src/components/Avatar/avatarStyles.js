import styled from 'styled-components'

export const AvatarImg = styled.img`
    border-radius: 50%;
    width: ${props => props.width ? props.width : '35px'};;
    height: ${props => props.height ? props.width : '35px'};;
`
