import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/home'
import ChannelPage from './Pages/channel'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path=':channelid' component={ChannelPage} />
      </Switch>
    </Router>
  )
}

export default App
