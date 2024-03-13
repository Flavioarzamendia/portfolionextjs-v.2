
import Image from "next/image";
import {TypeAnimation} from "react-type-animation";
import {motion} from "framer-motion";

const Inicio = () => {
  return (
    <>
    <section className=" lg:mx-14 lg:py-16  py-32">
      <div className="grid grid-cols-1 sm:grid-cols-12 md:py-2 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-[#E8AD08]  mb-4 lg:mt-24 text-6xl  py-14 md:text-7xl lg:text-9xl  font-extrabold">
            <span className="text-[#141414] bg-clip-text py-14">
              Hola!, Soy Flavio{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "Dev. Frontend",
                1000,
                "Dev. Wordpress",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#3e3f40]  text-xl sm:text-lg mb-6 lg:text-3xl pt-5 font-sans font-semibold py-10">
          Desarrollador web Frontend especializado en Wordpress, HTML5, CSS3, JavaScript y React.
          </p>
          <div className="px-2 py-20">
            <button className=" px-1 py-2 w-full sm:w-fit rounded-lg mr-4  text-black font-sans font-semibold text-3xl">
              <span className="block bg-[#E8AD08] hover:bg-[#67be67] hover:text-white rounded-lg px-7 py-5">
              <a
                href="https://www.linkedin.com/in/flavio-arzamendia-salinas"
                target="_blank"
              >
                Visita Mi Linkedin
              </a>
              </span>
            </button>
            <button className="px-0.5 py-2 w-full sm:w-fit rounded-lg   mt-3 text-black font-sans font-semibold text-3xl">
              <span className="block bg-[#E8AD08] hover:bg-[#67be67] hover:text-white rounded-lg px-7 py-5">
                <a href="https://github.com/Flavioarzamendia" target="_blank">
                  Visita Mi GitHub
                </a>
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#1e1e1f] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative  mt-24 mb-10 lg:mt-0 lg:mb-0">
            <Image
              src="/img/fadesarrolloweb.png"
              alt="hero image"
              title="Working web developer"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
    </>
  )
}

export default Inicio