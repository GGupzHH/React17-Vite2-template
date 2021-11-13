
import React from 'react'
import { useLocation, useRouteMatch, Redirect } from 'react-router-dom'


function TestDemo (props) {
  const location = useLocation()
  const match = useRouteMatch()
  console.log(match)
  console.log(props)
  if (location.pathname === match.path) {
    return (
      <Redirect to='/test/a'/>
    )
  }

  return (
    <div>
      header 嵌套路由-父路由
      { props.children }
      footer
    </div>
  )
}

export default TestDemo
