import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'

function App () {
  return (
      <Router>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
        </Switch>
      </Router>
  );
}

export default App;
