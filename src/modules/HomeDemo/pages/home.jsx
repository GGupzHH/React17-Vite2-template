import React from 'react'


class Test extends React.Component {
  render () {
    return (
      <div>
        123
      </div>
    )
  }
}
class Home extends React.Component {


  render () {
    return (
      <div>
        {
          [1, 2, 3].map((item, index) => {
            return <Test key={index}/>
          })
        }
      </div>
    )
  }
}

export default Home
