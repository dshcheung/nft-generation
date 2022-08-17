import React, { useRef } from 'react'

import genImageFile from '@/services/genImageFile'
import genHTMLFile from '@/services/genHTMLFile'

import CompsNFTBackground from '@/components/NFT/shared/Background'
import CompsNFTGridV1 from '@/components/NFT/shared/GridV1'
import CompsNFTAroundText from '@/components/NFT/shared/AroundText'

const compsStyle = {
  position: 'relative',
  margin: '0 auto',
  width: '350px',
  height: '350px'
}

function CompsNFTBeforeOpen({
  data: { background, gridIconColor, aroundText },
  setImage, setHTML
}) {
  const reference = useRef(null)

  const imageCB = () => {
    genImageFile(reference.current, 'before-open.png', setImage)
  }

  const htmlCB = () => {
    genHTMLFile(reference.current.outerHTML, 'before-open.html', setHTML)
  }

  return (
    <div style={compsStyle} ref={reference}>
      <CompsNFTBackground background={background} />
      <CompsNFTGridV1 color={gridIconColor} />
      <CompsNFTAroundText
        color={gridIconColor}
        aroundText={aroundText}
        imageCB={imageCB}
        htmlCB={htmlCB}
      />
    </div>
  )
}

export default CompsNFTBeforeOpen
