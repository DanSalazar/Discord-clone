import React from 'react'
import { AppLayoutLoggedOut, ButtonForm, FormLogin, InputForm, LabelForm, LinkStyled, LoginBox, RegisterBox, SpanInfo } from './styles'

function Login () {
    return (
        <AppLayoutLoggedOut> 
            <LoginBox>
                <FormLogin>
                    <LabelForm> 
                        Username 
                    </LabelForm>
                    <InputForm type="text" required />
                    <LabelForm> 
                        Password 
                    </LabelForm>
                    <InputForm type="password" required />
                    <ButtonForm>
                        Login
                    </ButtonForm>
                    <SpanInfo> ¿You need an account? <LinkStyled to="/register">  Register </LinkStyled> </SpanInfo>
                </FormLogin>
            </LoginBox>
        </AppLayoutLoggedOut>
    )
}

export default Login
