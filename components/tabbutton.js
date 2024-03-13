'use client';
import {motion} from "framer-motion";

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
  };

const Tabbutton = ({active, selectTab, children}) => {
const buttonClasses = active ? "text-black " : "text-[#726F6F]";
  return (
    <button onClick={selectTab}>
      <p className={`mx-3 font-sans font-semibold hover:text-black ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#6eb5ff] mt-2 mr-3"
      ></motion.div>
    </button>
  )
}

export default Tabbutton