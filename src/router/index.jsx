import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDocumentTitle from 'react-document-title'

import PrivateRoute from './privateRoute'

import Home from '@/modules/HomeDemo/pages/home.jsx'
import Home1 from '@/modules/HomeDemo/pages/home1.jsx'
import Demo from '@/modules/TestDemo/pages/test.jsx'

const routerMap = [

  {
    path: '/demo',
    name: 'demo',
    meta: {
      title: 'Demo'
    },
    component: Demo,
    childrenRouters: [
      {
        path: '/demo/home1',
    name: 'home1',
    meta: {
      title: 'Home1'
    },
    component: Home1,
      }
    ]
  },
  // {
  //   path: '/home1',
  //   name: 'home1',
  //   meta: {
  //     title: 'Home1'
  //   },
  //   component: Home1,
  // },
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Home'
    },
    component: Home,
    childrenRouters: [
      {
        path: '/home1',
    name: 'home1',
    meta: {
      title: 'Home1'
    },
    component: Home1,
      }
    ]
  },
]

const router = () => (
  <Router>
    <Switch>
      {
        routerMap.map((routerItem, index) => {
          console.log(routerItem)
          return <PrivateRoute { ...routerItem } key={ index }/>
        })
      }
    </Switch>
  </Router>
)

// <Route
          //   exact
          //   key={index}
          //   path={routerItem.path}
          //   render={
          //     props => {
          //       console.log(routerItem)
          //       return (
          //         <ReactDocumentTitle title={routerItem.meta.title}>
          //           <routerItem.component />
          //         </ReactDocumentTitle>
          //       )
          //     }
          //   }
          // />
// {<Route
//   exact
//   key={idx}
//   path={routerItem.path}
//   render={
//     props => (
//       <ReactDocumentTitle title={routerItem.meta.title}>
//         <routerItem.component />
//       </ReactDocumentTitle>
//     )
//   }
// />}


export default router
