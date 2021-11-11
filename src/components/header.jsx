import React from 'react'
class Headers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      names: 123
    }
  }
  render () {
    console.log(this.props)
    return (
      <div onClick={() => {
        this.props.handleNumbers()
      } }>
        { this.props.names }
      </div>
    )
  }
}

export default Headers
