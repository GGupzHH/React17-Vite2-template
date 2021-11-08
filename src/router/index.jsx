import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '@/modules/HomeDemo/pages/home.jsx'
import Demo from '@/modules/TestDemo/pages/test.jsx'

const router = () => (
      // {/* <Route exact path="/demo" component={Demo}/> */}
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/test" component={Demo}/>
    </Switch>
  </Router>
)

export default router
