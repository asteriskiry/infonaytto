import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { version } from '../package.json'
import './styles/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// :D
console.log(
  '%c ▜▘   ▗▀▖      ▝▝    ▐  ▐  ▝▝  \n' +
    ' ▐ ▛▀▖▐  ▞▀▖▛▀▖▝▀▖▌ ▌▜▀ ▜▀ ▞▀▖ \n' +
    ' ▐ ▌ ▌▜▀ ▌ ▌▌ ▌▞▀▌▚▄▌▐ ▖▐ ▖▌ ▌ \n' +
    ' ▀▘▘ ▘▐  ▝▀ ▘ ▘▝▀▘▗▄▘ ▀  ▀ ▝▀  \n' +
    '%c ═════════════════════════════ \n' +
    '%c           v. ' +
    version +
    '                  ',
  'background: #000b1e; color: #d300c4; font-size: 20px; text-shadow: 3px 3px 10px #711c91;',
  'background: #000b1e; color: #1afe49; font-size: 20px; text-shadow: 1px 1px 3px #00ff9f;',
  'background: #000b1e; color: #d300c4; font-size: 17px; text-shadow: 1px 1px 3px #711c91;'
)
