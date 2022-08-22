import React, { useState, useEffect } from 'react'

import CompsNFTBeforeOpen from '@/components/NFT/BeforeOpen'
import CompsNFTOpened from '@/components/NFT/Opened'
import CompsNFTUnopen from '@/components/NFT/Unopen'

function CompsNFTMain({ data, assetsCB }) {
  // Image File
  const [beforeOpenImg, setBeforeOpenImg] = useState(null)
  const [openedImg, setOpenedImg] = useState(null)
  const [unopenImg, setUnopenImg] = useState(null)

  // HTML File
  const [beforeOpenHTML, setBeforeOpenHTML] = useState(null)
  const [openedHTML, setOpenedHTML] = useState(null)
  const [unopenHTML, setUnopenHTML] = useState(null)

  // Preview
  const [beforeOpenPreview, setBeforeOpenPreview] = useState(null)
  const [openedPreview, setOpenedPreview] = useState(null)
  const [unopenPreview, setUnopenPreview] = useState(null)

  // Data URL
  const [beforeOpenDataURL, setBeforeOpenDataURL] = useState(null)
  const [openedDataURL, setOpenedDataURL] = useState(null)
  const [unopenDataURL, setUnopenDataURL] = useState(null)

  useEffect(() => {
    const imagesReady = beforeOpenImg && openedImg && unopenImg
    const htmlsReady = beforeOpenHTML && openedHTML && unopenHTML
    const previewsReady = beforeOpenPreview && openedPreview && unopenPreview
    const dataURLsReady = beforeOpenDataURL && openedDataURL && unopenDataURL

    if (imagesReady && htmlsReady && previewsReady && dataURLsReady && assetsCB) {
      assetsCB({
        beforeOpenImage: beforeOpenImg,
        beforeOpenHtml: beforeOpenHTML,
        beforeOpenPreview,
        beforeOpenDataURL,
        afterOpenImage: openedImg,
        afterOpenHtml: openedHTML,
        afterOpenPreview: openedPreview,
        afterOpenDataURL: openedDataURL,
        neverOpenedImage: unopenImg,
        neverOpenedHtml: unopenHTML,
        neverOpenedPreview: unopenPreview,
        neverOpenedDataURL: unopenDataURL
      })
    }
  }, [
    beforeOpenImg, openedImg, unopenImg,
    beforeOpenHTML, openedHTML, unopenHTML,
    beforeOpenPreview, openedPreview, unopenPreview,
    beforeOpenDataURL, openedDataURL, unopenDataURL,
    assetsCB
  ])

  return (
    <>
      <CompsNFTBeforeOpen
        data={data}
        setImage={setBeforeOpenImg}
        setHTML={setBeforeOpenHTML}
        setPreview={setBeforeOpenPreview}
        setDataURL={setBeforeOpenDataURL}
      />
      <CompsNFTOpened
        data={data}
        setImage={setOpenedImg}
        setHTML={setOpenedHTML}
        setPreview={setOpenedPreview}
        setDataURL={setOpenedDataURL}
      />
      <CompsNFTUnopen
        data={data}
        setImage={setUnopenImg}
        setHTML={setUnopenHTML}
        setPreview={setUnopenPreview}
        setDataURL={setUnopenDataURL}
      />
    </>
  )
}

export default CompsNFTMain
