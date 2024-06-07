import Link from "next/link";

const Footer = () => {
  return (
    <footer className="m-0 block text-center  mx-auto left-0 right-0 bottom-0 bg-[#2C3E50]  py-5 footer  z-10 border-t-2  border-[#33353F]">
      <div className="container md:justify-between md:px-20  block py-10 md:py-2 md:flex  md:items-center ">
      <Link
          href={"/"}
          className="text-7xl  md:text-7xl   text-white lg:ml-20 "
          alt="Desarrollo web logo"
        >
          <p> {"{"}<span className="text-6xl font-extrabold">FA</span>{"}"} </p>
        </Link>
        <div className="text-white font-sans  text-4xl md:text-3xl  md:text-center md:flex md:gap-8  mt-10 md:mt-0 lg:ml-36 ">
          <Link href='/' alt="Inicio fadesarrolloweb" className="block p-4 md:p-1 ">Inicio</Link>
          <Link href='/sobremi' alt="Sobre mí fadesarrolloweb" className="block py-4 md:p-1 ">Sobre Mí</Link>
          <Link href='/servicios' alt="Servicios de fadesarrolloweb" className="block py-4 md:p-1 ">Servicios</Link>
          <Link href='/proyectos' alt="Proyectos de fadesarrolloweb" className="block py-4 md:p-1 ">Proyectos</Link>
          <Link href='/contacto ' alt="Contacto conmigo fadesarrolloweb" className="block py-4 md:p-1 ">Contacto</Link>
        </div>
        <div className="text-white font-sans  mb-10 md:mb-0 md:text-3xl py-5 md:text-start lg:pr-20 text-4xl md:flex gap-8 md:justify-end  md:ml-2 lg:ml-0 ">
          <Link 
          href='https://www.linkedin.com/in/flavio-arzamendia/'
          target="_blank"
          alt="Linkedin flavio arzamendia"
           className="block py-1 text-white mt-14 mb-8 md:mt-0 md:mb-0"
           >
            Linkedin
            </Link>
          <Link 
          href='https://github.com/Flavioarzamendia'
          target="_blank"
          alt="Github flavio arzamendia"
           className="block py-1 text-white"
           >
            GitHub
            </Link>
        </div>
       
      </div>
      <div className=" text-center mt-2 mx-auto">
        <p className="text-gray-200 px-4 md:text-2xl text-2xl font-sans py-4  ">©Flavio Arzamendia | Todos los derechos reservados {new Date().getFullYear()}</p>
       </div>
    </footer>
  );
};

export default Footer;