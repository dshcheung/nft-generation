import React from 'react'

import CompsNFTBackground from '@/components/NFT/shared/Background'
import CompsNFTGridV1 from '@/components/NFT/shared/GridV1'
import CompsNFTMessage from '@/components/NFT/shared/Message'
import CompsNFTAroundText from '@/components/NFT/shared/AroundText'

const compsStyle = {
  position: 'relative',
  margin: '0 auto',
  width: '350px',
  height: '350px'
}

function CompsNFTOpened({ data: { opacity, background, fillColor, textColor, aroundText, message } }) {
  return (
    <div style={compsStyle}>
      <CompsNFTBackground background={background} />
      <CompsNFTGridV1 color={fillColor} opacity={opacity} />
      <CompsNFTAroundText color={fillColor} aroundText={aroundText} />
      <CompsNFTMessage color={textColor} message={message} />
    </div>
  )
}

export default CompsNFTOpened
