import { Redirect, Route } from 'react-router-dom'

function ProtectedRoute({ component, toHome, ...rest }) {
  const isLogin = window.localStorage.getItem('isLogin')

  if (!toHome && isLogin) return <Route component={component} {...rest} />

  if (isLogin && toHome) {
    return <Redirect to='/home' />
  }

  if (!isLogin && toHome) return <Route component={component} {...rest} />

  return <Redirect to='/login' />
}

export default ProtectedRoute