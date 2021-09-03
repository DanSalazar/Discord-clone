import React from 'react'
import { RegisterBox, FormRegister } from './styles'
import { AppLayoutLoggedOut, ButtonForm, InputForm, LabelForm, LinkStyled, SpanInfo } from '../Login/styles'


function Register () {
    return (
        <AppLayoutLoggedOut>
            <RegisterBox>
                <FormRegister>
                    <LabelForm> Username </LabelForm>
                    <InputForm />
                    <LabelForm> Password </LabelForm>
                    <InputForm type="password"/>
                    <LabelForm> Confirm Password </LabelForm>
                    <InputForm type="password"/>
                    <ButtonForm>
                        Register
                    </ButtonForm>
                    <SpanInfo> ¿You have an account? <LinkStyled to="/login">  Login </LinkStyled> </SpanInfo>
                </FormRegister>
            </RegisterBox>
        </AppLayoutLoggedOut>
    )
}

export default Register
