import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDocumentTitle from 'react-document-title'

import PrivateRoute from './privateRoute'

import Home from '@/modules/HomeDemo/pages/home.jsx'
import Home1 from '@/modules/HomeDemo/pages/home1.jsx'
import Demo from '@/modules/TestDemo/pages/test.jsx'
import Demo1 from '@/modules/TestDemo/pages/test1.jsx'
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

const router = () => (
  <Router>
    <Switch>
      <Route path={'/test'} render={
        props => (
          <Demo {...props}>
            <Route exact path="/test/a">
              <Home></Home>
            </Route>
            <Route exact path="/test/b">
              <Home1></Home1>
            </Route>
        </Demo>
        )
      }>
      </Route>
      <Route exact path="/test1/:id" render={
        props => (
          <Demo1 />
        )
        }>
      </Route>
      <Route path="*" component={NotFound}/>
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
