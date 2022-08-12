import React from 'react'

import CompsNFTBackground from '@/components/NFT/shared/Background'
import CompsNFTGridV2 from '@/components/NFT/shared/GridV2'
import CompsNFTAroundText from '@/components/NFT/shared/AroundText'

const compsStyle = {
  position: 'relative',
  margin: '0 auto',
  width: '350px',
  height: '350px'
}

function CompsNFTUnopen({ data: { background, fillColor, aroundText } }) {
  return (
    <div style={compsStyle}>
      <CompsNFTBackground background={background} />
      <CompsNFTGridV2 color={fillColor} />
      <CompsNFTAroundText color={fillColor} aroundText={aroundText} />
    </div>
  )
}

export default CompsNFTUnopen
