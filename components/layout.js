import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import {motion , AnimatePresence} from "framer-motion";
import {GoogleAnalytics} from "@next/third-parties/google"

const Layout = ({children, title='', description='' }) => {


  const organizationSchema = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "FA Desarrollo Web",
    "url": "https://www.fadesarrolloweb.com.ar",
    "logo": "https://www.fadesarrolloweb.com.ar/path-to-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "areaServed": "AR",
      "availableLanguage": ["Spanish", "English"]
    },
    "sameAs": [
      "https://www.instagram.com/tu-cuenta",
      "https://www.tiktok.com/@tu-cuenta"
    ]
  };

  const localBusinessSchema = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "FA Desarrollo Web",
    "image": "https://www.fadesarrolloweb.com.ar/path-to-image.jpg",
    "@id": "",
    "url": "https://www.fadesarrolloweb.com.ar",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "González Catán",
      "addressRegion": "Buenos Aires",
      "postalCode": "1759",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-34.7975",
      "longitude": "-58.6461"
    },
    "sameAs": [
      "https://www.instagram.com/fadesarrolloweb/",
      "https://www.tiktok.com/@fadesarrolloweb4"
    ]
  };

  const serviceSchema = {
    "@context": "http://schema.org",
    "@type": "Service",
    "serviceType": "Desarrollo Web",
    "provider": {
      "@type": "Organization",
      "name": "FA Desarrollo Web",
      "url": "https://www.fadesarrolloweb.com.ar"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Argentina"
    }
  };

  const websiteSchema = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "url": "https://www.fadesarrolloweb.com.ar",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.fadesarrolloweb.com.ar/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };


  return (
    <>
    
    <Head>
        <title>{`${title} | Flavio Arzamendia Desarrollador Web en Argentina`}</title>
        <meta
          name="description"
          content={description}
        />
          <link rel="canonical" href="https://www.fadesarrolloweb.com.ar/"></link>
          <meta property="og:url" content="https://www.fadesarrolloweb.com.ar"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content={title}/>
          <meta property="og:description" content={description}/>

          <meta property="og:image" content="https://ogcdn.net/c078a98b-9a33-4eaf-a5cf-e5ebf3ea450c/v1/fadesarrolloweb.com.ar/Flavio%20Arzamendia%20Desarrollador%20Web/Conoce%20a%20Flavio%20Arzamendia%2C%20desarrollador%20web%20freelance%20en%20Buenos%20Aires.%20Descubre%20servicios%20de%20dise%C3%B1o%20web%2C%20apps%20y%20SEO./https%3A%2F%2Fcdn.theopengraph.com%2Fproduction%2Fdocuments%2Fd564a463-1c51-4259-991d-0d17bf3e0391.jpg%3Ftoken%3D-hKrjcO4EFDmPh0lgxSanJdH2MZ9gYnfw4V87WUckbA%26height%3D800%26width%3D1200%26expires%3D33239188519/og.png"/>

         
          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="twitter:domain" content="fadesarrolloweb.com.ar"/>
          <meta property="twitter:url" content="https://www.fadesarrolloweb.com.ar"/>
          <meta name="twitter:title" content={title}/>
          <meta name="twitter:description" content={description}/>

          <meta name="twitter:image" content="https://ogcdn.net/c078a98b-9a33-4eaf-a5cf-e5ebf3ea450c/v1/fadesarrolloweb.com.ar/Flavio%20Arzamendia%20Desarrollador%20Web/Conoce%20a%20Flavio%20Arzamendia%2C%20desarrollador%20web%20freelance%20en%20Buenos%20Aires.%20Descubre%20servicios%20de%20dise%C3%B1o%20web%2C%20apps%20y%20SEO./https%3A%2F%2Fcdn.theopengraph.com%2Fproduction%2Fdocuments%2Fd564a463-1c51-4259-991d-0d17bf3e0391.jpg%3Ftoken%3D-hKrjcO4EFDmPh0lgxSanJdH2MZ9gYnfw4V87WUckbA%26height%3D800%26width%3D1200%26expires%3D33239188519/og.png"/>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />




    </Head>
    <Header />

    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15}}
        animate ={{opacity: 1, y: 0}}
        exit={{ opacity: 0, y:15}}
        transition={{delay: 0.2}}
      >
        {children}
       <GoogleAnalytics gaId="G-QNM1ZEZSX5"/>
    </motion.div>

    </AnimatePresence>
    <Footer />

    
    </>
  )
}

export default Layout