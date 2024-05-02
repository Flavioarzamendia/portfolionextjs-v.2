import Link from "next/link";

const Footer = () => {
  return (
    <footer className="m-0 block text-center  mx-auto left-0 right-0 bottom-0 bg-[#141414]  py-5 footer  z-10 border-t-2  border-[#33353F]">
      <div className="container md:justify-between md:px-20  block py-10 md:py-2 md:flex  md:items-center ">
      <Link
          href={"/"}
          className="text-6xl  md:text-7xl text-[#3E3F40] font-extrabold hover:text-white lg:ml-20 "
          alt="Desarrollo web"
        >
          FA
        </Link>
        <div className="text-[#726F6F] font-sans  text-4xl md:text-3xl  md:text-center md:flex md:gap-8  mt-10 md:mt-0 lg:ml-36 ">
          <Link href='/' className="block p-4 md:p-1 hover:text-white">Inicio</Link>
          <Link href='/habilidades' className="block py-4 md:p-1 hover:text-white">Sobre Mí</Link>
          <Link href='/servicios' className="block py-4 md:p-1 hover:text-white">Servicios</Link>
          <Link href='/proyectos' className="block py-4 md:p-1 hover:text-white">Proyectos</Link>
          <Link href='/contacto' className="block py-4 md:p-1 hover:text-white">Contacto</Link>
        </div>
        <div className="text-[#726F6F] font-sans md:text-3xl py-5 md:text-start lg:pr-20 text-4xl md:flex gap-8 md:justify-end  md:ml-2 lg:ml-0 ">
          <Link 
          href='https://www.linkedin.com/in/flavio-arzamendia-salinas'
          target="_blank"
           className="block py-1 hover:text-white"
           >
            Linkedin
            </Link>
          <Link 
          href='https://github.com/Flavioarzamendia'
          target="_blank"
           className="block py-1 hover:text-white"
           >
            GitHub
            </Link>
        </div>
       
      </div>
      <div className=" text-center mt-2 mx-auto">
        <p className="text-[#726F6F] px-4 md:text-2xl text-2xl font-sans py-4  ">©Flavio Arzamendia | Todos los derechos reservados {new Date().getFullYear()}</p>
       </div>
    </footer>
  );
};

export default Footer;