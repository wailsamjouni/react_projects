import React from 'react'
import './Body.scss'
import LeftBar from './LeftBar'
import MidlleBar from './MidlleBar'
import RightBar from './RightBar'

function Body() {
  return (
    <div>
        <LeftBar />
        <MidlleBar />
        <RightBar />
    </div>
  )
}

export default Body