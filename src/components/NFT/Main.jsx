import React from 'react'

import CompsNFTBeforeOpen from '@/components/NFT/BeforeOpen'
import CompsNFTUnopen from '@/components/NFT/Unopen'

function CompsNFTMain({ data = {} }) {
  const { mode } = data

  if (mode === 'before') return <CompsNFTBeforeOpen data={data} />
  if (mode === 'unopen') return <CompsNFTUnopen data={data} />

  return <h1>Please Provide A Mode</h1>
}

export default CompsNFTMain