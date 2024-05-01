import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import {motion , AnimatePresence} from "framer-motion";
import {Analytics} from "@vercel/analytics/next"

const Layout = ({children, title='', description=''}) => {
  return (
    <>
    
    <Head>
        <title>{`Flavio Arzamendia - ${title}`}</title>
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