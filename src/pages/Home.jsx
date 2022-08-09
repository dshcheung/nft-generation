import React, { useState } from 'react'

import CompsNFTBeforeOpen from '@/components/NFT/BeforeOpen'
import CompsNFTUnopen from '@/components/NFT/Unopen'

function PagesHome() {
  const [mode, setMode] = useState('before')

  const handleSelect = (e) => {
    setMode(e.target.value)
  }

  return (
    <div id="pages-home" className="container py-3">
      <div className="text-center mb-3">
        <select onChange={handleSelect}>
          <option value="before">Before Open</option>
          <option value="opened">Opened</option>
          <option value="unopen">Unopen</option>
        </select>
      </div>

      {mode === 'before' && <CompsNFTBeforeOpen />}
      {mode === 'unopen' && <CompsNFTUnopen />}
    </div>
  )
}

export default PagesHome
