import React from 'react'
import ReactDOM from 'react-dom'

import Router from '@/router'

import '@/styles/index.scss'

import { Provider } from 'react-redux'

import { ConfigProvider, DatePicker, message } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import 'antd/dist/antd.css'
import store from './store'
import '@/assets/fonts'

ReactDOM.render(
  /**
   * 严格模式 StrictMode
   * StrictMode 是一个用以标记出应用中潜在问题的工具。就像 Fragment ，
   * StrictMode 不会渲染任何真实的UI。它为其后代元素触发额外的检查和警告。
  */
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Router />
    </ConfigProvider>
  </Provider>,
  // <React.StrictMode>
  //     <App />
  // </React.StrictMode>,
  document.getElementById('root')
)
