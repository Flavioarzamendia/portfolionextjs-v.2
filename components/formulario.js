
import ContactForm from "./contactForm";
import Link from "next/link";







const Formulario = () => {

return(

    <>
    <section className="w-full py-12 md:py-24 lg:py-14 mt-0 bg-gray-900 font-sans">
           <div className="px-4 md:px-6 text-center">
            <h1 className=" text-4xl md:text-6xl text-white uppercase font-bold mb-10" >Contacto</h1>
             <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 items-center text-left">
               <div className="flex flex-col justify-center space-y-4 md:px-10 sm:mb-10 sm:mt-10 lg:mb-0 lg:mt-0 ">
                 <div className="space-y-14 mb-10 lg:mb-0 bg-gray-700 rounded-xl ">

                    <ContactForm/>
                  
                 </div>
                
               </div>

                <div className="flex flex-col text-center lg:bg-[url('/img/hero.jpg')] w-full h-full justify-center rounded-xl ">
                    <h2 className="text-center text-white uppercase mb-10 md:mb-0">Mis redes</h2>

                    <ul className=" md:flex justify-evenly text-white text-4xl mt-10 uppercase space-y-10  md:space-y-0 mx-10">
                    <li className="">
                        <Link className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
                  font-sans text-2xl md:text-3xl lg:text-3xl uppercase inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]"
                         href="https://www.linkedin.com/in/flavio-arzamendia" target="_blank" 
                        >
                            Linkedin
                        </Link>
                    </li>
                    <li>
                        <Link className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
                  font-sans md:text-3xl text-2xl lg:text-3xl uppercase inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]"
                         href="https://github.com/Flavioarzamendia" target="_blank"
                        >
                            GitHub
                        </Link>
                    </li>
                    <li>
                        <Link className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
                  font-sans md:text-3xl text-2xl lg:text-3xl uppercase inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]"
                        href="https://www.instagram.com/fadesarrolloweb" target="_blank"
                        >
                            Instagram
                        </Link>
                    </li>
                    <li>
                        <Link className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
                         font-sans md:text-3xl text-2xl lg:text-3xl uppercase inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]"
                        href="https://www.facebook.com/people/FA-Desarrollo-Web-y-Marketing-Digital/61553982370679/" target="_blank"
                        >
                            Facebook
                        </Link>
                    </li>
                    </ul>

                    
                </div>
              
               
             </div>
           </div>
         </section>
         </>
    )
}

export default Formulario