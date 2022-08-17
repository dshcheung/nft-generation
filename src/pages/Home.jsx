import React, { useEffect, useState } from 'react' // eslint-disable-line

import CompsNFTUnopen from '@/components/NFT/Unopen' // eslint-disable-line
import getAssets from '@/services/getAssets'

const data = {
  opacity: '0.25',
  background: 'radial-gradient(60.05% 60.05% at 50.55% 55.01%, #FFFF00 3%, #FFFF00 24%, #33FF99 100%)',
  gridIconColor: '#1919FF',
  aroundTextColor: '#1919FF',
  aroundText: 'AAAAAAAAAA BBBBBBBBBB CCCCCCCCC DDDDDDDDD gpqy EEEEEEEEEE FFFFFFFFFF GGGGGGGGGG HHHHHHHHHH',
  messageColor: '#000000',
  message: '在旅途中，\n小王子思考愛的真諦明白馴養的意義。\n小王子思考愛的真諦明白馴養的意義。\nI love you.\n我愛你。'
}

function PagesHome() {
  const [files, setFiles] = useState({})
  const [preview, setPreview] = useState(null) // eslint-disable-line

  useEffect(() => {
    const handler = async () => {
      const assets = await getAssets(data)
      setFiles(assets)
      console.log(assets) // eslint-disable-line
    }

    handler()
  }, [])

  useEffect(() => {
    if (files.unopenedHtml) {
      const reader = new FileReader()

      reader.addEventListener('load', () => {
        setPreview(reader.result)
      }, false)

      reader.readAsText(files.unopenedHtml)
    }
  }, [files])

  // eslint-disable-next-line
  // return preview ? <div dangerouslySetInnerHTML={{ __html: preview }} /> : null
  // return <CompsNFTUnopen data={data} />
  return null
}

export default PagesHome
