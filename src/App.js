import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/home/index.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/:channelId' component={Home} />
      </Switch>
    </Router>
  )
}

export default App
