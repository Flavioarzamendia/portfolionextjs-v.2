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
              <h1 className="text-6xl text-[#2B7CB3] text-center uppercase  md:text-left md:text-5xl lg:text-7xl font-bold leading-tight 
              mb-14 font-sans mt-0"
              >Flavio Arzamendia <span className="block text-5xl normal-case text-gray-900 mt-4 font-semibold">
                Desarrollador Web Freelance en Buenos Aires.</span>
              </h1>
              <p className="text-2xl leading-10 md:text-3xl md:text-left md:p-0 mb-20   font-sans font-semibold  px-10" >
              Transforma tu presencia en línea con un sitio web profesional y atractivo. Soy Flavio Arzamendia, desarrollador web freelance
               en Buenos Aires, especializado en diseño y desarrollo web. Contáctame para empezar hoy mismo.
              </p>
            
              <div className="flex md  flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-4 w-full px-auto">
                <Link
                  className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
                  font-sans md:text-3xl lg:text-3xl uppercase inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-[#3d9d3d] text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]"
                  href="/contacto"
                  alt="contacto"
                  title="Solicitar presupuesto"
                  
                >
                  Solicitar presupuesto
                </Link>
                
              </div>
            </motion.div>
            <div
             className="flex-1 sm:float-none md:mt-14 mb-0">
              <Image
              
              loading='eager'
              src="/img/hero.jpg"
                alt="fadesarrolloweb diseño y desarrollo web"
                className="w-full rounded-xl lg:rounded-2xl lg:ml-0 mx-auto"
                height={480}
                width={854}
                quality={50}
                
                style={{
                  aspectRatio: "16 / 9",
                  objectFit: "cover",
                }}
                
              />
            </div>
          </div>
        </motion.div>
      </header>


      <section className="bg-[#2C3E50] text-white py-12 md:py-40 mb-0" >
        <div className="container mx-auto px-4 md:px-8 ">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex-1 mb-8 md:mb-0 lg:mr-8 ">
              <Image
                loading='lazy'
                alt="Sobre mi fadesarrolloweb"
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
              <p className="text-2xl md:text-3xl text-left text-gray-200 mb-14 leading-10">
              ¡Hola! Soy Flavio Arzamendia, un apasionado Desarrollador Web Freelance con sede en Buenos Aires, Argentina. Mi 
              experiencia abarca el diseño y desarrollo de sitios web personalizados que se adaptan a las necesidades específicas
               de mis clientes.
              </p>
              <p className="text-2xl md:text-3xl text-left text-gray-200 mb-20 leading-10">
              Me especializo en tecnologías como HTML, CSS, JavaScript y WordPress, lo que me permite
               ofrecer soluciones versátiles y efectivas para empresas y emprendedores que buscan destacar en línea.
              </p>
              <p className="text-2xl md:text-3xl text-left text-gray-200 mb-20 leading-10">
              Mi compromiso va más allá de crear sitios web visualmente atractivos. Me enfoco en desarrollar sitios responsivos,
               optimizados para SEO y centrados en la experiencia del usuario. Esto incluye la creación de páginas web personalizadas,
                integración de funcionalidades avanzadas como formularios de contacto, registro, suscripción, e-commerce, entre otros.
              </p>
              <Link
                className="font-sans lg:text-3xl uppercase inline-flex items-center justify-center w-full md:w-auto px-6 py-3  text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]
                transition ease-in-out delay-150 bg-[#2B7CB3] hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300"
                href="/sobremi"
                alt="sobremi"
                title="Sobre mi"
              >
                Más Sobre Mí
              </Link>
            </div>
          </div>
        </div>
      </section>




      <section className="bg-white  py-12 md:py-20" >
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl  font-bold text-center mb-8  text-gray-900 uppercase">Impulsando tu Presencia Online</h2>
          <h3 className="text-xl md:text-2xl  font-semibold  text-center mb-20 md:mb-32 px-10 ">
          Creamos soluciones web a medida para que tu marca se destaque y obtenga resultados excepcionales en Internet.
           
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            <div className="bg-[#2C3E50] rounded-md shadow-lg overflow-hidden text-white md:col-span-2 lg:col-span-1">
              <Image
                loading='lazy'
                
                alt="Diseño y desarollo web freelance en Buenos Aires Argentina"
                className="w-full  object-cover"
                height={338}
                width={600}
                src="/img/diseñoweb.jpg"
                style={{
                  aspectRatio: "16 / 9",
                  objectFit: "cover",
                }}
               
              />
              <div className="p-6 px-14 mt-10">
                <h3 className="text-3xl lg:text-4xl font-bold mb-8 ">Servicios de Diseño y Desarrollo Web</h3>
                <p className="text-gray-200 mb-6 text-2xl leading-10">
                Ofrezco servicios profesionales de diseño y desarrollo web. Con herramientas avanzadas, creo sitios
                 web efectivos y personalizados para satisfacer las necesidades de cada cliente. Mi enfoque se centra
                  en la calidad del desarrollo web, proporcionando soluciones que se destacan en el mercado.
                </p>
                

                
              </div>
            </div>
            <div className="bg-[#2C3E50] rounded-md shadow-lg overflow-hidden text-white">
              <Image
                loading='lazy'
                
                alt="SEO Optimizacion web frellance en Buenos Aires Argentina"
                className="w-full object-cover"
                height={338}
                width={600}
                src="/img/seo.jpg"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                
              />
              <div className="p-6 px-14 mt-10">
                <h3 className="text-3xl lg:text-4xl font-bold mb-10 ">Optimización de SEO</h3>
                <p className="text-gray-200 mb-6 text-2xl leading-10">
                Enfocado en optimizar tu presencia en buscadores, me especializo en SEO para impulsar
                 tu posicionamiento en línea. Con investigación de palabras clave detallada, optimización
                  de contenido y configuración de enlaces internos estratégicos, aseguro una mayor visibilidad
                   y tráfico orgánico para tu sitio web, garantizando resultados sobresalientes y un crecimiento
                    constante en línea.
                </p>

               
                
              </div>
            </div>
            <div className="bg-[#2C3E50] rounded-md shadow-lg overflow-hidden text-white">
              <Image
                loading='lazy'
                
                alt="Actualizacion y mantenimiento web en Buenos Aires Argentina"
                className="w-full object-cover"
                height={338}
                width={600}
                src="/img/mantenimiento.jpg"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                
              />
              <div className="p-6 px-14 mt-10">
                <h3 className="text-3xl lg:text-4xl font-bold mb-10">Mantenimiento y Actualización</h3>
                <p className="text-gray-200 mb-6 text-2xl leading-10">
                Ofrezco servicios de mantenimiento y actualización para garantizar el funcionamiento óptimo
                 de tu sitio web. Proporciono soporte técnico y actualizaciones periódicas para mantener tu sitio
                  seguro y actualizado. Mi enfoque en el desarrollo web se traduce en tranquilidad y confianza para mis clientes.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#2C3E50] text-white py-20 md:py-20 " >
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl  font-bold text-center mb-8 uppercase">Proyectos Destacados de Diseño Web Profesional</h2>
          <h3 className="text-xl md:text-2xl  font-semibold  text-center mb-20 md:mb-32 px-10 ">
          Explora nuestra experiencia en el diseño y desarrollo de sitios web efectivos y profesionales.
            </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            <div className="bg-white rounded-md shadow-lg overflow-hidden md:col-span-2 lg:col-span-1">
              <Image
                loading='lazy'
                
                alt="Podcas fm proyecto de fadesarrolloweb"
                className="w-full  object-cover"
                height={480}
                width={854}
                src="/img/proyect1.png"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                
              />
              <div className="p-6 px-10 mt-8">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 uppercase ">Podcast fm</h3>
                <p className="text-gray-600 mb-6 leading-10 text-2xl font-semibold">Presentación atractiva de la plataforma de podcasts, resaltando
                 su variedad de programas, y potencial de negocio facilidad de uso y opciones de suscripción.
                </p>
                <Link
                  className=" uppercase inline-flex my-10 items-center justify-center w-full px-4 py-2 bg-blue-600
                   text-white font-bold rounded-md hover:bg-blue-700 transition ease-in-out  duration-300"
                  href="https://preeminent-peony-3cdb45.netlify.app/"
                  target="_blank"
                  alt="ver más"
                  title="Ver mas proyectos"
                >
                  Ver proyectos
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-lg overflow-hidden">
              <Image
                loading='lazy'
                
                alt="App delivey proyecto de fadesarrolloweb"
                className="w-full  object-cover"
                height={480}
                width={854}
                src="/img/proyect2.png"
                style={{
                  aspectRatio: "16 / 9",
                  objectFit: "cover",
                }}
                
              />
              <div className="p-6 px-10 mt-8">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 uppercase">APP Delivery</h3>
                <p className="text-gray-600 mb-6 leading-10 text-2xl font-semibold">Mostrar de manera visual y atractiva la plataforma de entrega
                 de aplicaciones móviles, resaltando su facilidad de uso y seguridad en transacciones.
                </p>
                <Link
                  className=" uppercase inline-flex my-10 items-center justify-center w-full px-4 py-2 bg-blue-600 
                  text-white font-bold rounded-md hover:bg-blue-700  transition ease-in-out    duration-300"
                  href="https://fluffy-chebakia-04223c.netlify.app/"
                  target="_blank"
                  alt="ver más"
                  title="ver mas proyectos"
                >
                  Ver proyectos
                </Link>
              </div>
            </div>
            <div className="bg-white  rounded-md shadow-lg overflow-hidden">
              <Image
                loading='lazy'
                
                alt="Airbnb web estilo proyecto de fadesarrolloweb"
                className="w-full object-cover"
                height={480}
                width={854}
                src="/img/proyect3.png"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                
              />
              <div className="p-6 px-10 mt-8">
                <h3 className="text-3xl lg:text-4xl text-gray-900 font-bold mb-6 uppercase">Web Estilo Airbnb</h3>
                <p className="text-gray-600 mb-6 leading-10 text-2xl font-semibold">
                Presentación visual de la plataforma de alquiler de propiedades, destacando sus características únicas,
                 como búsqueda intuitiva.
                </p>
                <Link
                  className=" uppercase inline-flex my-10 items-center justify-center w-full px-4 py-2 bg-blue-600
                   text-white font-bold rounded-md hover:bg-blue-700  transition ease-in-out duration-300 "
                  href="https://whimsical-starship-02dd94.netlify.app/"
                  target="_blank"
                  alt="ver más"
                  title="ver mas proyectos"
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
          <h2 className="text-3xl md:text-5xl  font-bold text-center mb-8  uppercase text-gray-900">Descubre Nuestros Planes de Diseño Web</h2>
          <h3 className="text-xl md:text-2xl  font-semibold  text-center mb-20 md:mb-32 px-10 ">
            Explora nuestras opciones y contáctanos para obtener un presupuesto a tu medida.
            </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden order-2
            transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-300
            ">
              <div className="p-6 bg-blue-600 text-white text-center">
                <h3 className="text-4xl font-bold mb-4">Sitio Web de Entrada</h3>
                <p className="text-6xl font-bold mb-4">Plan Básico</p>
                
              </div>
              <div className="p-6 px-10 py-20">
                <ul className="space-y-8 mb-20 lg:text-2xl font-semibold">
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>Diseño de sitio web simple y limpio.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10  mr-2 text-green-500" />
                    <span>Hasta 5 páginas de contenido estático.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10  mr-2 text-green-500" />
                    <span>Integración de formularios de contacto.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10  mr-2 text-green-500" />
                    <span>Optimización para dispositivos móviles.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10  mr-2 text-green-500" />
                    <span>Soporte técnico inicial.</span>
                  </li>
                </ul>
                <Link
                  className="block text-center mb-8  items-center justify-center px-4 py-2  bg-blue-600 text-white
                   font-bold rounded-xl hover:bg-blue-700 transition ease-in-out    duration-300 uppercase"
                  href="/contacto"
                  alt="Contratar plan basico de fadesarrolloweb"
                  title="solicitar presupuesto basico"
                  
                >
                  Solicitar Presupuesto
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden order-1 md:col-span-2 lg:col-span-1 lg:order-2
              transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-300 ">
              <div className="p-6 bg-[#32CD32] text-gray-900 text-center">
                <h3 className="text-4xl font-bold mb-4">E-commerce Completo</h3>
                <p className="text-6xl font-bold mb-4">Plan Tienda Online</p>
                
              </div>
              <div className="p-6 px-10 py-20">
                <ul className="space-y-8 mb-20 lg:text-2xl font-semibold">
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>Navegación intuitiva</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>Personalización de la experiencia de usuario</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>Envíos y seguimiento detallado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>Optimización SEO integrada</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>Integración redes sociales</span>
                  </li>
                </ul>
                <Link
                  className="block text-center mb-8  items-center justify-center text-gray-900  px-4 py-2  bg-[#32CD32] 
                   font-bold rounded-xl hover:bg-[#3d9d3d] hover:text-white  transition ease-in-out    duration-300 uppercase"
                  href="/contacto"
                  alt="Solicitar Información a fadesarrolloweb"
                  title="Solicitar presupuesto pro"
                >
                  Solicitar Presupuesto
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden order-3 
            transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-300  ">
              <div className="p-6 bg-blue-600 text-white text-center">
                <h3 className="text-4xl font-bold mb-4">Sitio Web con Personalidad</h3>
                <p className="text-6xl font-bold mb-4">Plan Profesional</p>
                
              </div>
              <div className="p-6 px-10 py-20">
                <ul className="space-y-8 mb-20 lg:text-2xl font-semibold">
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>Diseño personalizado y atractivo.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>Hasta 10 páginas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>Integración de redes sociales y blog.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>Optimización avanzada para SEO.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                    <span>Galería de imágenes o portafolio.</span>
                  </li>
                  
                </ul>
                <Link
                  className="block text-center font-bold items-center justify-center mb-8  px-4 py-2 bg-blue-600 text-white
                    rounded-xl hover:bg-blue-700  transition ease-in-out  duration-300 uppercase"
                  href="/contacto"
                  alt="Solicitar Información sobre servicio fadesarrolloweb"
                  title="Solicitar presupuesto estandar"
                >
                  Solicitar Presupuesto
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