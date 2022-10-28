import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PrivateChannelsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
`

export const PrivateChannelNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const PrivateChannelName = styled.p`
  color: var(--text-channels);
  display: inline-block;
  margin: 0 10px;
  font-weight: 500;
  font-size: 1em;
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
  border-radius: var(--b-radius);
  ${(props) =>
    props.className.includes('channel-selected')
      ? `
      background-color: var(--channel-selected);
      .channel-username {
        color: var(--text-primary);
      }
    `
      : `
      :hover {
        background-color: var(--background-secondary-hover);
        .channel-username {
          color: var(--text-primary-alt);
        }
      }
    `}
`
