import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import ProtectedRoute from './Pages/ProtectedRoute'
import Register from './Pages/Register/Register'
import UserProvider from './Store/store'

function App () {
  return (
      <Router>
        <Switch>
          <UserProvider>
            <ProtectedRoute path='/home' component={Home} />
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
          </UserProvider>
        </Switch>
      </Router>
  );
}

export default App;
