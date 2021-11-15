import React from 'react'
import { Link } from 'react-router-dom'


function Home1 (props) {
  console.log(props)
    return (
      <div>
        子路由2 b
        <Link to='/test/a'>
          到 a  页面
          </Link>
        Home1
      </div>
    )
}

export default Home1
