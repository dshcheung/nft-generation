import React, { useRef, useState, useEffect } from 'react'

const text = 'AAAAAAAAAA BBBBBBBBBB CCCCCCCCC DDDDDDDDD EEEEEEEEEE FFFFFFFFFF GGGGGGGGGG HHHHHHHHHH IIIIIIIIII JJJJJJJJJJ'

const compStyle = {
  position: 'relative',
  width: '350px',
  height: '350px',
  fontFamily: 'DMMono',
  fontWeight: '500',
  fontStyle: 'italic',
  fontSize: '22px',
  lineHeight: '60px',
  color: 'transparent'
}

const commonContainerStyle = {
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

const rightContainerStyle = {
  ...commonContainerStyle,
  transform: 'rotate(90deg)',
  top: '37.5px',
  left: 'calc(100% - 37.5px)'
}

const bottomContainerStyle = {
  ...commonContainerStyle,
  transform: 'rotate(180deg)',
  top: '100%',
  left: 'calc(100% - 75px)'
}

const leftContainerStyle = {
  ...commonContainerStyle,
  transform: 'rotate(270deg)',
  top: 'calc(100% - 37.5px)',
  left: '-37.5px'
}

const getTransformValues = (widths) => {
  const { cW, tW } = widths

  // filledBoxes = amount of boxes filled | max 4, min 0
  // emptyBoxes = amount of empty boxes | max 4, min 0
  // textRemainderSpace = remainder tW on last box | 0 boxes are filled
  // extraSpace = spacing between end and start of text to prevent sticking
  const filledBoxes = Math.min(Math.floor(tW / cW), 4)
  const emptyBoxes = 4 - filledBoxes
  const textRemainderSpace = filledBoxes === 4 ? 0 : tW - (cW * filledBoxes)
  const extraSpace = emptyBoxes ? 0 : 50

  return {
    totalWidth: tW * 2 + cW * (emptyBoxes) - textRemainderSpace + extraSpace,
    emptyWidth: cW * (emptyBoxes) - textRemainderSpace + extraSpace,
    bottom: { start: -(tW + cW * (emptyBoxes) - textRemainderSpace + extraSpace), end: -(cW * 0) },
    left: { start: -(tW + cW * (emptyBoxes + 1) - textRemainderSpace + extraSpace), end: -(cW * 1) },
    top: { start: -(tW + cW * (emptyBoxes + 2) - textRemainderSpace + extraSpace), end: -(cW * 2) },
    right: { start: -(tW + cW * (emptyBoxes + 3) - textRemainderSpace + extraSpace), end: -(cW * 3) }
  }
}

function CompsNFTAroundText({ color }) {
  const containerReference = useRef(null)
  const textReference = useRef(null)
  const [isFontReady, setIsFontReady] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [transformValues, setTransformValues] = useState({})

  useEffect(() => {
    const checkFontsReady = async () => {
      await document.fonts.ready
      setIsFontReady(true)
    }

    checkFontsReady()
  }, [])

  useEffect(() => {
    if (containerReference.current && textReference.current && isFontReady) {
      setIsReady(true)
      setTransformValues(getTransformValues({
        cW: containerReference.current.offsetWidth,
        tW: textReference.current.offsetWidth
      }))
    }
  }, [containerReference, textReference, isFontReady])

  const renderText = (key) => {
    if (!isReady) return null

    const velocityPerSecond = 100
    const animationTime = (transformValues.totalWidth / velocityPerSecond).toFixed(1)

    return (
      <span style={{ ...commonTextStyle, animation: `marquee-${key} ${animationTime}s linear infinite` }}>
        <span style={commonTextStyle}>{text}</span>
        <span style={{ ...commonTextStyle, width: `${transformValues.emptyWidth}px` }} />
        <span style={commonTextStyle}>{text}</span>
      </span>
    )
  }

  const renderStyles = () => {
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
    <div style={{ ...compStyle, WebkitTextStroke: `1px ${color}` }}>
      {/* Reference | Hidden */}
      <div ref={containerReference} style={{ ...topContainerStyle, visibility: 'hidden' }}>
        <span id="test" ref={textReference} style={commonTextStyle}>{text}</span>
      </div>

      {/* Top */}
      <div style={topContainerStyle}>{ renderText('top') }</div>

      {/* Right */}
      <div style={rightContainerStyle}>{ renderText('right') }</div>

      {/* Bottom */}
      <div style={bottomContainerStyle}>{ renderText('bottom') }</div>

      {/* Left */}
      <div style={leftContainerStyle}>{ renderText('left') }</div>

      { renderStyles() }
    </div>
  )
}

export default CompsNFTAroundText
