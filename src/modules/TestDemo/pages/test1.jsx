
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function Test (props) {
  const location = useLocation()
  const params = useParams()
  console.log(location)
  console.log(params)
  return (
      <div>
        222
      </div>
  )
}


function TestDemo1 (props) {
  console.log(props)
  return (
    <div>
      123
      { props.children }
      <Test />
    </div>
  )
}

export default TestDemo1
