import React, { useState } from 'react'

import CompsNFTMain from '@/components/NFT/Main'

function PagesHome() {
  const [mode, setMode] = useState('before')

  const handleSelect = (e) => {
    setMode(e.target.value)
  }

  const data = {
    mode,
    background: 'radial-gradient(60.05% 60.05% at 50.55% 55.01%, #FFFF00 3%, #FFFF00 24%, #33FF99 100%)',
    fillColor: '#1919FF',
    message: 'Hello World',
    text: 'AAAAAAAAAA BBBBBBBBBB CCCCCCCCC DDDDDDDDD gpqy EEEEEEEEEE FFFFFFFFFF GGGGGGGGGG HHHHHHHHHH'
  }

  return (
    <div id="pages-home" className="container py-3 vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="text-center mb-3">
        <select onChange={handleSelect}>
          <option value="before">Before Open</option>
          <option value="opened">Opened</option>
          <option value="unopen">Unopen</option>
        </select>
      </div>

      <CompsNFTMain data={data} />
    </div>
  )
}

export default PagesHome
