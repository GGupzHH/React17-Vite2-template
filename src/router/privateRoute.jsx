import React from 'react'

import { Switch, Route, Redirect, useLocation } from 'react-router-dom'

import ReactDocumentTitle from 'react-document-title'

import App from '@/App'

import NotFound from '@/components/404'

import routerMap from '@/router/routerMap.js'

import Login from '@/modules/UserAccount/pages/login'

const RouteNotFound = () => {
  console.log('🍉🍉🍉🍉🍉🍉🍉')
  return <Redirect to={Object.assign({}, location, { state: { notFoundError: true } }) }></Redirect>
}

const recursiveRouters = routeList => (
  Array.isArray(routeList) &&
  routeList.map((routeItem, index) => (
    <Route path={routeItem.path} key={index} exact={routeItem.exact} render={
      props => (
        <ReactDocumentTitle title={routeItem.meta.title}>
          <routeItem.component>
            {
              (routeItem.child || '')
              && <Switch>
                  {
                    recursiveRouters(routeItem.child)
                  }
                  <RouteNotFound />
                </Switch>
            }
          </routeItem.component>
        </ReactDocumentTitle>
      )
    }>
    </Route>
  ))
)


const PrivateRoute = function ({
  component: Component,
  childrenRouters,
  ...rest
}) {

  return (
    <Route render={(props) => {
          console.log(props)
          const notFoundError = props.location.state?.notFoundError
          // const token = false
          return (
            // token
            // ?
            <App>
              {
                notFoundError ?
                <ReactDocumentTitle title='not found'>
                  <NotFound/>
                </ReactDocumentTitle> :
                <Switch>
                  {
                    recursiveRouters(routerMap)
                  }
                  <Route path="*" component={NotFound}/>
                </Switch>
              }
            </App>
            // : <Login/>
          )
        }
      }>
    </Route>
  )
}

export default PrivateRoute
