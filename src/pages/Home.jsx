import React, { useEffect, useState } from 'react'

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

  useEffect(() => {
    const handler = async () => {
      const assets = await getAssets(data)
      setFiles(assets)
      console.log(assets) // eslint-disable-line
    }

    handler()
  }, [])

  return (
    <>
      {
        files.beforeOpenDataURL && (
          <a
            className="btn btn-primary"
            href={files.beforeOpenDataURL}
            download="unopened.png"
          >Download Before Open</a>
        )
      }
      {
        // eslint-disable-next-line
        files.beforeOpenPreview && <div dangerouslySetInnerHTML={{ __html: files.beforeOpenPreview }} />
      }

      {
        files.afterOpenDataURL && (
          <a
            className="btn btn-primary"
            href={files.afterOpenDataURL}
            download="opened.png"
          >Download Opened</a>
        )
      }
      {
        // eslint-disable-next-line
        files.afterOpenPreview && <div dangerouslySetInnerHTML={{ __html: files.afterOpenPreview }} />
      }

      {
        files.neverOpenedDataURL && (
          <a
            className="btn btn-primary"
            href={files.neverOpenedDataURL}
            download="neverOpened.png"
          >Download Unopen</a>
        )
      }
      {
        // eslint-disable-next-line
        files.neverOpenedPreview && <div dangerouslySetInnerHTML={{ __html: files.neverOpenedPreview }} />
      }
    </>
  )
}

export default PagesHome
