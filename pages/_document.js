import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="es">
      <Head>
        
        <link rel="preload" href="https://fonts.googleapis.com" />
        <link
          rel="preload"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&family=Playfair+Display:wght@400;600;900&display=swap"
          rel="stylesheet"
        />
        
        <link rel="apple-touch-icon" sizes="180x180" href="/img/assets/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/assets/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/assets/favicon-16x16.png"/>
        <link rel="manifest" href="/img/assets/site.webmanifest"/>
        <link rel="mask-icon" href="/img/assets/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>

      </Head>
      <body >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
