import React from 'react'

import CompsNFTGridIcons from '@/components/NFT/shared/GridIcons'
import CompsNFTAroundText from '@/components/NFT/shared/AroundText'

const compsStyle = {
  position: 'relative',
  margin: '0 auto',
  width: '350px',
  height: '350px'
}

// TODO: GridIcons to Heart
function CompsNFTUnopen({ data: { background, fillColor, text } }) {
  return (
    <div style={{ ...compsStyle, background }}>
      <CompsNFTGridIcons color={fillColor} />
      <CompsNFTAroundText color={fillColor} text={text} />
    </div>
  )
}

export default CompsNFTUnopen
