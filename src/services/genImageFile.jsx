import html2canvas from 'html2canvas'

const genImageFile = (element, filename, cb) => {
  html2canvas(element).then((canvas) => {
    canvas.toBlob((blob) => {
      cb(new File([blob], filename, { type: 'image/png' }))
    }, 'image/png')
  })
}

export default genImageFile
