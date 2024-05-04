import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import {motion , AnimatePresence} from "framer-motion";
import {Analytics} from "@vercel/analytics/react";

const Layout = ({children, title='', description=''}) => {
  return (
    <>
    
    <Head>
        <title>{`Flavio Arzamendia - ${title}`}</title>
        <meta
          name="description"
          content={description}
          
        />
        <meta property="og:url" content="https://www.fadesarrolloweb.com.ar/"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:image" content=""></meta>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="fadesarrolloweb.com.ar"/>
        <meta property="twitter:url" content="https://www.fadesarrolloweb.com.ar/"/>
        <meta name="twitter:image" content=""></meta>

    </Head>
    <Header />

    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15}}
        animate ={{opacity: 1, y: 0}}
        exit={{ opacity: 0, y:15}}
        transition={{delay: 0.25}}
      >
        <Analytics/>
        {children}
    </motion.div>

    </AnimatePresence>
    <Footer />

    
    </>
  )
}

export default Layout