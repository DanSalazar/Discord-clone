import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import ProtectedRoute from './Pages/ProtectedRoute'
import Register from './Pages/Register/Register'

function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute path='/home' component={Home} />
        <ProtectedRoute path='/login' component={Login} toHome={true}></ProtectedRoute>
        <ProtectedRoute path='/register' component={Register} toHome={true}></ProtectedRoute>
      </Switch>
    </Router>
  )
}

export default App
