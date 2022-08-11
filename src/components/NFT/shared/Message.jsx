import React from 'react'

const compStyle = {
  position: 'absolute',
  width: '350px',
  height: '350px',
  padding: '37.5px',
  fontFamily: 'NotoSansTC',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '150%'
}

function CompsNFTMessage({ message }) {
  return (
    <div style={compStyle}>
      {message}
    </div>
  )
}

export default CompsNFTMessage
