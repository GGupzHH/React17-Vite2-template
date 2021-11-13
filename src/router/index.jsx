import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ReactDocumentTitle from 'react-document-title'

import PrivateRoute from './privateRoute'

const RouteNotFound = () => {
  console.log('🍉🍉🍉🍉🍉🍉🍉')
  return <Redirect to={Object.assign({}, location, { state: { notFoundError: true } }) }></Redirect>
}

function sleep (time = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({})
    }, time)
  })
}

const LazyComponent = React.lazy(async () => {
  // 异步操作 验证token 跳转
  await sleep(1000)

  if (false) {
    return import('@/components/404')
  } else {
    return import('./privateRoute')
  }
})

const router = () => (
  <Router>
    <React.Suspense fallback={<div>loading...</div>}>
      <LazyComponent/>
    </React.Suspense>
  </Router>
)

export default router
