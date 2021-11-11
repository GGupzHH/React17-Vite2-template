
import React from 'react'
import { useLocation, Redirect } from 'react-router-dom'

class TestDemo extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   names: 123
    // }
  }
  render () {
    console.log(this.props)
    // console.log(this.props.children)
    // console.log()
    // if (this.props.location.pathname === this.props.match.path) {
    //   return (
    //     <Redirect to='/test/a'/>
    //   )
    // }

    return (
      <div>
        header
        { this.props.children }
        footer
      </div>
    )
  }
}

export default TestDemo
