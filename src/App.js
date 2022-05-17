import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import ChannelPage from './Pages/channel'
import ProtectedRoute from './Pages/ProtectedRoute'
import Register from './Pages/Register/Register'

function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute 
          path='/home'
          exact 
          component={Home}/>
        <ProtectedRoute
          path='/home/:id'
          component={ChannelPage} />
        <ProtectedRoute
          path='/login'
          component={Login}
          toHome={true} />
        <ProtectedRoute
          path='/register'
          component={Register}
          toHome={true} /> 
      </Switch>
    </Router>
  )
}

export default App
