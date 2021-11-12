import React from 'react'
import { useHistory } from 'react-router-dom'

function Test () {
  return (
    <div>
      123
    </div>
  )
}


function Home () {

  const handleClick = (event) => {
    console.log(event)
    console.log(this.props)
    this.props.history.push('/test/b', {
      queueMicrotask: 11
    })
  }

  return (
      <div>
        子路由a
        <p onClick={this.handleClick}>
          点击跳转
        </p>
        {
          [1, 2, 3].map((item, index) => {
            return <Test key={index}/>
          })
        }
        {/* {this.props.children} */}
      </div>
    )
}

export default Home
