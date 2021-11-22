import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import PrivateRoute from '@/router/privateRoute'

const router = () => (
  <Router>
    <PrivateRoute/>
  </Router>
)

export default router
