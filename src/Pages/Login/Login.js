import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Input, Label, LinkStyled, ErrorText, SpanInfo } from '../../components/GlobalComponents/styles'
import { AppLayoutLoggedOut, FormLogin, LoginBox } from './styles'
import useField from '../../hooks/useField'
import Button from '../../components/Button/Button'
import { UserAuth } from '../../Store/store'

function Login () {
    const usernameField = useField({ type: 'text', name: 'username' })
    const passwordField = useField({ type: 'password', name: 'password' })
    const [errors, setErrors] = useState({ error: false, message: '' })
    const { setLogin }  = useContext(UserAuth)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const { username, password } = JSON.parse(localStorage.getItem('user')) || false

        if (usernameField.value === '' || passwordField.value === '') setErrors({ error: true, message: 'Complete all the fields' })
        else if (usernameField.value !== username) setErrors({ error: true, message: 'User not found' })
        else if (passwordField.value !== password) setErrors({ error: true, message: 'Password not valid' })
        else {
            setLogin(true)
            localStorage.setItem('token', 'u5-42-86-d3')
            setTimeout(() => {
                history.push('/home')
            }, 2500)
        }
    }

    return (
        <AppLayoutLoggedOut> 
            <LoginBox>
                <FormLogin onSubmit={handleSubmit}>
                    <Label> Username </Label>
                    <Input {...usernameField} />
                    <Label> Password </Label>
                    <Input {...passwordField} />

                    {errors && <ErrorText> {errors.message} </ErrorText>}

                    <Button color='primary' size='all'> Login </Button>
                    <SpanInfo> 
                        ¿You need an account? <LinkStyled to='/register'>  Register </LinkStyled> 
                    </SpanInfo>
                </FormLogin>
            </LoginBox>
        </AppLayoutLoggedOut>
    )
}

export default Login
