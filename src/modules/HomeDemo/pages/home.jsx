import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import { Button } from 'antd'

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
  console.log(props)
  const handleClick = (event) => {
    console.log(event)
    h.push('/test/b', {
      queueMicrotask: 11
    })
  }

  return (
      <div>
        子路由a  home
        <p onClick={handleClick}>
          点击跳转
        </p>
        <Button type="primary" danger>
          Primary
        </Button>
        <Button danger>Default</Button>
        <Button type="dashed" danger>
          Dashed
        </Button>
        <Button type="text" danger>
          Text
        </Button>
        <Button type="link" danger>
          Link
        </Button>
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
