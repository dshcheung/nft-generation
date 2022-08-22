import React, { useRef } from 'react'

import genImageFile from '@/services/genImageFile'
import genHTMLFile from '@/services/genHTMLFile'
import genPreview from '@/services/genPreview'
import genDataURL from '@/services/genDataURL'

import CompsNFTFonts from '@/components/NFT/shared/Fonts'
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
  setImage, setHTML, setPreview, setDataURL
}) {
  const reference = useRef(null)

  const imageCB = () => {
    genImageFile(reference.current, 'opened.png', setImage)
  }

  const htmlCB = () => {
    genHTMLFile(reference.current.outerHTML, 'opened.html', setHTML)
  }

  const previewCB = () => {
    genPreview(reference.current.outerHTML, setPreview)
  }

  const dataUrlCB = () => {
    genDataURL(reference.current, setDataURL)
  }

  return (
    <div style={compsStyle} ref={reference}>
      <CompsNFTFonts />
      <CompsNFTBackground background={background} />
      <CompsNFTGridV1 color={gridIconColor} opacity={opacity} />
      <CompsNFTAroundText
        color={gridIconColor}
        aroundText={aroundText}
        imageCB={imageCB}
        htmlCB={htmlCB}
        previewCB={previewCB}
        dataUrlCB={dataUrlCB}
      />
      <CompsNFTMessage color={messageColor} message={message} />
    </div>
  )
}

export default CompsNFTOpened
