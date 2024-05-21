import {CheckIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const   Ofrece = () => {
  return (
    <>
 <section className="w-full py-12 md:py-24 lg:py-32 mt-0 bg-gray-900 font-sans">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4 px-10 ">
              <div className="space-y-5 mb-10 ">
                <div className="mb-14">
                <h1 className="text-6xl text-white font-bold sm:text-5xl lg:text-7xl mb-6">
                Soluciones Personalizadas
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold text-white uppercase ">Desarrollo Web para Tu Negocio en Buenos Aires</h2>
                </div>
                
                
                <div className=" space-y-5">
                <p className="max-w-[600px] text-gray-500 md:text-3xl -gray-400 leading-10">
                Ofrezco servicios de desarrollo web diseñados para resaltar tu negocio en línea, utilizando tecnologías
                 modernas para un rendimiento óptimo y seguridad. Como desarrollador web freelance, mi enfoque es comprender
                  tus objetivos y crear un sitio web adaptado a tus necesidades, incluyendo diseño web responsivo y optimización SEO.
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-3xl -gray-400 leading-10">
                Trabajo contigo para crear una presencia en línea efectiva y funcional, utilizando estrategias personalizadas que te ayuden a 
                sobresalir en tu mercado y lograr un crecimiento sostenible en línea.
                </p>
                </div>
                
              </div>
              <Link
                className="uppercase inline-flex lg:w-96 my-10 items-center justify-center w-full px-4 py-2 bg-[#ff7f00]
                text-white font-bold rounded-md hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2
                 focus:ring-[#8B5CF6] transition ease-in-out duration-300"
                href="#servicios" alt="Explorar Planes"
              >
                VER PLANES
              </Link>
            </div>
            <Image
              alt="Hero fa desarrollo web argentina"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square mt-10 md:mt-0"
              height={480}
              width={854}
              src="/img/servicios.jpg"
              
              style={{
                aspectRatio: "16/9",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      <section className="bg-white  py-12 md:py-40 font-sans" >
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-gray-900 uppercase">Servicios</h2>
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
                Mi servicio de Diseño y Desarrollo de Sitios Web se enfoca en crear sitios web simples y efectivos 
                utilizando diversas herramientas de desarrollo web. Realizo la Creación de Páginas Web Personalizadas,
                 asegurando un Diseño y Desarrollo de Sitios Web Responsivos y Optimizados SEO. Desde el diseño inicial
                  hasta la implementación, me aseguro de personalizar cada aspecto para satisfacer las necesidades específicas
                   de mis clientes. Con un enfoque en el Diseño y Desarrollo de Sitios Web para Empresas, ofrezco soluciones
                    profesionales y personalizadas que impulsen la presencia digital de mis clientes en Buenos Aires, Argentina.
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
                  Mi servicio de Optimización de SEO está diseñado para mejorar el posicionamiento
                  en motores de búsqueda mediante la investigación de palabras clave, la optimización
                  de contenido y la configuración de enlaces internos. Realizo un análisis completo de
                  las palabras clave relevantes para tu nicho, optimizo el contenido de tu sitio web
                  y configuro enlaces internos estratégicos para aumentar la visibilidad y el tráfico
                  orgánico de tu sitio web en Buenos Aires, Argentina. Con un enfoque en la Optimización
                  de SEO para Sitios Web en WordPress y el Desarrollo de Sitios Web Optimizados SEO,
                  garantizo resultados duraderos y significativos en línea.
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
                Ofrezco servicios completos de Mantenimiento Web que incluyen tareas esenciales como 
                copias de seguridad, actualizaciones de software y soporte técnico continuo.
                Mi enfoque en el Desarrollo de Sitios Web para Empresas y la Creación de Sitios Web
                Profesionales garantiza el correcto funcionamiento, seguridad y actualización de tu 
                sitio web en Buenos Aires, Argentina. Con un enfoque proactivo, identifico y resuelvo
                cualquier problema potencial para mantener tu sitio web siempre en óptimas condiciones
                y funcionando de manera eficiente.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>


    <section className="bg-gray-900  py-20 md:pt-40 font-sans" id="servicios">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl  font-bold text-center mb-20 uppercase text-white">Desarrollo web</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden order-2
            transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-300
            ">
              <div className="p-6 bg-blue-600 text-white text-center">
              <h3 className="text-4xl font-bold mb-4">Sitio Web de Entrada</h3>
                <p className="text-6xl font-bold mb-4">Plan Básico</p>
              </div>
              <div className="p-6 px-10">
                <ul className="space-y-8 mb-10  ">
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
                   font-bold rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-[#8B5CF6] transition ease-in-out duration-300 uppercase"
                  href="/contacto" alt="Solicitar Información"
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
              <div className="p-6 px-10">
                <ul className="space-y-8 mb-10 ">
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
                    <span>Envíos y seguimiento  detallado</span>
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
                  className="block text-center mb-8  items-center justify-center  px-4 py-2  bg-[#32CD32] text-gray-900
                   font-bold rounded-xl hover:bg-[#3d9d3d]  focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-[#8B5CF6] transition ease-in-out    duration-300 uppercase"
                  href="/contacto" alt="Solicitar Información"
                >
                  Solicitar Presupuesto
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden order-3 
            transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-300 ">
              <div className="p-6 bg-blue-600 text-white text-center">
              <h3 className="text-4xl font-bold mb-4">Sitio Web con Personalidad</h3>
                <p className="text-6xl font-bold mb-4">Plan Profesional</p>
              </div>
              <div className="p-6 px-10">
                <ul className="space-y-8 mb-10">
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
                  className="block text-center items-center justify-center mb-8  px-4 py-2 bg-blue-600 text-white
                   font-bold rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-[#8B5CF6] transition ease-in-out  duration-300 uppercase"
                  href="/contacto" alt="Solicitar Información"
                >
                  Solicitar Presupuesto
                </Link>
              </div>
            </div>
           
          </div>
        </div>
      </section>
      </>
  )
}

export default Ofrece
