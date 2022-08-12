import React from 'react'

const compStyle = {
  position: 'absolute',
  width: '350px',
  height: '350px'
}

function CompsNFTBackground({ background }) {
  return <div style={{ ...compStyle, background }} />
}

export default CompsNFTBackground
