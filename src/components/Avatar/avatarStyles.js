import styled from 'styled-components'

const USER_STATUS = {
  connected: 'var(--user-status-connected)',
  absent: 'var(--user-status-absent)',
  busy: 'var(--user-status-busy)'
}

const BACKGROUND_MASK = {
  primary: 'var(--background-primary)',
  secondary: 'var(--background-secondary)',
  secondaryAlt: 'var(--background-secondary-alt)',
  tertiary: 'var(--background-tertiary)'
}

export const AvatarContainer = styled.div`
  height: 36px;
  width: 36px;
  margin-right: 6px;
  background: ${(props) => BACKGROUND_MASK[props.background]};
  position: relative;
  border-radius: 9999px;
`

export const AvatarStatus = styled.div`
  width: 16px;
  background: ${(props) => BACKGROUND_MASK[props.background]};
  height: 16px;
  border-radius: 9999px;
  position: absolute;
  display: grid;
  place-items: center;
  right: -1.5px;
  bottom: -2px;
`

export const AvatarStatusMask = styled.div`
  background: ${(props) => USER_STATUS[props.status]};
  width: 10px;
  height: 10px;
  border-radius: 9999px;
`

export const AvatarImg = styled.img`
  border-radius: 9999px;
  width: ${(props) => props.width || '35px'};
  height: ${(props) => props.height || '35px'}; ;
`
