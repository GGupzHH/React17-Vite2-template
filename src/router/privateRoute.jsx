import React from 'react'

import { Switch, Route, Redirect, useLocation } from 'react-router-dom'

// class PrivateRoute extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render () {
//     console.log(this.props)
//     return (
//       <Route exact path={this.props.path} component={this.props.component} />
//     )
//   }
// }

const PrivateRoute = function ({
  component: Component,
  childrenRouters,
  ...rest
}) {
  console.log(Component)
  console.log(childrenRouters)
  console.log(rest)
  // return (
  //   <Route
  //     exact
  //     path={ rest.path }
  //     render={ props => {
  //       return (
  //         <Component />
  //       )
  //     }}
  //   >
  //   </Route>
  // )
  return (
    <Route
      exact={true}
      path={rest.path}
      render={
        props => {
          return (
            <Component {...props} {...rest}>
              {/* {Array.isArray(childrenRouters) ? (
                <Switch>
                  {childrenRouters.map((route, idx) => (
                    <PrivateRoute {...route} key={idx} />
                  ))}
                </Switch>
              ) : null} */}
            </Component>
          )
        }
      }
    />
  )
}

export default PrivateRoute
