import html2canvas from 'html2canvas'

const genDataURL = (element, cb) => {
  html2canvas(element).then((canvas) => {
    if (cb) cb(canvas.toDataURL('image/png'))
  })
}

export default genDataURL
