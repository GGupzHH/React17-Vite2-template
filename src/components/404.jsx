import React from 'react'
import { useLocation, Redirect } from 'react-router-dom'

function NotFound (props) {
  const location = useLocation()

  console.log(props)
  console.log(location)

  // if (this.props.location.pathname === this.props.match.path) {
  //   return (
  //     <Redirect to=''/>
  //   )
  // }

  return (
    <div>
      NotFound
    </div>
  )
}
export default NotFound
