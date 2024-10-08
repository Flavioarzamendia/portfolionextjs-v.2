
import ContactForm from "./contactForm";
import Link from "next/link";







const Formulario = () => {

return(

    <>
    <section className="w-full py-12 md:py-24 lg:py-14 mt-0 bg-gray-900 font-sans">
           <div className="px-4 md:px-6 text-center">
            <h1 className=" text-3xl md:text-5xl font-bold text-center mb-8 text-white uppercase" >Contacto</h1>
            
            <h2 className="text-2xl md:text-3xl text-white  font-semibold  text-center mb-20 md:mb-32 px-10 ">
            Ponte En Contacto Conmigo
            </h2>
            
             <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 items-center text-left">
               <div className="flex flex-col justify-center space-y-4 md:px-10 sm:mb-10 sm:mt-10 lg:mb-0 lg:mt-0 ">
                 <div className="space-y-8 mb-10 lg:mb-0 bg-gray-700 rounded-xl ">

                    <ContactForm/>
                  
                 </div>
                
               </div>

                <div className="flex flex-col text-center lg:bg-[url('/img/contacto.jpg')] bg-no-repeat bg-right-bottom w-full h-full justify-center rounded-xl ">
                    
                    <h2 className="text-center text-white font-bold uppercase mb-4 md:mb-0">Mis redes</h2>
                    <p className="text-2xl text-white  mx-10 leading-10 md:text-3xl mt-8 md:mt-10 md:text-left md:p-0 mb-20   font-sans font-semibold text-center px-10 lg:px-14" >
                     Presupuestos, preguntas, información? No dude en ponerse en contacto conmigo.
                     Complete el formulario o conectate conmigo a través de mis redes sociales.
                    </p>

                    <ul className=" md:flex justify-evenly text-white text-4xl mt-10 uppercase space-y-10  md:space-y-0 mx-10">
                    <li className="">
                        <Link className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
                  font-sans text-2xl md:text-3xl lg:text-3xl uppercase inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]"
                         href="https://www.linkedin.com/in/flavio-arzamendia/" target="_blank" alt="ver Linkedin "
                        >
                            Linkedin
                        </Link>
                    </li>
                    <li>
                        <Link className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
                  font-sans md:text-3xl text-2xl lg:text-3xl uppercase inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]"
                         href="https://github.com/Flavioarzamendia" target="_blank" alt="ver github"
                        >
                            GitHub
                        </Link>
                    </li>
                    <li>
                        <Link className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
                  font-sans md:text-3xl text-2xl lg:text-3xl uppercase inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]"
                        href="https://www.instagram.com/fa_desarrollo/" target="_blank" alt="ver instagram"
                        >
                            Instagram
                        </Link>
                    </li>
                    <li>
                        <Link className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
                         font-sans md:text-3xl text-2xl lg:text-3xl uppercase inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]"
                        href="https://www.facebook.com/people/FA-Desarrollo-Web-y-SEO-Argentina-Latam/61563558782469/" target="_blank" alt="Facebook"
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