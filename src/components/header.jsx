import React from "react"

class Headers extends React.Component {
  render () {
    return (
      <div>
        { this.props.names }
      </div>
    )
  }
}

export default Headers
