import React from 'react'
import { ButtonStyled } from './buttonStyles'

function Button ({ children, color, size }) {
    return (
        <ButtonStyled color={color} size={size}>
            { children }
        </ButtonStyled>
    )
}

export default Button
