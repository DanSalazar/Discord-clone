import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

export const animBounceTiny = keyframes`
  0% {
    transform: scale(1.1);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`

export const Label = styled.label`
  color: var(--text-primary-alt);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 8px 0;
`

export const Input = styled.input`
  width: 100%;
  margin: 12px 0;
  background: var(--background-secondary);
  color: var(--text-primary);
  border: 1px solid var(--background-color);
  padding: 12px;
  outline: 0;
  transition: var(--duration-transitions-tiny);

  &:focus {
    border: 1px solid var(--text-link);
  }
`

export const ErrorText = styled.p`
  color: var(--error-color);
  margin: 0;
  font-weight: 600;
  font-size: 14px;
  margin: 10px 0;
`

export const SpanInfo = styled.span`
  color: var(--text-secondary);
  font-size: 14px;
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: var(--text-link);
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
`
