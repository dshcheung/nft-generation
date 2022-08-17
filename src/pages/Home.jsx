import { useEffect } from 'react'

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
  useEffect(() => {
    const handler = async () => {
      const assets = await getAssets(data)
      console.log(assets) // eslint-disable-line
    }

    handler()
  }, [])

  return null
}

export default PagesHome
