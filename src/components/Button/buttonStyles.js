import styled from 'styled-components'

const COLOR_BUTTON = {
    primary: 'var(--primary-color)',
    secondary: 'var(--secondary-color)',
}

const SIZE_BUTTON = {
    small: '16px',
    all: '100%'
}

export const ButtonStyled = styled.button`
    color: var(--text-primary);
    background: ${props => COLOR_BUTTON[props.color]};
    padding: 10px;
    font-weight: 500;
    border: 0;
    width: ${props => SIZE_BUTTON[props.size]};
    margin: 10px 0;
    cursor: pointer;
    transition: var(--duration-transitions);

    &:hover {
        background: var(--primary-color-hover);
    }
`
