import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'

function Test () {
  return (
    <div>
      123
    </div>
  )
}


function Home (props) {
  const l = useLocation()
  const h = useHistory()

  const handleClick = (event) => {
    console.log(event)
    h.push('/test/b', {
      queueMicrotask: 11
    })
  }

  return (
      <div>
        子路由a
        <p onClick={handleClick}>
          点击跳转
        </p>
        {
          [1, 2, 3].map((item, index) => {
            return <Test key={index}/>
          })
        }
        {props.children}
      </div>
    )
}

export default Home
