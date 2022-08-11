import React from 'react'

import CompsNFTGridIcons from '@/components/NFT/shared/GridIcons'
import CompsNFTMessage from '@/components/NFT/shared/Message'
import CompsNFTAroundText from '@/components/NFT/shared/AroundText'

const compsStyle = {
  position: 'relative',
  margin: '0 auto',
  width: '350px',
  height: '350px'
}

function CompsNFTBeforeOpen({ data: { background, fillColor, text, message } }) {
  return (
    <div style={{ ...compsStyle, background }}>
      <CompsNFTGridIcons color={fillColor} />
      <CompsNFTAroundText color={fillColor} text={text} />
      <CompsNFTMessage message={message} />
    </div>
  )
}

export default CompsNFTBeforeOpen
