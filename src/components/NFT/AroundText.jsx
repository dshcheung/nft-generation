import React, { useRef, useState, useEffect } from 'react'

const text = 'AAAAAAAAAAAAAAAA'

const compStyle = {
  position: 'relative',
  width: '350px',
  height: '350px'
}

const commonContainerStyle = {
  lineHeight: '37.5px',
  color: 'white',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  width: 'calc(100% - 75px)',
  height: '37.5px',
  margin: '0 37.5px',
  position: 'absolute',
  transformOrigin: 'top left'
}

const commonTextStyle = {
  display: 'inline-block'
}

const topContainerStyle = {
  ...commonContainerStyle,
  transform: 'rotate(0deg)',
  top: '0',
  left: '0'
}

const topTextStyle = {
  ...commonTextStyle,
  animation: 'marquee-top 10s linear infinite'
}

const rightContainerStyle = {
  ...commonContainerStyle,
  transform: 'rotate(90deg)',
  top: '37.5px',
  left: 'calc(100% - 37.5px)'
}

const rightTextStyle = {
  ...commonTextStyle,
  animation: 'marquee-right 10s linear infinite'
}

const bottomContainerStyle = {
  ...commonContainerStyle,
  transform: 'rotate(180deg)',
  top: '100%',
  left: 'calc(100% - 75px)'
}

const bottomTextStyle = {
  ...commonTextStyle,
  animation: 'marquee-bottom 10s linear infinite'
}

const leftContainerStyle = {
  ...commonContainerStyle,
  transform: 'rotate(270deg)',
  top: 'calc(100% - 37.5px)',
  left: '-37.5px'
}

const leftTextStyle = {
  ...commonTextStyle,
  animation: 'marquee-left 10s linear infinite'
}

const getTransformValues = (widths) => {
  const { cW, tW } = widths

  const boxFilled = Math.min(Math.floor(tW / cW), 4) // 3
  const boxOffsetAmount = 4 - boxFilled // 1
  const textRemainderSpace = tW - (cW * boxFilled) // whatever is remaining on last box
  const extraSpace = boxOffsetAmount ? 0 : 100

  console.log(boxFilled, boxOffsetAmount, textRemainderSpace, extraSpace)

  return {
    emptyWidth: cW * (boxOffsetAmount) - textRemainderSpace + extraSpace,
    bottom: { start: -(tW + cW * (boxOffsetAmount) - textRemainderSpace + extraSpace), end: -(cW * 0) },
    left: { start: -(tW + cW * (boxOffsetAmount + 1) - textRemainderSpace + extraSpace), end: -(cW * 1) },
    top: { start: -(tW + cW * (boxOffsetAmount + 2) - textRemainderSpace + extraSpace), end: -(cW * 2) },
    right: { start: -(tW + cW * (boxOffsetAmount + 3) - textRemainderSpace + extraSpace), end: -(cW * 3) }
  }
}

function CompsNFTAroundText() {
  const containerReference = useRef(null)
  const textReference = useRef(null)
  const [isReady, setIsReady] = useState(false)
  const [transformValues, setTransformValues] = useState({})

  useEffect(() => {
    if (containerReference.current && textReference.current) {
      setIsReady(true)
      setTransformValues(getTransformValues({
        cW: containerReference.current.offsetWidth,
        tW: textReference.current.offsetWidth
      }))
    }
  }, [containerReference, textReference])

  const renderText = () => {
    if (!isReady) return null
    return (
      <>
        <span style={commonTextStyle}>{text}</span>
        <span style={{ ...commonTextStyle, width: `${transformValues.emptyWidth}px` }} />
        <span style={commonTextStyle}>{text}</span>
      </>
    )
  }

  const renderKeyframes = () => {
    if (!isReady) return null
    return (
      <style>
        {
          `
            @keyframes marquee-top {
              0% {
                transform: translateX(${transformValues.top.start}px);
              }
              100% {
                transform: translateX(${transformValues.top.end}px);
              }
            }

            @keyframes marquee-right {
              0% {
                transform: translateX(${transformValues.right.start}px);
              }
              100% {
                transform: translateX(${transformValues.right.end}px);
              }
            }

            @keyframes marquee-bottom {
              0% {
                transform: translateX(${transformValues.bottom.start}px);
              }
              100% {
                transform: translateX(${transformValues.bottom.end}px);
              }
            }

            @keyframes marquee-left {
              0% {
                transform: translateX(${transformValues.left.start}px);
              }
              100% {
                transform: translateX(${transformValues.left.end}px);
              }
            }
          `
        }
      </style>
    )
  }

  return (
    <div style={compStyle}>
      {/* Reference | Hidden */}
      <div ref={containerReference} className="bg-black" style={{ ...topContainerStyle, display: 'block' }}>
        <span ref={textReference} style={commonTextStyle}>{text}</span>
      </div>

      {/* Top */}
      <div className="bg-primary" style={topContainerStyle}>
        <span style={topTextStyle}>{ renderText() }</span>
      </div>

      {/* Right */}
      <div className="bg-success" style={rightContainerStyle}>
        <span style={rightTextStyle}>{ renderText() }</span>
      </div>

      {/* Bottom */}
      <div className="bg-warning" style={bottomContainerStyle}>
        <span style={bottomTextStyle}>{ renderText() }</span>
      </div>

      {/* Left */}
      <div className="bg-danger" style={leftContainerStyle}>
        <span style={leftTextStyle}>{ renderText() }</span>
      </div>

      { renderKeyframes() }
    </div>
  )
}

export default CompsNFTAroundText
