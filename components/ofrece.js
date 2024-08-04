import {CheckIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const   Ofrece = () => {
  return (
    <>
 <section className="w-full py-12 md:py-24 lg:py-32 mt-0 bg-white font-sans">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4 px-10 ">
              <div className="space-y-5 mb-10 md:mb-10 ">
                <div className=" mb-10 md:mb-10">
                <h1 className="text-4xl text-[#2B7CB3] font-bold md:text-5xl lg:text-7xl mb-20">
                Desarrollo Web para tu Negocio
                </h1>
               
                </div>
                
                
                <div className=" space-y-4 md:space-y-6 font-normal">
                <p className="max-w-[600px] text-gray-800 text-2xl md:text-3xl -gray-400 leading-10">
                Ofrezco <strong>servicios de desarrollo web freelance en Buenos Aires</strong>, diseñados específicamente para resaltar tu negocio en línea. Utilizo tecnologías modernas como <strong>Next.js</strong> y <strong>WordPress</strong> para asegurar un rendimiento óptimo y máxima seguridad.
                </p>

                <p className="max-w-[600px] text-gray-800 text-2xl md:text-3xl -gray-400 leading-10">
                Mi enfoque personalizado consiste en <strong>comprender tus objetivos</strong> y crear un sitio web a medida que incluye <strong>diseño web responsivo</strong> y <strong>optimización SEO avanzada</strong>.
                
                </p>

                <p className="max-w-[600px] text-gray-800 text-2xl md:text-3xl -gray-400 leading-10">
                Trabajo contigo para establecer una <strong>presencia en línea efectiva y funcional</strong>, aplicando estrategias de desarrollo web y SEO personalizadas. Estas estrategias están diseñadas para ayudarte a <strong>sobresalir en tu mercado específico</strong> y lograr un <strong>crecimiento sostenible en línea</strong>.
                </p>
                </div>
                
              </div>
              <Link
                className="uppercase inline-flex lg:w-96 my-10 items-center justify-center w-full px-4 py-2 bg-[#3d9d3d]
                text-white font-bold rounded-md hover:bg-blue-600 hover:text-white transition ease-in-out duration-300"
                href="#servicios" alt="Explorar Planes"
              >
                VER PLANES
              </Link>
            </div>
            <Image
              alt="Servicios fadesarolloweb"
              className="mx-auto aspect-video  overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square mt-20 lg:mt-0"
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

      <section className="bg-[#2C3E50]  py-12 md:py-40 font-sans" >
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-white uppercase">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            <div className="bg-white rounded-md shadow-lg overflow-hidden text-gray-900 md:col-span-2 lg:col-span-1">
              <Image
                loading='lazy'
                
                alt="Diseño y desarolloweb fadesarolloweb"
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
                <h3 className="text-3xl lg:text-4xl font-bold mb-8 ">Diseño y Desarrollo de Sitios Web</h3>
                <p className="text-gray-700 mb-6 text-2xl leading-10">
                Desarrollo de Sitios Web Modernos y Funcionales: Utilizo HTML, CSS, JavaScript y frameworks como Next.js para diseñar soluciones web adaptadas a las necesidades de negocios locales e internacionales. Atendemos a abogados, médicos, terapeutas, educadores online empresas de turismo y PyMES. Contacta a FA Desarrollo Web para crear un sitio web a medida, diseñado para impulsar tu crecimiento digital.
                </p>
                
              </div>
            </div>
            <div className="bg-white rounded-md shadow-lg overflow-hidden text-gray-900">
              <Image
                loading='lazy'
                
                alt="SEO Optimizacion fadesarrolloweb"
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
                <p className="text-gray-700 mb-6 text-2xl leading-10">
                Optimización SEO Local e Internacional: Mejora la visibilidad de tu sitio web con nuestras estrategias avanzadas de SEO. Realizamos análisis de palabras clave, optimización de contenido y técnicas de link building para atraer más tráfico a tu web. Nuestras estrategias SEO están diseñadas para profesionales como abogados, médicos, terapeutas, educadores online, empresas de turismo y PyMES, maximizando tu presencia en Google y otros motores de búsqueda.
                </p>
                
              </div>
            </div>
            <div className="bg-white rounded-md shadow-lg overflow-hidden text-gray-900">
              <Image
                loading='lazy'
                
                alt="Actualizacion y mantenimiento fadesarrolloweb"
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
                <p className="text-gray-700 mb-6 text-2xl leading-10">
                Mantenimiento de Sitios Web: Garantizamos el óptimo funcionamiento de tu sitio web con nuestros servicios de actualización, soporte técnico y monitoreo continuo.En WordPress, Shopify, Tienda Nube y soluciones a medida, ofrecemos mantenimiento proactivo para PYMES y profesionales en Argentina y Latinoamérica.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>


    <section className="bg-white  py-20 md:pt-40 font-sans" id="servicios">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl  font-bold text-center mb-20 uppercase text-gray-900">Desarrollo web</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden order-2
            transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-105 lg:duration-300
            ">
              <div className="p-6 bg-blue-600 text-white text-center">
              <h3 className="text-4xl font-bold mb-4">Sitio Web de Entrada</h3>
                <p className="text-6xl font-bold mb-4">Plan Básico</p>
              </div>
              <div className="p-6 px-10 py-20 ">
                <ul className="space-y-8 mb-20 lg:text-2xl font-semibold">
                <li className="flex items-center ">
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
                   font-bold rounded-xl hover:bg-blue-700  transition ease-in-out duration-300 uppercase"
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
                   font-bold rounded-xl hover:bg-[#3d9d3d]  transition ease-in-out    duration-300 uppercase"
                  href="/contacto" alt="Solicitar Información"
                >
                  Solicitar Presupuesto
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden order-3 
            transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-105 lg:duration-300 ">
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
                  className="block text-center items-center justify-center mb-8  px-4 py-2 bg-blue-600 text-white
                   font-bold rounded-xl hover:bg-blue-700  transition ease-in-out  duration-300 uppercase"
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
