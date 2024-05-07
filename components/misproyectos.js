import Link from "next/link";
import Image from "next/image";

const Misproyectos = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 font-sans">
    <div className=" px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-20 uppercase">Mis Proyectos</h1>
          
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:px-14 md:mt-14">
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link className="absolute inset-0 z-10" href="https://preeminent-peony-3cdb45.netlify.app/" target="_blank">
            <span className="sr-only ">Ver Proyecto</span>
          </Link>
          <Image
            alt="Proyectos de desarrollo web "
            className="object-cover w-full "
            height={480}
            width={854}
            src="/img/proyect1.png"
            style={{
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
            
          />
          <div className="bg-white p-4 ">
            <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Landing page Podcastfm</h3>
            <p className="text-lg md:text-xl text-gray-500 ">Landing responsiva en HTML/CSS</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link className="absolute inset-0 z-10" href="https://fluffy-chebakia-04223c.netlify.app/" target="_blank" alt="ver proyecto">
            <span className="sr-only">View Project</span>
          </Link>
          <Image
            alt="Project 2"
            className="object-cover w-full "
            height={480}
            width={854}
            src="/img/proyect2.png"
            style={{
              aspectRatio: "16 / 9",
              objectFit: "cover",
            }}
            
          />
          <div className="bg-white p-4 ">
            <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Landing App Delivery</h3>
            <p className="text-lg md:text-xl text-gray-500 ">
              
              Landing page moderna eficiente.
            </p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link className="absolute inset-0 z-10" href="https://whimsical-starship-02dd94.netlify.app/" target="_blank" alt="ver proyecto">
            <span className="sr-only">View Project</span>
          </Link>
          <Image
            alt="Project 3"
            className="object-cover w-full "
            height={480}
            width={854}
            src="/img/proyect3.png"
            style={{
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
            
          />
          <div className="bg-white p-4 ">
            <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Pagina estilo AirBNB</h3>
            <p className="text-lg md:text-xl text-gray-500 ">Página estilo Airbnb, responsiva y desarrollada con HTML, CSS y JavaScript</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link className="absolute inset-0 z-10" href="https://extraordinary-manatee-207063.netlify.app/" target="_blank" alt="ver proyecto">
            <span className="sr-only">View Project</span>
          </Link>
          <img
            alt="Project 4"
            className="object-cover w-full"
            height={480}
            width={854}
            src="/img/proyect4.png"
            style={{
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
            
          />
          <div className="bg-white p-4 ">
            <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Nucleus Ewallet</h3>
            <p className="text-lg md:text-xl text-gray-500 ">
              
                Landing page moderna eficiente.
            </p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link className="absolute inset-0 z-10" href="https://elaborate-narwhal-2e3437.netlify.app/" target="_blank" alt="ver proyecto">
            <span className="sr-only">View Project</span>
          </Link>
          <Image
            alt="Project 5"
            className="object-cover w-full"
            
            height={480}
            width={854}
            src="/img/proyect5.png"
            style={{
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
            
          />
          <div className="bg-white p-4 ">
            <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Demo web para cafetería.</h3>
            <p className="text-lg md:text-xl text-gray-500 ">
            Página web responsive con HTML, CSS y JavaScript.
            </p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link className="absolute inset-0 z-10" href="https://merry-bombolone-2d34a7.netlify.app/" target="_blank" alt="ver proyecto">
            <span className="sr-only">View Project</span>
          </Link>
          <Image
            alt="Project 6"
            className="object-cover w-full"
            height={480}
            width={854}
            src="/img/proyecto6.png"
            style={{
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
            
          />
          <div className="bg-white p-4 ">
            <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Página web arquitectura bosque</h3>
            <p className="text-lg text-gray-500 ">HTML, CSS y JavaScript.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Misproyectos