import React from 'react'
import './App.scss'

import { useLocation, Redirect, useHistory } from 'react-router-dom'


import NotFound from '@/components/404'

function App(props) {
  const l = useLocation()
  const h = useHistory()
  console.log(l)
  console.log(h)
  console.log(props)
  // 去校验是否存在token
  const token = false

  if (!token) {
    h.replace('/login')
    return (
      <>
        {props.children}
      </>
    )
  }
  return (
    // token
    // ?
    <div className="App">
      {props.children}
    </div>
    // : <Redirect to='/login'>
    //   {props.children}
    //   </Redirect>
  )
}

export default App
