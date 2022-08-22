import React, { useRef, useState, useEffect } from 'react'

import genRandomId from '@/services/genRandomId'

const compStyle = {
  position: 'absolute',
  width: '350px',
  height: '350px',
  fontFamily: 'DM Mono',
  fontWeight: '500',
  fontStyle: 'italic',
  fontSize: '22px',
  lineHeight: '60px',
  color: 'transparent'
}

const commonOuterContainerStyle = {
  whiteSpace: 'nowrap',
  width: 'calc(100% - 75px)',
  height: '37.5px',
  margin: '0 37.5px',
  position: 'absolute',
  transformOrigin: 'top left'
}

const commonInnerContainerStyle = {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  boxSizing: 'content-box',
  paddingBottom: '37.5px'
}

const commonTextStyle = {
  display: 'inline-block'
}

const topContainerStyle = {
  ...commonOuterContainerStyle,
  transform: 'rotate(0deg)',
  top: '0',
  left: '0'
}

const rightContainerStyle = {
  ...commonOuterContainerStyle,
  transformOrigin: 'bottom left',
  transform: 'rotate(90deg)',
  top: '0',
  left: 'calc(100% - 75px)'
}

const bottomContainerStyle = {
  ...commonOuterContainerStyle,
  transformOrigin: 'top right',
  transform: 'rotate(180deg)',
  top: '100%',
  left: '-275px'
}

const leftContainerStyle = {
  ...commonOuterContainerStyle,
  transformOrigin: 'bottom left',
  transform: 'rotate(270deg)',
  top: 'calc(100% - 75px)',
  left: '0'
}

const getTransformValues = (widths) => {
  const { cW, tW } = widths

  // filledBoxes = amount of boxes filled | max 4, min 0
  // emptyBoxes = amount of empty boxes | max 4, min 0
  // extraSpace = spacing between end and start of text to prevent sticking
  // textTakenSpace = Text spaces on last box | 0 boxes are filled
  const velocityPerSecond = 100
  const filledBoxes = Math.min(Math.floor(tW / cW), 4)
  const emptyBoxes = 4 - filledBoxes
  const extraSpace = emptyBoxes ? 0 : 50
  const textTakenSpace = filledBoxes === 4 ? 0 : tW % cW

  // emptyWidth = total width of empty spaces needed
  // totalWidth = total width of all 3 spans | tW + emptyWidth + tW
  const emptyWidth = (cW * emptyBoxes) - textTakenSpace + extraSpace
  const totalWidth = (tW * 2) + emptyWidth

  return {
    totalWidth,
    animationTime: (totalWidth / velocityPerSecond).toFixed(1),
    emptyWidth,
    bottom: {
      start: -(cW * 0),
      end: -(totalWidth - tW + cW * 0)
    },
    left: {
      start: -(cW * 1),
      end: -(totalWidth - tW + cW * 1)
    },
    top: {
      start: -(cW * 2),
      end: -(totalWidth - tW + cW * 2)
    },
    right: {
      start: -(cW * 3),
      end: -(totalWidth - tW + cW * 3)
    }
  }
}

function CompsNFTAroundText({ color, aroundText, imageCB, htmlCB, previewCB, dataUrlCB }) {
  const containerReference = useRef(null)
  const textReference = useRef(null)
  const [startAnimation, setStartAnimation] = useState(false)
  const [isFontReady, setIsFontReady] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [transformValues, setTransformValues] = useState({})
  const [randomId] = useState(genRandomId())

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

  useEffect(() => {
    if (isFontReady && isReady) {
      if (imageCB) imageCB()
      if (dataUrlCB) dataUrlCB()
      setStartAnimation(true)
    }
  }, [isFontReady, isReady])

  useEffect(() => {
    if (startAnimation) {
      if (htmlCB) htmlCB()
      if (previewCB) previewCB()
    }
  }, [startAnimation])

  const renderText = (key) => {
    if (!isReady) return null

    const animationPlayState = startAnimation ? 'running' : 'paused'
    const animationDuration = transformValues.animationTime
    const animationCSS = `marquee-${key}-${randomId} ${animationDuration}s linear infinite ${animationPlayState}`

    return (
      <div style={commonInnerContainerStyle}>
        <span id={`${key}-${randomId}`} style={{ ...commonTextStyle, animation: animationCSS }}>
          <span style={commonTextStyle}>{aroundText}</span>
          <span style={{ ...commonTextStyle, height: '37.5px', width: `${transformValues.emptyWidth}px` }} />
          <span style={commonTextStyle}>{aroundText}</span>
        </span>
      </div>
    )
  }

  const renderStyles = () => {
    if (!isReady) return null
    return (
      <style>
        {
          `
            #top-${randomId} {
              transform: translateX(${transformValues.top.start}px);
            }

            #right-${randomId} {
              transform: translateX(${transformValues.right.start}px);
            }

            #bottom-${randomId} {
              transform: translateX(${transformValues.bottom.start}px);
            }

            #left-${randomId} {
              transform: translateX(${transformValues.left.start}px);
            }

            @keyframes marquee-top-${randomId} {
              0% {
                transform: translateX(${transformValues.top.start}px);
              }
              100% {
                transform: translateX(${transformValues.top.end}px);
              }
            }

            @keyframes marquee-right-${randomId} {
              0% {
                transform: translateX(${transformValues.right.start}px);
              }
              100% {
                transform: translateX(${transformValues.right.end}px);
              }
            }

            @keyframes marquee-bottom-${randomId} {
              0% {
                transform: translateX(${transformValues.bottom.start}px);
              }
              100% {
                transform: translateX(${transformValues.bottom.end}px);
              }
            }

            @keyframes marquee-left-${randomId} {
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
      <div ref={containerReference} style={{ ...topContainerStyle, visibility: 'hidden', overflow: 'hidden' }}>
        <span id="test" ref={textReference} style={commonTextStyle}>{aroundText}</span>
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
