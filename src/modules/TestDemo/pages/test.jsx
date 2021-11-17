
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useRouteMatch, Redirect } from 'react-router-dom'
import { setHomeInfo } from '@/store/actions'

function TestDemo (props) {
  const location = useLocation()
  const match = useRouteMatch()
  const dispatch = useDispatch()
  const home = useSelector(({ home }) => {
    return home
  })
  console.log(match)
  console.log(props)
  if (location.pathname === match.path) {
    return (
      <Redirect to='/test/a'/>
    )
  }

  const handleClick = async (event) => {
    const res = await dispatch(setHomeInfo('123'))
    console.log(res)
  }

  return (
    <div>
      header 嵌套路由-父路由
      <p onClick={handleClick}>
        dispatch 异步 home-type{ home.homeInfo.type }
      </p>
      { props.children }
      footer
    </div>
  )
}

export default TestDemo
