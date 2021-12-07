import React from 'react'
import { ButtonStyled } from './buttonStyles'

function Button(props) {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>
}

export default Button
