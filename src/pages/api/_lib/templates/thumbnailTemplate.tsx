interface GetHtmlProps {
  title: string;
  background: string;
}

export function getHtml({
  title,
  background,
}: GetHtmlProps) {
  return `
  <!DOCTYPE html>
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
      background: linear-gradient(0deg, rgb(15, 2, 10), rgba(0, 0, 0, 0.015)), url(${background});
      background-size: cover;
      width: 1200px;
      height: 628px;
      margin: 0;
    }

    .content {
      display: flex;
      height: 85%;
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
      background: #176DC0;
    }

    .content span {
      padding: 20px;
      width: 85%;
      text-align: center;
      color: white;
      font-size: 42px;
      font-weight: 900;
    }
  </style>
</head>

<body>

  <div class="container">
    <div class="logo">
      <img src="https://vejoaqui.com.br/images/vejoaqui.svg" />
    </div>
    <div class="content">
      <span>${title}</span>
    </div>
  </div>

</body>

</html>
  `
}
