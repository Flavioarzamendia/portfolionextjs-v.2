'use client'
import {useTransition, useState} from "react";
import Tabbutton from "./tabbutton";
import Carrusel from "./carrusel";
import Link from "next/link";


const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Desarrollo en WordPress</li>
          <li>HTML5, CSS3 y JavaScript</li>
          <li>Experiencia en React</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Frontend Developer, Udemy</li>
          <li> Ingenieria en, Universidad Nacional De La Matanza</li>
        </ul>
      ),
    },
    {
      title: "Servicios",
      id: "servicios",
      content: (
        <ul className="list-disc p-1">
          <li>Desarrollo de sitios web responsivos.</li>
          <li>Diseño de interfaces de usuario (UI) atractivas.</li>
          <li>Integración de sistemas de gestión de contenido (CMS) como WordPress.</li>
          <li>Desarrollo de aplicaciones web interactivas utilizando React.js o Next.js.</li>
          <li>Optimización del rendimiento del sitio web.</li>
        </ul>
      ),
    },
  ];

  const images = [
    { src: './img/tiendamueble.png', alt: 'Image 2', title: 'Tienda Mueble', description:'proyecto html y css' },
    { src: './img/techpro.png', alt: 'Image 3', title: 'TeachPRO', description:'proyecto html y css' },
  ];
 
 

const Sobremi = () => {

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
  
    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
      });
    };

  return (
    <section className="text-white  py-16" id="about" >
        
      <div className=" lg:grid lg:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <div>
          <h2 className="text-5xl font-extrabold lg:text-6xl text-[#6eb5ff] uppercase border-l-4 border-[#67be67] pl-6  mb-14">
            Proyectos
          </h2>
          <div className="mt-14 lg:mt-5">
            <Carrusel
              images ={images}
            />
            
          </div>
          <div className="mb-14 lg:mb-5">
            <Link href='/proyectos' className=" px-1 py-2 w-full  rounded-lg mr-4  text-black font-sans font-semibold text-3xl text-center">
              <span className="block bg-[#E8AD08] hover:bg-[#67be67] hover:text-white rounded-lg px-7 py-5 uppercase">
             
              Ver más proyectos
              
              </span>
            </Link>
            </div>
              
        </div>
        
       
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-5xl font-extrabold lg:text-6xl text-[#6eb5ff] uppercase  border-l-4 border-[#67be67] pl-6  mb-14">
            Sobre Mi
          </h2>
          <div className=" p-6 bg-[#67be67] rounded-lg pt-10 mb-0">
            <p className=" font-sans font-semibold md:text-xl  text-black lg:text-3xl p-2 m-2">
            ¡Hola! Soy Flavio, un programador Frontend Freelance con experiencia en HTML5, CSS3, 
            JavaScript, WordPress, React y Next.js.
            </p>
           
          </div>
          <div className="mt-0">
          <Link href='/habilidades'  className=" px-1  w-full md:w-80  rounded-lg mr-4  text-black font-sans font-semibold text-3xl text-center">
              <span className="block bg-[#E8AD08] hover:bg-[#67be67] hover:text-white rounded-lg px-7 py-5 ">
             
              Más Sobre Mí
              
              </span>
            </Link>
          </div>
          <div className="flex flex-row justify-start  mt-8 mb-4">
            <Tabbutton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </Tabbutton>
            <Tabbutton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educacion{" "}
            </Tabbutton>
            <Tabbutton
              selectTab={() => handleTabChange("servicios")}
              active={tab === "servicios"}
            >
              {" "}
              Servicios{" "}
            </Tabbutton>
          </div>
          <div className="mt-8 mx-3 lg:mx-1 font-sans font-semibold text-black leading-relaxed text-3xl  rounded  p-14 m-2 ">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobremi