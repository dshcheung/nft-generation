import React from 'react'
import ReactDOM from 'react-dom'

import CompsNFTMain from '@/components/NFT/Main'

const getAssets = (data) => new Promise((resolve) => {
  const dummyElem = document.createElement('div')
  dummyElem.id = 'nft-generation-placeholder'
  dummyElem.style.height = '0'
  dummyElem.style.width = '0'
  dummyElem.style.overflow = 'hidden'
  document.body.append(dummyElem)
  ReactDOM.render(<CompsNFTMain data={data} assetsCB={resolve} />, dummyElem)
})

export default getAssets
