import React from 'react'
import Image from 'next/image'

const Mi = () => {
  return (
    
    <main className="w-full m-0 mx-auto">
      <section className="w-full py-20 md:py-32  px-10 lg:px-48 bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className=" font-sans ">
              <h1 className="text-5xl text-white font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-center lg:text-left">Flavio Arzamendia</h1>
              <h2 className="text-3xl mt-10 md:text-4xl lg:text-5xl font-semibold text-gray-100 text-center lg:text-left">Desarrollador Web</h2>
              <p className="text-2xl text-gray-100  my-5 mt-20 leading-10">
              ¡Hola! Soy Flavio, un apasionado desarrollador web en Argentina con experiencia en HTML, CSS y JavaScript. Mi viaje en el desarrollo web comenzó con estas tecnologías fundamentales, permitiéndome construir interfaces intuitivas y atractivas. Con el tiempo, he ampliado mis habilidades para incluir el desarrollo en WordPress, lo que me permite ofrecer soluciones versátiles y personalizadas a mis clientes.
              </p>
              <p className="text-2xl text-gray-100  my-5 mt-10 leading-10 ">
              Estoy constantemente aprendiendo y explorando nuevas tecnologías y metodologías en el desarrollo web. Participar en cursos y capacitaciones me mantiene al tanto de las últimas tendencias y herramientas en la industria, permitiéndome ofrecer soluciones innovadoras y actualizadas a mis clientes.
              </p>
              <p className="text-2xl text-gray-100  my-5 mt-10 leading-10">
              Actualmente, trabajo como desarrollador web freelance en Argentina, colaborando estrechamente con clientes para comprender sus necesidades y objetivos. Esta experiencia me ha brindado una comprensión profunda de cómo traducir las ideas y visiones de mis clientes en soluciones web efectivas y atractivas.
              </p>
             
            </div>
            <div className="flex justify-center items-center">
              <Image
                alt="flavio arzamendia"
                className="rounded-full bg-slate-400"
                height={300}
                src="/img/foto1.jpg"
                style={{
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
                width={300}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32 mx-auto">
        <div className="px-4 md:px-6">
          <div className="">
            <div className="text-center">
              <h2 className=" font-bold  text-gray-900 text-5xl md:text-4xl lg:text-6xl mb-20 uppercase">Habilidades</h2>
              
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-white font-sans lg:px-40 ">
              <div className="bg-blue-600 rounded-lg p-6 flex flex-col items-center space-y-2">
                
                <h3 className=" font-semibold text-3xl">HTML</h3>
              </div>
              <div className="bg-blue-600 rounded-lg p-6 flex flex-col items-center space-y-2">
                
                <h3 className="text-3xl font-semibold">CSS</h3>
              </div>
              <div className="bg-blue-600 rounded-lg p-6 flex flex-col items-center space-y-2">
                
                <h3 className="text-3xl font-semibold">JavaScript</h3>
              </div>
              <div className="bg-blue-600 rounded-lg p-6 flex flex-col items-center space-y-2">
                
                <h3 className="text-3xl font-semibold">React</h3>
              </div>
              <div className="bg-blue-600 rounded-lg p-6 flex flex-col items-center space-y-2">
                
                <h3 className="text-3xl font-semibold">Node.js</h3>
              </div>
              <div className="bg-blue-600 rounded-lg p-6 flex flex-col items-center space-y-2">
                
                <h3 className="text-3xl font-semibold">Tailwind CSS</h3>
              </div>
              <div className="bg-blue-600  rounded-lg p-6 flex flex-col items-center space-y-2">
                
                <h3 className="text-3xl font-semibold">Git</h3>
              </div>
              <div className="bg-blue-600 rounded-lg p-6 flex flex-col items-center space-y-2">
                
                <h3 className="text-3xl font-semibold">Wordpress</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32 bg-[#2C3E50]">
        <div className=" px-4 md:px-6">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="font-bold text-white text-5xl md:text-4xl lg:text-6xl mb-20 uppercase">Experiencia</h2>
              
            </div>
            <div className="grid gap-8">
              <div className="grid md:grid-cols-1 gap-6 container max-w-[800px] mx-auto">
                <div className="bg-[#2B7CB3] rounded-lg p-14 shadow-md ">
                  <h3 className="text-2xl font-semibold font-sans text-white ">Front-end Developer</h3>
                  <p className="text-white font-sans">Desarrollador Web Freelance | 2023 - {new Date().getFullYear()}</p>
                  <p className="text-white text-3xl leading-10 font-sans mt-10">
                      Colaboración con clientes para diseñar, desarrollar y mantener sitios web personalizados.
                      Uso eficiente de tecnologías como HTML, CSS, JavaScript y WordPress para cumplir con los objetivos del proyecto.
                  </p>
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32">
        <div className=" px-4 md:px-6">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="font-bold  text-gray-900 text-5xl md:text-4xl lg:text-6xl mb-20 uppercase">Educación</h2>
             
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#2B7CB3] rounded-lg p-14 shadow-md container max-w-[800px] mx-auto">
                <h3 className="text-2xl font-semibold font-sans text-white">Curso en Desarrollo Web Completo con HTML, CSS, JavaScript, Wordpress.</h3>
                <p className="text-white font-sans ">Udemy | 2022- 2023</p>
                <p className="text-white text-3xl leading-10 font-sans mt-10">
                Este curso intensivo de desarrollo web en Udemy abarcó una amplia gama de tecnologías y conceptos fundamentales en el 
                campo. Durante el curso, adquirí habilidades avanzadas en HTML, CSS y JavaScript, así como conocimientos en Wordpress.
                 A través de proyectos prácticos y ejercicios, pude aplicar estos conocimientos en la creación de sitios web dinámicos
                  y responsivos, lo que me permitió consolidar mi comprensión y mejorar mis habilidades en el desarrollo web.
                </p>
              </div>
              <div className="bg-[#2B7CB3] rounded-lg p-14 shadow-md container max-w-[800px] mx-auto">
                <h3 className="text-2xl font-semibold font-sans text-white">Ingenieria Informatica</h3>
                <p className="text-white font-sans ">Unlam | Actualmente</p>
                <p className="text-white text-3xl leading-10 font-sans mt-10">
                Actualmente, estoy cursando la carrera de Ingeniería en Informática en la Universidad de La Matanza.
                 Este programa académico me ha brindado una base sólida en fundamentos de informática, programación,
                  algoritmos y estructuras de datos, entre otros temas relevantes en el campo de la ingeniería de software.
                   A través de este programa, he desarrollado habilidades en análisis y resolución de problemas complejos, 
                   así como una comprensión profunda de los principios subyacentes en el desarrollo de software de calidad y
                    escalable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Mi