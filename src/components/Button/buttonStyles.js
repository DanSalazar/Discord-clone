import styled from 'styled-components'

const COLOR_BUTTON = {
  primary: 'var(--primary-color)',
  secondary: 'var(--secondary-color)',
  transparent: 'none'
}

const COLOR_HOVER = {
  primary: 'var(--primary-color-hover)',
  secondary: 'var(--secondary-color-hover)',
  transparent: 'rgba(255, 255, 255, 0.05)'
}

const SIZE_BUTTON = {
  small: '85px',
  all: '100%'
}

export const ButtonStyled = styled.button`
  color: var(--text-primary);
  background: ${(props) => COLOR_BUTTON[props.color]};
  padding: 10px;
  font-weight: 500;
  margin: ${(props) => props.margin};
  border: 0;
  width: ${(props) => SIZE_BUTTON[props.size]};
  transition: var(--duration-transitions);

  &:hover {
    background: ${(props) => COLOR_HOVER[props.color]};
  }
`
