import { useState } from 'react'
import React from 'react'
import logo from 'assets/logo.svg'
import './App.scss'
// import React from 'react'

import Headers from './components/header'

function App(props) {

  return (
    <div className="App">
      {props.children}
    </div>
  )
}

export default App
