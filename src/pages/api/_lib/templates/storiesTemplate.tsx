interface GetHtmlProps {
  title: string;
  image: string;
}

export function getHtmlThumb({
  title,
  image,
}: GetHtmlProps) {
  return `<!DOCTYPE html>
  <html>
  
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
      rel="stylesheet" />
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: "Poppins", sans-serif;
      }
  
      .container {
        width: 1080px;
        height: 1980px;
        margin: 0;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
  
      .title {
        width: 80%;
        font-size: 50px;
        text-align: start;
      }
  
      .cover {
        height: 700px;
        border-radius: 20px;
        width: 900px;
        background: url(${image});
        background-size: cover;
        background-position: center;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <span class="title">${title}</span>
      <div class="cover"></div>
    </div>
  </body>

  </html>
  `
}
