import styled from 'styled-components'

export const AvatarImg = styled.img`
  border-radius: 9999px;
  object-fit: cover;
  width: ${(props) => props.width || '32px'};
  height: ${(props) => props.height || '32px'}; ;
`
