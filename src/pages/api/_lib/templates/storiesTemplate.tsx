interface GetHtmlProps {
  title: string;
  description: string;
  capa: string;
}

export function getHtmlThumb({
  title,
  description,
  capa,
}: GetHtmlProps) {
  return `<!DOCTYPE html>
  <html>
  
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
      }
  
      .container {
        background-color: #176DC0;
        width: 1080px;
        height: 1980px;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(0deg, rgb(15, 2, 10), rgba(0, 0, 0, 0.45)), url(${capa});
        background-size: cover;
        background-position: center;
      }

      .content {
        display: flex;
        justify-content: center;
        align-items: flex-end;
      }

      .logo {
        display: flex;
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
        justify-content: center;
        align-items: center;
        padding-top: 100px;
      }

      .logo img {
        width: 400px;
      }

      .content span {
        padding: 20px;
        text-align: center;
        color: white;
        font-size: 42px;
        font-weight: 900;
      }
  
      .description {
        display: flex;
        justify-content: center;
        align-items: center;
      }
  
      .description p {
        width: 80%;
        color: white;
        font-size: 28px;
        text-align: center;
        font-weight: 300;
      }
  
      .action {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 100px;
      }
  
      .action h1 {
        color: white;
        font-size: 38px;
        font-weight: 900;
      }
    </style>
  </head>
  
  <body>
  
    <div class="container">
      <div class="logo">
        <img src="https://vejoaqui.com.br/images/vejoaqui.svg" />
      </div>
      <div>
        <div class="content">
          <span>${title}</span>
        </div>
        <div class="description">
          <p> ${description === "undefined" ? "" : description} </p>
        </div>
        <div class="action">
          <h1>Acesse agora</h1>
        </div>
      </div>
    </div>
  
  </body>
  
  </html>
  `
}
