import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
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

const RouteNotFound = () => {
  console.log('🍉🍉🍉🍉🍉🍉🍉')
  return <Redirect to={Object.assign({}, location, { state: { notFoundError: true } }) }></Redirect>
}

const router = () => (
  <Router>
    <Route render={ props => {
      console.log(props)
      const notFoundError = props.location.state?.notFoundError
      return (
        notFoundError ? <NotFound/> : <Switch>
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

          <Route path="*" component={NotFound}/>
          {/* <Route exact path="/test1/:id" render={
            props => (
              <Demo1 />
            )
            }>
          </Route> */}
        </Switch>
      )
    }
  }>
    </Route>
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
