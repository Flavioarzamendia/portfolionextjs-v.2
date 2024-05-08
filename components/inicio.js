import Link from "next/link"
import Image from "next/image";
import {motion} from "framer-motion";
import {CheckIcon} from "@heroicons/react/24/outline";








const Inicio = () => {
  return (
  
    <>
    <div className="bg-white font-sans leading-normal tracking-normal mx-auto">
      <header className="bg-white text-gray-700 py-12 lg:py-20">
        <motion.div 
          
          className="container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2  items-center justify-between gap-8 py-20">
            <motion.div
              initial={{ opacity: 0, x: -15}}
              animate ={{opacity: 1, x: 0}}
              exit={{ opacity: 0, x:-15}}
              transition={{delay: 0.2}}
             className="flex-1 mb-0 md:mb-0 px-auto">
              <h1 className="text-6xl text-blue-600 text-center  md:text-left md:text-5xl lg:text-7xl font-bold leading-tight 
              mb-14 font-sans mt-0"
              >TU SITIO WEB PROFESIONAL</h1>
              <p className="text-2xl leading-10 md:text-3xl md:text-left md:p-0 mb-20   font-sans font-semibold text-center px-10" >
              Transforma tu presencia en línea con un sitio web profesional y atractivo. Como desarrollador web freelance en Buenos Aires,
               Argentina, especializado en diseño web y funcionalidades avanzadas, estamos listos para llevar tu marca al siguiente nivel.
               Contáctanos para empezar!.
              </p>
            
              <div className="flex md  flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-4 w-full px-auto">
                <Link
                  className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
                  font-sans md:text-3xl lg:text-3xl uppercase inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]"
                  href="/contacto"
                  alt="contacto"
                  
                >
                  Contacto
                </Link>
                <Link
                  className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
                  font-sans md:text-3xl lg:text-3xl uppercase inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-slate-800 border border-white text-white font-bold rounded-lg hover:bg-gray-700 hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  href="/proyectos"
                  alt="proyectos"
                >
                  ver Proyectos
                </Link>
              </div>
            </motion.div>
            <div
             className="flex-1 sm:float-none md:mt-14 mb-0">
              <Image
              
              loading='eager'
              src="/img/hero.jpg"
                alt="Hero Image web developer"
                className="w-full rounded-xl lg:rounded-2xl lg:ml-0 mx-auto"
                height={480}
                width={854}
                quality={75}
                
                style={{
                  aspectRatio: "16 / 9",
                  objectFit: "cover",
                }}
                
              />
            </div>
          </div>
        </motion.div>
      </header>


      <section className="bg-gray-900 text-white py-12 md:py-40 mb-0" >
        <div className="container mx-auto px-4 md:px-8 ">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex-1 mb-8 md:mb-0 lg:mr-8 ">
              <Image
                loading='lazy'
                alt="About Me fadesarrolloweb"
                className="w-full  mx-auto rounded-xl md:mb-14 lg:mb-0 lg:w-full "
                height={450}
                width={800}
                src="/img/sobremi.jpg"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                
              />
            </div>
            <div className="flex-1 p-4 mx-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl  text-center md:text-left  lg:text-5xl font-bold mb-14 uppercase">Sobre mí</h2>
              <p className="text-2xl md:text-3xl md:text-left text-gray-400 mb-14 leading-10">
              ¡Hola! Soy Flavio Arzamendia, un apasionado Desarrollador Web Freelance con sede en Buenos Aires,
               Argentina. Mi experiencia abarca el diseño y desarrollo de sitios web personalizados que se adaptan
              a las necesidades específicas de mis clientes. Me especializo en tecnologías como HTML, CSS, JavaScript
              y WordPress, lo que me permite ofrecer soluciones versátiles y efectivas para empresas y emprendedores
               que buscan destacar en línea.
              </p>
              <p className="text-2xl md:text-3xl md:text-left text-gray-400 mb-20 leading-10">
              Mi compromiso va más allá de crear sitios web visualmente atractivos. Me enfoco en desarrollar sitios responsivos,
               optimizados para SEO y centrados en la experiencia del usuario. Esto incluye la creación de páginas web personalizadas,
                integración de funcionalidades avanzadas como formularios de contacto, registro, suscripción, e-commerce, entre otros.
              </p>
              <Link
                className="font-sans lg:text-3xl uppercase inline-flex items-center justify-center w-full md:w-auto px-6 py-3  text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]
                transition ease-in-out delay-150 bg-blue-600 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300"
                href="/sobremi"
                alt="sobremi"
              >
                Mas Sobre Mí
              </Link>
            </div>
          </div>
        </div>
      </section>




      <section className="bg-white  py-12 md:py-20" >
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl  font-bold text-center mb-8  text-gray-900 uppercase">SOLUCIONES WEB A MEDIDA</h2>
          <h3 className="text-xl md:text-2xl  font-semibold  text-center mb-20 md:mb-32 px-10 ">
          Nuestros servicios están diseñados para ayudarte a destacar en línea con soluciones personalizadas y efectivas.
           
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            <div className="bg-gray-900 rounded-md shadow-lg overflow-hidden text-white md:col-span-2 lg:col-span-1">
              <Image
                loading='lazy'
                
                alt="Web Design"
                className="w-full  object-cover"
                height={338}
                width={600}
                src="/img/diseñoweb.jpg"
                style={{
                  aspectRatio: "16 / 9",
                  objectFit: "cover",
                }}
               
              />
              <div className="p-6 px-14">
                <h3 className="text-3xl lg:text-4xl font-bold mb-8 ">Diseño y Desarrollo de Sitios Web</h3>
                <p className="text-gray-200 mb-6 text-2xl leading-10">
                Ofrezco la creación de sitios web simples y efectivos mediante diversas herramientas de desarrollo web.
                 Personalizo diseños básicos para adaptarlos a las necesidades iniciales del cliente, proporcionando soluciones
                 prácticas y económicas.
                </p>
                
              </div>
            </div>
            <div className="bg-gray-900 rounded-md shadow-lg overflow-hidden text-white">
              <Image
                loading='lazy'
                
                alt="SEO Optimizacion"
                className="w-full object-cover"
                height={338}
                width={600}
                src="/img/seo.jpg"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                
              />
              <div className="p-6 px-14 ">
                <h3 className="text-3xl lg:text-4xl font-bold mb-10 ">Optimización de SEO</h3>
                <p className="text-gray-200 mb-6 text-2xl leading-10">
                Mejora del posicionamiento en motores de búsqueda mediante la investigación de palabras clave,
                 la optimización de contenido y la configuración de enlaces internos, garantizando una mayor visibilidad
                  y tráfico orgánico para el sitio web del cliente.
                </p>
                
              </div>
            </div>
            <div className="bg-gray-900 rounded-md shadow-lg overflow-hidden text-white">
              <Image
                loading='lazy'
                
                alt="Actualizacion y mantenimiento"
                className="w-full object-cover"
                height={338}
                width={600}
                src="/img/mantenimiento.jpg"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                
              />
              <div className="p-6 px-14">
                <h3 className="text-3xl lg:text-4xl font-bold mb-10">Mantenimiento y Actualización</h3>
                <p className="text-gray-200 mb-6 text-2xl leading-10">
                Realizo tareas esenciales de mantenimiento, como copias de seguridad, actualizaciones de 
                software y soporte técnico continuo. Garantizo el correcto funcionamiento, seguridad y actualización
                 del sitio web del cliente.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-gray-900 text-white py-20 md:py-20 " >
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl  font-bold text-center mb-8 uppercase">PROYECTOS DESTACADOS</h2>
          <h3 className="text-xl md:text-2xl  font-semibold  text-center mb-20 md:mb-32 px-10 ">
          Explora algunos de nuestros proyectos destacados que demuestran nuestra experiencia en el diseño y desarrollo
           de sitios web profesionales y efectivos.
            </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            <div className="bg-white rounded-md shadow-lg overflow-hidden md:col-span-2 lg:col-span-1">
              <Image
                loading='lazy'
                
                alt="Podcas fm proyecto"
                className="w-full  object-cover"
                height={480}
                width={854}
                src="/img/proyect1.png"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                
              />
              <div className="p-6 px-10">
                <h3 className="text-3xl lg:text-4xl font-bold mb-10 text-gray-900 uppercase ">Podcast fm</h3>
                <p className="text-gray-600 mb-6 leading-10 text-2xl font-semibold">Presentación atractiva de la plataforma de podcasts, resaltando
                 su variedad de programas, y potencial de negocio facilidad de uso y opciones de suscripción.
                </p>
                <Link
                  className=" uppercase inline-flex my-10 items-center justify-center w-full px-4 py-2 bg-blue-600
                   text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-[#8B5CF6] transition ease-in-out    duration-300"
                  href="https://preeminent-peony-3cdb45.netlify.app/"
                  target="_blank"
                  att="ver más"
                >
                  Ver proyectos
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-lg overflow-hidden">
              <Image
                loading='lazy'
                
                alt="App delivey proyecto"
                className="w-full  object-cover"
                height={480}
                width={854}
                src="/img/proyect2.png"
                style={{
                  aspectRatio: "16 / 9",
                  objectFit: "cover",
                }}
                
              />
              <div className="p-6 px-10">
                <h3 className="text-3xl lg:text-4xl font-bold mb-10 text-gray-900 uppercase">APP Delivery</h3>
                <p className="text-gray-600 mb-6 leading-10 text-2xl font-semibold">Mostrar de manera visual y atractiva la plataforma de entrega
                 de aplicaciones móviles, resaltando su facilidad de uso y seguridad en transacciones.
                </p>
                <Link
                  className=" uppercase inline-flex my-10 items-center justify-center w-full px-4 py-2 bg-blue-600 
                  text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                   focus:ring-[#8B5CF6] transition ease-in-out    duration-300"
                  href="https://fluffy-chebakia-04223c.netlify.app/"
                  target="_blank"
                  alt="ver más"
                >
                  Ver proyectos
                </Link>
              </div>
            </div>
            <div className="bg-white  rounded-md shadow-lg overflow-hidden">
              <Image
                loading='lazy'
                
                alt="Airbnb web estilo proyecto"
                className="w-full object-cover"
                height={480}
                width={854}
                src="/img/proyect3.png"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                
              />
              <div className="p-6 px-10">
                <h3 className="text-3xl lg:text-4xl text-gray-900 font-bold mb-10 uppercase">Web Estilo Airbnb</h3>
                <p className="text-gray-600 mb-6 leading-10 text-2xl font-semibold">
                Presentación visual de la plataforma de alquiler de propiedades, destacando sus características únicas,
                 como búsqueda intuitiva.
                </p>
                <Link
                  className=" uppercase inline-flex my-10 items-center justify-center w-full px-4 py-2 bg-blue-600
                   text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-[#8B5CF6] transition ease-in-out duration-300 "
                  href="https://whimsical-starship-02dd94.netlify.app/"
                  target="_blank"
                  alt="ver más"
                >
                  Ver proyectos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white  py-20 md:pt-20 m">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl  font-bold text-center mb-8  uppercase text-gray-900">PLANES Y TARIFAS</h2>
          <h3 className="text-xl md:text-2xl  font-semibold  text-center mb-20 md:mb-32 px-10 ">
          Explora nuestros planes y tarifas, y contáctanos para un presupuesto personalizado
            </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden order-2
            transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-300
            ">
              <div className="p-6 bg-blue-600 text-white text-center">
                <h3 className="text-4xl font-bold mb-4">Plan Básico</h3>
                <p className="text-6xl font-bold mb-4">$99</p>
                <p className="mb-6">Desde USD</p>
              </div>
              <div className="p-6 px-10">
                <ul className="space-y-8 mb-10 text-white ">
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>Diseño básico y funcional.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10  mr-2 text-green-500" />
                    <span>Hasta 5 páginas.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10  mr-2 text-green-500" />
                    <span>Formulario de contacto básico(nombre, correo,mensaje)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10  mr-2 text-green-500" />
                    <span>Integración básica con redes sociales.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10  mr-2 text-green-500" />
                    <span>Soporte técnico limitado.</span>
                  </li>
                </ul>
                <Link
                  className="block text-center mb-8  items-center justify-center px-4 py-2  bg-blue-600 text-white
                   font-bold rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-[#8B5CF6] transition ease-in-out    duration-300 uppercase"
                  href="/contacto"
                  alt="solicitar informacion"
                >
                  Contactar ahora
                </Link>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden order-1 md:col-span-2 lg:col-span-1 lg:order-2
              transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-300 ">
              <div className="p-6 bg-[#32CD32] text-gray-900 text-center">
                <h3 className="text-4xl font-bold mb-4">Plan Pro</h3>
                <p className="text-6xl font-bold mb-4">$399</p>
                <p className="mb-6">Desde USD</p>
              </div>
              <div className="p-6 px-10">
                <ul className="space-y-8 mb-10 text-white">
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>Diseño premium y altamente personalizado.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>Funcionalidades avanzadas (e-commerce, membresías).</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>SEO avanzado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>Optimizacion de Velocidad.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>Soporte técnico prioritario</span>
                  </li>
                </ul>
                <Link
                  className="block text-center mb-8  items-center justify-center text-gray-900  px-4 py-2  bg-[#32CD32] 
                   font-bold rounded-xl hover:bg-[#3d9d3d] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-[#8B5CF6] transition ease-in-out    duration-300 uppercase"
                  href="/contacto"
                  alt="Solicitar Información"
                >
                  Contactar ahora
                </Link>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden order-3 
            transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-300 ">
              <div className="p-6 bg-blue-600 text-white text-center">
                <h3 className="text-4xl font-bold mb-4">Plan Estándar</h3>
                <p className="text-6xl font-bold mb-4">$199</p>
                <p className="mb-6">Desde USD</p>
              </div>
              <div className="p-6 px-10">
                <ul className="space-y-8 mb-10 text-white">
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>Diseño profesional y adaptable.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>Entre 5 y 10 páginas.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>Formularios avanzados(registro,suscripción, etc.)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>Optimización de SEO basico</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>Soporte técnico por correo y chat </span>
                  </li>
                </ul>
                <Link
                  className="block text-center font-bold items-center justify-center mb-8  px-4 py-2 bg-blue-600 text-white
                    rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-[#8B5CF6] transition ease-in-out  duration-300 uppercase"
                  href="/contacto"
                  alt="Solicitar Información"
                >
                  Contactar ahora
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