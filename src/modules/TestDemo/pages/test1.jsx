
import React from 'react'
import { useLocation, useParams, useRouteMatch, Redirect } from 'react-router-dom'

function Test (props) {
  return (
      <div>
        test1/test footer
      </div>
  )
}


function TestDemo1 (props) {
  const match = useRouteMatch()
  const location = useLocation()
  const params = useParams()
  console.log(location)
  // 这里拿不到子路由的params 是因为此时子路由还未渲染 所以拿到的是空的
  // 但是可以在子路由中拿到
  console.log(params)

  if (location.pathname === match.path) {
    return (
      <Redirect to='/testparams/home'/>
    )
  }
  return (
    <div>
      test1 header
      { props.children }
      <Test />
    </div>
  )
}

export default TestDemo1
