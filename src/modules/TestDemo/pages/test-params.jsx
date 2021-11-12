import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function TestParams () {
  const l = useLocation()
  const p = useParams()
  console.log(l)
  console.log(p)
  return (
    <div>
      1233 TestParams
    </div>
  )
}

export default TestParams
