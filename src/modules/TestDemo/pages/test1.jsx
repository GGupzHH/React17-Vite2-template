
import React from 'react'
import { useLocation, Redirect, useParams } from 'react-router-dom'

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

class TestDemo1 extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   names: 123
    // }
  }
  render () {
    console.log(this.props)
    // console.log(this.props.children)

    return (
      <div>
        <Test />
      </div>
    )
  }
}

export default TestDemo1
