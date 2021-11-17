import React, { useEffect, useState } from 'react'
import './index.scss'

function IconFont (props) {
  console.log(props)

  // const [num, setNum] = useState(1)

  // const nums = useEffect(() => {
  //   console.log('🍉变了吗 ', num)
  //   console.log('🍉变了吗 ', num * 2)
  //   return num * 2
  // }, [num])

  // console.log(nums)
  // setTimeout(() => {
  //   num
  // }, 1000)
  const handleClick = (parentClick) => {
    props.handleClick()
    // try {
    // }catch (error) {

    // }
  }


  return (
    <svg
      className="icon-font"
      aria-hidden="true"
      // :class="getClassName"
      onClick={handleClick}
    >
      {/* <filter
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
      </filter> */}
      <g
        filter={props.shadow && 'url(#drop-shadow)'}
      >
        <use xlinkHref={'#' + props.icon} />
      </g>
    </svg>
  )
}

export default IconFont

