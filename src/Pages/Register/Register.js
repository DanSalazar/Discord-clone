import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useField from '../../hooks/useField'
import { RegisterBox, FormRegister } from './styles'
import { AppLayoutLoggedOut, ButtonForm, ErrorText, InputForm, LabelForm, LinkStyled, SpanInfo } from '../Login/styles'

function Register () {
    const usernameField = useField({ type: 'text', name: 'username' })
    const passwordField = useField({ type: 'password', name: 'password' })
    const confirmPasswordField = useField({ type: 'password', name: 'confirmPassword' })
    const [errors, setErrors] = useState({ error: false, message: ''})
    const history = useHistory()
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if (passwordField.value !== confirmPasswordField.value) {
            setErrors({ error: true, message: 'Password do not match' })
        } else if (usernameField.value === '' || passwordField.value === '' || confirmPasswordField.value === '') {
            setErrors({ error: true, message: 'Complete all the fields' })
        } else {
            setErrors({ error: false, message: '' })
            const { value: username } = usernameField
            const { value: password } = passwordField
            localStorage.setItem('user', JSON.stringify({ username, password }))

            setTimeout(() => {
                history.push('/login')
            }, 2000)
        }
    }

    return (
        <AppLayoutLoggedOut>
            <RegisterBox>
                <FormRegister onSubmit={handleSubmit}> 
                    <LabelForm> Username </LabelForm>
                    <InputForm {...usernameField} />
                    <LabelForm> Password </LabelForm>
                    <InputForm type='password' {...passwordField} />
                    <LabelForm> Confirm Password </LabelForm>
                    <InputForm type='password' {...confirmPasswordField} />
                   
                    {errors && <ErrorText> {errors.message} </ErrorText>}
                    
                    <ButtonForm> Register </ButtonForm>
                    <SpanInfo> 
                        ¿You have an account? <LinkStyled to='/login'> Login </LinkStyled> 
                    </SpanInfo>
                </FormRegister>
            </RegisterBox>
        </AppLayoutLoggedOut>
    )
}

export default Register
