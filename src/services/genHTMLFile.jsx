const genHTMLFile = (htmlStr, filename, cb) => {
  const withDoctype = `
    <!DOCTYPE html>
    <html lang="en" style="width: 350px; height: 350px;">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>NFT Animation URL</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@1,500&family=Noto+Sans+TC&display=swap" rel="stylesheet">
    </head>
    <body style="width: 350px; height: 350px; margin: 0;">
      ${htmlStr}
    </body>
    </html>
  `

  const blob = new Blob([withDoctype], { type: 'text/html' })
  const file = new File([blob], filename, { type: 'text/html' })
  if (cb) cb(file)
}

export default genHTMLFile
