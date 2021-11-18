import React, { useEffect, useState } from 'react'
import './index.scss'

function IconFont (props) {
  console.log(props)

  const handleClick = () => {
    props.handleClick()
  }

  const settingClass = () => {
    const className = []
    if (props.verticalCenter) {
      className.push('middle')
    }
    if (props.cursor) {
      className.push('cursor')
    }
    if (props.disabled) {
      className.push('disabled')
    }
    console.log('icon-font' + className.join(' '))
    return 'icon-font ' + className.join(' ')
  }

  return (
    <svg
      className={settingClass()}
      aria-hidden="true"
      onClick={handleClick}
    >
      <filter
        id="drop-shadow"
        xmlns="http://www.w3.org/2000/svg"
      >
        <feGaussianBlur
          in="SourceAlpha"
          stdDeviation="2"
        />
        <feOffset
          dx="1"
          dy="1"
          result="offsetblur"
        />
        <feComponentTransfer>
          <feFuncA
            type="linear"
            slope="0.2"
          />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <g
        filter={props.shadow && 'url(#drop-shadow)'}
      >
        <use xlinkHref={'#' + props.icon} />
      </g>
    </svg>
  )
}

export default IconFont

