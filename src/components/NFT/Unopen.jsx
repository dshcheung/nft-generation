import React from 'react'

import CompsNFTGrid from '@/components/NFT/shared/Grid'
import CompsNFTAroundText from '@/components/NFT/shared/AroundText'

const colors = {
  background: 'radial-gradient(60.05% 60.05% at 50.55% 55.01%, #FFFF00 3%, #FFFF00 24%, #33FF99 100%)',
  color: '#1919FF'
}

const compsStyle = {
  position: 'relative',
  margin: '0 auto',
  width: '350px',
  height: '350px',
  background: colors.background
}

function CompsNFTUnopen() {
  return (
    <div
      style={compsStyle}
    >
      <CompsNFTGrid color={colors.color} display="one" />
      <CompsNFTAroundText color={colors.color} />
    </div>
  )
}

export default CompsNFTUnopen
