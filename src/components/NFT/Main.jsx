import React, { useState, useEffect } from 'react'

import CompsNFTBeforeOpen from '@/components/NFT/BeforeOpen'
import CompsNFTOpened from '@/components/NFT/Opened'
import CompsNFTUnopen from '@/components/NFT/Unopen'

function CompsNFTMain({ data, assetsCB }) {
  const [beforeOpenImg, setBeforeOpenImg] = useState(null)
  const [openedImg, setOpenedImg] = useState(null)
  const [unopenImg, setUnopenImg] = useState(null)
  const [beforeOpenHTML, setBeforeOpenHTML] = useState(null)
  const [openedHTML, setOpenedHTML] = useState(null)
  const [unopenHTML, setUnopenHTML] = useState(null)

  useEffect(() => {
    const imagesReady = beforeOpenImg && openedImg && unopenImg
    const htmlsReady = beforeOpenHTML && openedHTML && unopenHTML
    if (imagesReady && htmlsReady && assetsCB) {
      assetsCB({
        unopenedImage: unopenImg,
        unopenedHtml: unopenHTML,
        openedImage: openedImg,
        openedHtml: openedHTML,
        neverOpenedImage: beforeOpenImg,
        neverOpenedHtml: beforeOpenHTML
      })
    }
  }, [
    beforeOpenImg, openedImg, unopenImg,
    beforeOpenHTML, openedHTML, unopenHTML
  ])

  return (
    <>
      <CompsNFTBeforeOpen
        data={data}
        setImage={setBeforeOpenImg}
        setHTML={setBeforeOpenHTML}
      />
      <CompsNFTOpened
        data={data}
        setImage={setOpenedImg}
        setHTML={setOpenedHTML}
      />
      <CompsNFTUnopen
        data={data}
        setImage={setUnopenImg}
        setHTML={setUnopenHTML}
      />
    </>
  )
}

export default CompsNFTMain
