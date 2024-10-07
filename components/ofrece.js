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
                <h1 className="text-4xl text-[#2B7CB3] font-bold md:text-5xl lg:text-7xl mb-20 uppercase">
                Desarrollo Web para tu Negocio
                </h1>
               
                </div>
                
                
                <div className=" space-y-4 md:space-y-6 font-normal">
                <p className="max-w-[600px] text-gray-800 text-2xl md:text-3xl -gray-400 leading-10">
                    Ofrezco <strong>desarrollo web freelance en Buenos Aires</strong>, enfocado en destacar tu negocio en línea. Utilizo <strong>Next.js, WordPress, Shopify, Tienda Nube</strong> y más, para garantizar rendimiento óptimo y seguridad.
                </p>

                <p className="max-w-[600px] text-gray-800 text-2xl md:text-3xl -gray-400 leading-10">
                  Mi enfoque es <strong>comprender tus objetivos</strong> y crear un sitio web a medida con <strong>diseño responsivo</strong> y <strong>SEO avanzado</strong>.
                </p>

                <p className="max-w-[600px] text-gray-800 text-2xl md:text-3xl -gray-400 leading-10">
                  Te ayudo a lograr una <strong>presencia en línea efectiva</strong> con estrategias personalizadas para <strong>sobresalir en tu mercado</strong> y alcanzar un <strong>crecimiento sostenible</strong>.
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
          <div className="bg-white rounded-md shadow-lg overflow-hidden text-black md:col-span-2 lg:col-span-1">
                <Image
                  loading="lazy"
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
                  <h3 className="text-3xl lg:text-4xl font-bold mb-8 ">
                    Servicios de Diseño y Desarrollo Web
                  </h3>
                  <p className="text-gray-700 mb-4 text-2xl leading-10">
                    <strong>
                      Diseño y Desarrollo de Sitios Web Modernos y Funcionales:
                    </strong>{" "}
                    utilizando <strong>HTML</strong>, <strong>CSS</strong>,{" "}
                    <strong>JavaScript</strong> y frameworks como{" "}
                    <strong>Next.js</strong> para diseñar soluciones web
                    adaptadas a las necesidades de negocios locales e
                    internacionales.
                  </p>

                  <p className="text-gray-700 mb-6 text-2xl leading-10">
                    Trabajamos con <strong>abogados</strong>,{" "}
                    <strong>médicos</strong>, <strong>terapeutas</strong>,{" "}
                    <strong>educadores online</strong>,{" "}
                    <strong>empresas de turismo</strong> y{" "}
                    <strong>PyMES</strong>. Contactanos para crear un sitio web
                    a medida, diseñado para impulsar tu desarrollo y crecimiento
                    digital.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-md shadow-lg overflow-hidden text-black">
                <Image
                  loading="lazy"
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
                  <h3 className="text-3xl lg:text-4xl font-bold mb-10 ">
                    Optimización de SEO
                  </h3>
                  <p className="text-gray-700 mb-4 text-2xl leading-10">
                    <strong>Optimización SEO Local e Internacional:</strong>{" "}
                    Mejora la visibilidad de tu sitio web con nuestras
                    estrategias avanzadas de SEO.
                  </p>

                  <p className="text-gray-700 mb-4 text-2xl leading-10">
                    Realizamos <strong>análisis de palabras clave</strong>,{" "}
                    <strong>optimización de contenido</strong> y{" "}
                    <strong>técnicas de link building</strong> para atraer más
                    tráfico a tu web.
                  </p>

                  <p className="text-gray-700 mb-4 text-2xl leading-10">
                    Nuestras estrategias SEO están diseñadas para{" "}
                    <strong>profesionales como abogados</strong>,{" "}
                    <strong>médicos</strong>, <strong>terapeutas</strong>,{" "}
                    <strong>educadores online</strong>,{" "}
                    <strong>empresas de turismo</strong> y{" "}
                    <strong>PyMES</strong>, maximizando tu presencia en Google y
                    otros motores de búsqueda.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-md shadow-lg overflow-hidden text-black">
                <Image
                  loading="lazy"
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
                  <h3 className="text-3xl lg:text-4xl font-bold mb-10">
                    Mantenimiento y Actualización
                  </h3>
                  <p className="text-gray-700 mb-4 text-2xl leading-10">
                    <strong>Mantenimiento de Sitios Web:</strong> Garantizamos
                    el óptimo funcionamiento de tu sitio web con nuestros
                    servicios de <strong>actualización</strong>,{" "}
                    <strong>soporte técnico</strong> y{" "}
                    <strong>monitoreo continuo</strong>.
                  </p>

                  <p className="text-gray-700 mb-6 text-2xl leading-10">
                    En <strong>WordPress</strong>, <strong>Shopify</strong>,{" "}
                    <strong>Tienda Nube</strong> y soluciones a medida,
                    ofrecemos <strong>mantenimiento proactivo</strong> para{" "}
                    <strong>PYMES</strong> y profesionales en{" "}
                    <strong>Argentina</strong> y <strong>Latinoamérica</strong>.
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
          <div
                className="bg-white rounded-lg shadow-lg overflow-hidden order-2
            transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-105 lg:duration-300
            "
              >
                <div className="p-6 bg-blue-600 text-white text-center">
                  <h3 className="text-4xl font-bold mb-4">
                    Sitio Web de Entrada
                  </h3>
                  <p className="text-6xl font-bold mb-4">Plan Básico</p>
                </div>
                <div className="p-6 px-10 py-20">
                  <ul className="space-y-8 mb-20 lg:text-2xl font-semibold">
                    <li className="flex items-center">
                      <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                      <span>Diseño simple y profesional.</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-10 w-10  mr-2 text-green-500" />
                      <span>Hasta 5 páginas estáticas.</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-10 w-10  mr-2 text-green-500" />
                      <span>Formularios de contacto integrados.</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-10 w-10  mr-2 text-green-500" />
                      <span>Optimización móvil.</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-10 w-10  mr-2 text-green-500" />
                      <span>SEO local específico.</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mt-10 text-lg">
                        Ideal para PYMES y profesionales que están empezando.
                      </span>
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

              <div
                className="bg-white rounded-lg shadow-lg overflow-hidden order-1 md:col-span-2 lg:col-span-1 lg:order-2
              transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-300 "
              >
                <div className="p-6 bg-[#32CD32] text-gray-900 text-center">
                  <h3 className="text-4xl font-bold mb-4">
                    E-commerce Completo
                  </h3>
                  <p className="text-6xl font-bold mb-4">Plan Tienda Online</p>
                </div>
                <div className="p-6 px-10 py-20">
                  <ul className="space-y-8 mb-20 lg:text-2xl font-semibold">
                    <li className="flex items-center">
                      <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                      <span>Navegación intuitiva.</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                      <span>Experiencia de usuario personalizada.</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                      <span>Envíos y seguimiento detallado.</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                      <span>SEO avanzado.</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                      <span>Integración de redes sociales.</span>
                    </li>
                    <li className="flex items-center ">
                      <span className="mt-10 text-lg">
                        Ideal para PYMES y emprendedores que desean expandir sus
                        ventas online.
                      </span>
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

              <div
                className="bg-white rounded-lg shadow-lg overflow-hidden order-3 
                   transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-105 lg:duration-300  "
                >
                <div className="p-6 bg-blue-600 text-white text-center">
                  <h3 className="text-4xl font-bold mb-4">
                    Sitio Web con Personalidad
                  </h3>
                  <p className="text-6xl font-bold mb-4">Plan Profesional</p>
                </div>
                <div className="p-6 px-10 py-20">
                  <ul className="space-y-8 mb-20 lg:text-2xl font-semibold">
                    <li className="flex items-center">
                      <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                      <span>Diseño atractivo y personalizado.</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                      <span>Hasta 10 páginas.</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                      <span>Integración de redes sociales y blog.</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                      <span>SEO avanzado.</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-10 w-10 mr-2 text-green-500" />
                      <span>Galería de imágenes o portafolio.</span>
                    </li>

                    <li className="flex items-center ">
                      <span className="mt-10 text-lg">
                        Ideal para PYMES y profesionales que desean destacarse.
                      </span>
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
      </>
  )
}

export default Ofrece
