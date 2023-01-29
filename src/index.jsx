import React from 'react'
import { RecoilRoot } from 'recoil'
import ReactDOM from 'react-dom'
import App from './App'
import './global.css'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
