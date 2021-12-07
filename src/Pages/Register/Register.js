import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useField from '../../hooks/useField'
import Button from '../../components/Button/Button'
import { RegisterBox, FormRegister } from './styles'
import {
  Input,
  Label,
  LinkStyled,
  ErrorText,
  SpanInfo
} from '../../components/GlobalComponents/styles'
import { AppLayoutLoggedOut } from '../Login/styles'

function Register() {
  const usernameField = useField({ type: 'text', name: 'username' })
  const passwordField = useField({ type: 'password', name: 'password' })
  const confirmPasswordField = useField({
    type: 'password',
    name: 'confirmPassword'
  })
  const [errors, setErrors] = useState({ error: false, message: '' })
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (passwordField.value !== confirmPasswordField.value) {
      setErrors({ error: true, message: 'Password do not match' })
    } else if (
      usernameField.value === '' ||
      passwordField.value === '' ||
      confirmPasswordField.value === ''
    ) {
      setErrors({ error: true, message: 'Complete all the fields' })
    } else {
      setErrors({ error: false, message: '' })
      const { value: username } = usernameField
      const { value: password } = passwordField
      window.localStorage.setItem(
        'user',
        JSON.stringify({ username, password })
      )

      setTimeout(() => {
        history.push('/login')
      }, 2000)
    }
  }

  return (
    <AppLayoutLoggedOut>
      <RegisterBox>
        <FormRegister onSubmit={handleSubmit}>
          <Label> Username </Label>
          <Input {...usernameField} />
          <Label> Password </Label>
          <Input {...passwordField} />
          <Label> Confirm Password </Label>
          <Input {...confirmPasswordField} />

          {errors && <ErrorText> {errors.message} </ErrorText>}

          <Button color='primary' size='all'>
            {' '}
            Register{' '}
          </Button>
          <SpanInfo>
            ¿You have an account? <LinkStyled to='/login'> Login </LinkStyled>
          </SpanInfo>
        </FormRegister>
      </RegisterBox>
    </AppLayoutLoggedOut>
  )
}

export default Register
