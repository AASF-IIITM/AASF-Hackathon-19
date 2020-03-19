import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './Third.css'
import Navbar1 from './Navbar'

const pages = [
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>Open the Donation Portal</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>If You are a Student Fill the form and Submit</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>Wait for a random Lender to approve the Laon</animated.div>,
	({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>If you are a lender,choose the bid and click bid. Then Finalize the bid</animated.div>,
]

export default function Third() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 4), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
  <div>
  <Navbar1 />
    <div className="simple-trans-main" onClick={onClick}>
		
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </div>
    </div>
  )
}

