import React from 'react'

import { Switch, Route, Redirect, useLocation } from 'react-router-dom'

import ReactDocumentTitle from 'react-document-title'

import Home from '@/modules/HomeDemo/pages/home.jsx'
import Home1 from '@/modules/HomeDemo/pages/home1.jsx'
import Demo from '@/modules/TestDemo/pages/test.jsx'
import TestDemo1 from '@/modules/TestDemo/pages/test1.jsx'
import DemoParams from '@/modules/TestDemo/pages/test-params'

import NotFound from '@/components/404'

const routerMap = [

  {
    path: '/demo',
    name: 'demo',
    meta: {
      title: 'Demo'
    },
    component: Demo,
  },
]

const RouteNotFound = () => {
  console.log('🍉🍉🍉🍉🍉🍉🍉')
  return <Redirect to={Object.assign({}, location, { state: { notFoundError: true } }) }></Redirect>
}

const PrivateRoute = function ({
  component: Component,
  childrenRouters,
  ...rest
}) {
  console.log(Component)
  console.log(childrenRouters)
  console.log(rest)

  return (
    <Route render={(props) => {
          console.log(props)
          const notFoundError = props.location.state?.notFoundError
          return (
            notFoundError ?
            <NotFound/> :
            <Switch>
              <Route path={'/test'} render={
                props => (
                  <Demo {...props}>
                    <Switch>
                      <Route exact path="/test/a">
                        <Home {...props}></Home>
                      </Route>
                      <Route exact path="/test/b">
                        <Home1 {...props}></Home1>
                      </Route>
                      <RouteNotFound/>
                    </Switch>
                    {/* <Route path="*" component={NotFound}/> */}
                  </Demo>
                )
              }>
              </Route>
              <Route path={'/testparams'} render={
                props => {
                  return (
                    <TestDemo1>
                      <Switch>
                        <Route exact path='/testparams/home'>
                          <DemoParams/>
                        </Route>
                        <Route exact path='/testparams/:id'>
                          <DemoParams/>
                          123
                        </Route>
                      </Switch>
                    </TestDemo1>
                  )
                }
              }>
              </Route>
              <Route path="*" component={NotFound}/>
            </Switch>
          )
        }
      }>
        </Route>
  )
}

export default PrivateRoute
