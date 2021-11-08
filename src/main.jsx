import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/App'

import Router from '@/router'

import '@/styles/index.scss'

ReactDOM.render(
  /**
   * 严格模式 StrictMode
   * StrictMode 是一个用以标记出应用中潜在问题的工具。就像 Fragment ，
   * StrictMode 不会渲染任何真实的UI。它为其后代元素触发额外的检查和警告。
  */
    <Router />,
  // <React.StrictMode>
  //     <App />
  // </React.StrictMode>,
  document.getElementById('root')
)
