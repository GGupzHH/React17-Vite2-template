import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDocumentTitle from 'react-document-title'

import Home from '@/modules/HomeDemo/pages/home.jsx'
import Demo from '@/modules/TestDemo/pages/test.jsx'

const routerMap = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Home'
    },
    component: Home,
  },
  {
    path: '/demo',
    name: 'demo',
    meta: {
      title: 'Demo'
    },
    component: Demo,
  }
]

// const after

const router = () => (
  <Router>
    <Switch>
      {
        routerMap.map((routerItem, idx) => (
          <Route
            exact
            key={idx}
            path={routerItem.path}
            render={
              props => (
                <ReactDocumentTitle title={routerItem.meta.title}>
                  <routerItem.component />
                </ReactDocumentTitle>
              )
            }
          />
        ))
      }
    </Switch>
  </Router>
)

export default router
