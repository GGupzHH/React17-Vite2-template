import React from 'react'
import './App.scss'

import { useLocation, Redirect, useHistory } from 'react-router-dom'

function App(props) {
  const l = useLocation()
  const h = useHistory()
  const token = false

  console.log(l, h)
  if (!token && l.pathname !== '/login') {
    h.replace('/login')
  }

  if (token && l.pathname === '/login') {
    h.replace('/test')
  }

  return (
    <div className="App">
      {props.children}
    </div>
  )
}

export default App
