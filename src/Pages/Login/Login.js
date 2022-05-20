import { useState } from 'react'
import { useRecoilState } from 'recoil'
import UserAtom from '../../recoil/user'
import { useHistory } from 'react-router-dom'
import {
  Input,
  Label,
  LinkStyled,
  ErrorText,
  SpanInfo
} from '../../components/GlobalComponents/styles'
import { AppLayoutLoggedOut, FormLogin, LoginBox } from './styles'
import useField from '../../hooks/useField'
import Button from '../../components/Button/Button'
import Background from '../../components/Background'
import SpinnerButton from '../../components/GlobalComponents/SpinnerButton'

function Login() {
  const usernameField = useField({ type: 'text', name: 'username' })
  const [user, setUser] = useRecoilState(UserAtom)
  const [errors, setErrors] = useState({ error: false, message: '' })
  const [isLoading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const currentUser = window.localStorage.getItem('user') || false
    if (!usernameField.value) setErrors({ error: true, message: 'Complete all the fields' })
    else if (usernameField.value !== currentUser) setErrors({ error: true, message: 'User not found' })
    else {
      setUser({
        ...user,
        username: currentUser
      })
      window.localStorage.setItem('isLogin', 'true')
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        history.push('/home')
      }, 2000)
    }
  }

  return (
    <>
      <Background/>
      <AppLayoutLoggedOut>
        <LoginBox>
         <FormLogin onSubmit={handleSubmit}>
           <Label> Username </Label>
           <Input {...usernameField} />
           {errors && <ErrorText> {errors.message} </ErrorText>}
           <Button color='primary' size='all' addStyles='min-height: 40px;' >
             {isLoading ? <SpinnerButton /> : 'Login'}
          </Button>
           <SpanInfo>
             ¿You need an account?
             <LinkStyled to='/register'><strong>Register</strong></LinkStyled>
           </SpanInfo>
         </FormLogin>
        </LoginBox>
      </AppLayoutLoggedOut>
    </>
  )
}

export default Login
