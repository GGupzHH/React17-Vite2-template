import React from 'react'

import { Form, Input, Button } from 'antd'

import '@/modules/UserAccount/style/login.scss'

import Logo from '@/assets/logo.svg'
import ViteLogo from '@/assets/favicon.svg'

import {
  SmileTwoTone,
  LockOutlined
} from '@ant-design/icons'

import {
  asyncSetUserInfo
} from '@/store/actions'
import {
  useDispatch,
  useSelector
} from 'react-redux'

function Login () {
  const userStore = useSelector(({user}) => {
    return user
  })

  const dispatch = useDispatch()

  const onFinish = async (values) => {
    console.log('Success:', values)
    const res = await dispatch(asyncSetUserInfo())
    console.log('Success:', res)
    console.log('Success:', userStore)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="wrap-login">
      <div className="wrap-logo">
        <img src={ Logo } alt="" />
        <img src={ ViteLogo } alt="" />
      </div>
      <Form
        className="wrap-login-form"
        name="basic"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            className="login-input"
            placeholder="Username"
            prefix={ <SmileTwoTone /> }
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            className="login-input"
            placeholder="Password"
            prefix={<LockOutlined />}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block={true}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
