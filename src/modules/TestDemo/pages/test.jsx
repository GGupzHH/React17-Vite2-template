
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useRouteMatch, Redirect } from 'react-router-dom'
import { setHomeInfo } from '@/store/actions'

import IconFont from '@/components/IconFont'

import { Layout } from 'antd'

const { Header, Footer, Content } = Layout

function TestDemo (props) {
  const location = useLocation()
  const match = useRouteMatch()
  const dispatch = useDispatch()
  const home = useSelector(({ home }) => {
    return home
  })
  console.log(match)
  console.log(props)
  if (location.pathname === match.path) {
    return (
      <Redirect to='/test/a'/>
    )
  }

  const handleClick = async (event) => {
    const res = await dispatch(setHomeInfo('123'))
    console.log(res)
  }

  const handleClickParent = () => {
    console.log('父组件点击事件触发 子传父 给子组件传一个回调 父组件执行 就能获取到子组件传入的数据')
  }

  return (
    <div>
      <div>
        icon
        <IconFont icon='icon-export' disabled handleClick={handleClickParent}/>
      </div>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
      header 嵌套路由-父路由
      <p onClick={handleClick}>
        dispatch 异步 home-type{ home.homeInfo.type }
      </p>
      { props.children }
      footer
    </div>
  )
}

export default TestDemo
