import React, { useEffect, useRef, useState } from 'react'

const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio totam quisquam aspernatur sint ducimus enim doloribus blanditiis iure amet! Amet fugiat officia doloremque consequuntur, incidunt quaerat eius corrupti dolore ratione?'

const commonStyle = {
  lineHeight: '37.5px',
  color: 'white',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
}

function CompsNFTAroundText() {
  const referenceContainer = useRef(null)
  const referenceText = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (referenceText.current && referenceContainer.current) {
      setReady(true)
    }
  }, [referenceText, referenceContainer])

  const containerWidth = referenceContainer.current?.offsetWidth || 0
  const textWidth = referenceText.current?.offsetWidth || 0

  return (
    <div
      style={{
        position: 'relative',
        width: '350px',
        height: '350px'
      }}
    >
      {/* Top */}
      <div
        ref={referenceContainer}
        className="bg-primary"
        style={{
          ...commonStyle,
          width: 'calc(100% - 75px)',
          height: '37.5px',
          margin: '0 37.5px',
          position: 'absolute',
          top: '0',
          left: '0'
        }}
      >
        <span
          ref={referenceText}
          style={{
            display: 'inline-block',
            animation: 'marquee 25s linear infinite'
          }}
        >{text}</span>
      </div>

      {/* Right */}
      <div
        className="bg-success"
        style={{
          ...commonStyle,
          width: 'calc(100% - 75px)',
          height: '37px',
          margin: '0 37.5px',
          position: 'absolute',
          transformOrigin: 'top left',
          transform: 'rotate(90deg)',
          top: '37.5px',
          left: 'calc(100% - 37.5px)'
        }}
      >
        <span
          style={{
            display: 'inline-block',
            animation: 'marquee 25s linear infinite'
          }}
        >{text}</span>
      </div>

      {/* Bottom */}
      <div
        className="bg-danger"
        style={{
          ...commonStyle,
          width: 'calc(100% - 75px)',
          height: '37.5px',
          margin: '0 37.5px',
          position: 'absolute',
          bottom: '0',
          left: '0',
          transform: 'rotate(180deg)'
        }}
      >
        <span
          style={{
            display: 'inline-block'
            // animation: 'marquee 25s linear infinite'
          }}
        >{text}</span>
      </div>

      {/* Left */}
      <div
        className="bg-warning"
        style={{
          ...commonStyle,
          width: 'calc(100% - 75px)',
          height: '37px',
          margin: '0 37.5px',
          position: 'absolute',
          transformOrigin: 'top left',
          transform: 'rotate(270deg)',
          top: 'calc(100% - 37.5px)',
          left: '-37.5px'
        }}
      >
        <span
          style={{
            display: 'inline-block',
            transform: `translate(${-(containerWidth / textWidth) * 100}%, 0)`,
            animation: 'marquee 25s linear infinite'
          }}
        >{text}</span>
      </div>
    </div>
  )
}

export default CompsNFTAroundText
