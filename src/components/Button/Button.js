import { ButtonStyled } from './styles'

function Button(props) {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>
}

export default Button
