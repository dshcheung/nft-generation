import React, { useRef } from 'react'

import genImageFile from '@/services/genImageFile'
import genHTMLFile from '@/services/genHTMLFile'

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

function CompsNFTOpened({
  data: { opacity, background, gridIconColor, messageColor, aroundText, message },
  setImage, setHTML
}) {
  const reference = useRef(null)

  const imageCB = () => {
    genImageFile(reference.current, 'opened.png', setImage)
  }

  const htmlCB = () => {
    genHTMLFile(reference.current.outerHTML, 'opened.html', setHTML)
  }

  return (
    <div style={compsStyle} ref={reference}>
      <CompsNFTBackground background={background} />
      <CompsNFTGridV1 color={gridIconColor} opacity={opacity} />
      <CompsNFTAroundText
        color={gridIconColor}
        aroundText={aroundText}
        imageCB={imageCB}
        htmlCB={htmlCB}
      />
      <CompsNFTMessage color={messageColor} message={message} />
    </div>
  )
}

export default CompsNFTOpened
