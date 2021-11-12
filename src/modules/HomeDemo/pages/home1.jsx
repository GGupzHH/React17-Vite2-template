import React from 'react'

class Home1 extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    console.log(this.props)
    return (
      <div>
        子路由2 b
        Home1
      </div>
    )
  }
}

export default Home1
