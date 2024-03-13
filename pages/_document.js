import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta
          name="description"
          content="Descubre mi mundo digital. Soy un apasionado desarrollador web especializado en crear experiencias en línea únicas y funcionales. Explora mi portafolio y sumérgete en la innovación tecnológica."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&family=Playfair+Display:wght@400;600;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
          rel="stylesheet"
        />

      </Head>
      <body >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
