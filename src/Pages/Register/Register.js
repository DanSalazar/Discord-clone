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
import Background from '../../components/Background'

function Register() {
  const usernameField = useField({ type: 'text', name: 'username' })
  const [errors, setErrors] = useState({ error: false, message: '' })
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (usernameField.value === '') {
      setErrors({ error: true, message: 'Complete the field' })
      return
    }
    setErrors({ error: false, message: '' })

    const { value: username } = usernameField

    window.localStorage.setItem(
      'user',
      username
    )

    history.push('/login')
  }

  return (
    <>
      <Background/>
      <AppLayoutLoggedOut>
        <RegisterBox>
          <FormRegister onSubmit={handleSubmit}>
            <Label> Username </Label>
            <Input {...usernameField} />
            {errors && <ErrorText> {errors.message} </ErrorText>}
            <Button color='primary' size='all'>
              Register
            </Button>
            <SpanInfo>
              ¿You have an account? <LinkStyled to='/login'><strong>Login</strong></LinkStyled>
            </SpanInfo>
          </FormRegister>
        </RegisterBox>
      </AppLayoutLoggedOut>
    </>
  )
}

export default Register
