import Link from "next/link"
import Image from "next/image";
import {motion} from "framer-motion"

const Inicio = () => {
  return (
  
    <>
    <div className="bg-white font-sans leading-normal tracking-normal mx-auto">
      <header className="bg-white text-gray-700 py-12 lg:py-20">
        <motion.div 
          
          className="container mx-auto px-4 md:px-20">
          <div className="flex flex-col  md:flex-row items-center justify-between gap-8 py-20">
            <motion.div
              initial={{ opacity: 0, x: -15}}
              animate ={{opacity: 1, x: 0}}
              exit={{ opacity: 0, x:-15}}
              transition={{delay: 0.5}}
             className="flex-1 mb-8 md:mb-0 px-auto">
              <h1 className="text-6xl text-blue-500 text-center  md:text-left md:text-5xl lg:text-7xl font-bold leading-tight mb-14 font-sans mt-20">TU SITIO WEB PROFESIONAL</h1>
              <p className="text-2xl md:text-3xl md:text-left md:p-0  mb-40 lg:mb-64 font-sans font-semibold text-center px-10" >Transforma tu presencia en línea con una página web profesional y
               atractiva. Desde un diseño elegante hasta funcionalidades avanzadas, podemos crear una experiencia digital que destaque tu marca
                y atraiga a tus clientes
              </p>
              <div className="flex  flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-4 w-full px-auto">
                <Link
                  className=" font-sans md:text-3xl lg:text-3xl uppercase inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]"
                  href="/contacto"
                  
                >
                  Contacto
                </Link>
                <Link
                  className=" font-sans md:text-3xl lg:text-3xl uppercase inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-gray-600 border border-white text-white font-medium rounded-lg hover:bg-gray-700 hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  href="/proyectos"
                >
                  ver Proyectos
                </Link>
              </div>
            </motion.div>
            <div
             className="flex-1 sm:float-none">
              <Image
              loading='lazy'
              src="/img/hero.jpg"
                alt="Hero Image"
                className="w-full   rounded-xl lg:rounded-2xl md:ml-16  lg:ml-0 mx-auto"
                height={720}
                width={1280}
                style={{
                  aspectRatio: "16 / 9",
                  objectFit: "cover",
                }}
                
              />
            </div>
          </div>
        </motion.div>
      </header>


      <section className="bg-gray-900 text-white py-12 md:py-40" >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 mb-8 md:mb-0 md:mr-8">
              <Image
                loading='lazy'
                alt="About Me"
                className="w-full md:w-3/4 mx-auto rounded-md"
                height="720"
                src="/img/fadesarrolloweb.jpg"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                width="1280"
              />
            </div>
            <div className="flex-1 p-4 mx-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl  text-center lg:text-left  lg:text-5xl font-bold mb-14 uppercase">Sobre mí</h2>
              <p className="text-2xl md:text-2xl text-gray-400 mb-6">
              ¡Hola! Soy Flavio, desarrollador web con experiencia en la creación de sitios
               profesionales y atractivos. Con un año de experiencia en HTML, CSS, JavaScript y WordPress,
                puedo ayudarte a materializar tu visión digital
              </p>
              <p className="text-2xl md:text-2xl text-gray-400 mb-20">
              En mi trabajo, me enfoco en brindar soluciones personalizadas y efectivas 
              para tus necesidades web. Estoy aprendiendo y aplicando tecnologías como React 
              para ofrecerte aplicaciones web modernas e interactivas. Mi objetivo es crear experiencias
               digitales que cautiven a tus usuarios y impulsen el éxito de tu negocio en línea.
              </p>
              <Link
                className="font-sans lg:text-3xl uppercase inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]"
                href="/sobremi"
              >
                Mas Sobre Mí
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white  py-12 md:py-40" >
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-900 uppercase">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            <div className="bg-gray-900 rounded-md shadow-lg overflow-hidden text-white">
              <Image
                loading='lazy'
                alt="Web Design"
                className="w-full  object-cover"
                height="720"
                src="/img/webdesing.jpg"
                style={{
                  aspectRatio: "16 / 9",
                  objectFit: "cover",
                }}
                width="1280"
              />
              <div className="p-6">
                <h3 className="text-3xl font-bold mb-4">Web Design</h3>
                <p className="text-gray-200 mb-6 text-2xl">
                  Crafting visually stunning and user-friendly websites that captivate your audience.
                </p>
                <Link
                  className="inline-flex my-10 text-3xl items-center justify-center w-full px-4 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]"
                  href="#"
                >
                  VER MÁS
                </Link>
              </div>
            </div>
            <div className="bg-gray-900 rounded-md shadow-lg overflow-hidden text-white">
              <Image
                loading='lazy'
                alt="Web Development"
                className="w-full object-cover"
                height="720"
                src="/img/webdesing.jpg"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                width="1280"
              />
              <div className="p-6">
                <h3 className="text-3xl font-bold mb-4 ">Web Development</h3>
                <p className="text-gray-200 mb-6 text-2xl">
                  Bringing your vision to life with cutting-edge technologies and robust backend solutions.
                </p>
                <Link
                  className="inline-flex my-10 text-3xl items-center justify-center w-full px-4 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]"
                  href="#"
                >
                  VER MÁS
                </Link>
              </div>
            </div>
            <div className="bg-gray-900 rounded-md shadow-lg overflow-hidden text-white">
              <Image
                loading='lazy'
                alt="Digital Marketing"
                className="w-full object-cover"
                height="720"
                src="/img/webdesing.jpg"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                width="1280"
              />
              <div className="p-6">
                <h3 className="text-3xl font-bold mb-4">Digital Marketing</h3>
                <p className="text-gray-200 mb-6 text-2xl">
                  Amplifying your online presence and driving targeted traffic to your website.
                </p>
                <Link
                  className="inline-flex my-10 text-3xl items-center justify-center w-full px-4 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]"
                  href="#"
                >
                  VER MÁS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-gray-900 text-white py-20 md:py-40 " >
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl  font-bold text-center mb-20 uppercase">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            <div className="bg-white rounded-md shadow-lg overflow-hidden">
              <Image
                loading='lazy'
                alt="Project 1"
                className="w-full  object-cover"
                height="720"
                src="/img/proyect1.png"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                width="1280"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Project 1</h3>
                <p className="text-gray-600 mb-6">A modern and responsive website for a leading technology company.</p>
                <Link
                  className="inline-flex my-10 items-center justify-center w-full px-4 py-2 bg-[#8B5CF6] text-white font-medium rounded-md hover:bg-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]"
                  href="#"
                >
                  Ver Más Proyectos
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-lg overflow-hidden">
              <Image
                loading='lazy'
                alt="Project 2"
                className="w-full  object-cover"
                height="720"
                src="/img/proyect2.png"
                style={{
                  aspectRatio: "16 / 9",
                  objectFit: "cover",
                }}
                width="1280"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Project 2</h3>
                <p className="text-gray-600 mb-6">A sleek and user-friendly e-commerce platform for a fashion brand.</p>
                <Link
                  className="inline-flex my-10 items-center justify-center w-full px-4 py-2 bg-[#8B5CF6] text-white font-medium rounded-md hover:bg-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]"
                  href="#"
                >
                  Ver Más Proyectos
                </Link>
              </div>
            </div>
            <div className="bg-white  rounded-md shadow-lg overflow-hidden">
              <Image
                loading='lazy'
                alt="Project 3"
                className="w-full object-cover"
                height="720"
                src="/img/proyect3.png"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                width="1280"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Project 3</h3>
                <p className="text-gray-600 mb-6">
                  A visually stunning and highly interactive website for a creative agency.
                </p>
                <Link
                  className="inline-flex my-10 items-center justify-center w-full px-4 py-2 bg-[#8B5CF6] text-white font-medium rounded-md hover:bg-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]"
                  href="#"
                >
                  Ver Más Proyectos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  



    </>
  
  )
}

export default Inicio