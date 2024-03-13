// components/SkillsSection.js

const MisHabilidades = () => {
    
    return (
        <div className="min-h-screen  ">
          <div className="container mx-auto px-8 md:px-24">
            <div className="md:flex items-center ">
              <img src="../img/flavio.jpg" alt="Tu foto" className=" w-40 h-40 md:w-48 md:h-48 rounded-full mr-4 mt-0" />
              <div>
                <h1 className="text-5xl font-extrabold lg:text-6xl text-[#6EB5FF] uppercase md:px-10 mt-12 md:mt-36">Flavio Arzamendia</h1>
                <p className=" text-[#141414]md:text-3xl font-semibold  text-3xl md:font-semibold mt-14">
                ¡Hola! Soy Flavio Arzamendia, un apasionado desarrollador web front-end con una sólida experiencia
                 en la creación de experiencias digitales cautivadoras. Mi enfoque se centra en combinar un diseño 
                 atractivo con funcionalidades fluidas para brindar soluciones web de alta calidad. Con habilidades en HTML,
                  CSS y JavaScript, me esfuerzo por superar los desafíos técnicos y llevar las ideas a la vida digital.
                   ¡Bienvenido a mi mundo de desarrollo web!
                    </p>
              </div>
            </div>
    
            <div className="grid grid-cols-3 gap-6 md:mt-32 md:px-32 px-8 mt-10  items-center p-9 rounded-xl">
              <div className="mt-6 flex justify-around ">
                <img src="../img/html.svg" alt="HTML" className="w-32 h-32" />
                
              </div>
              <div className="flex justify-around mt-6">
                <img src="../img/css.svg" alt="CSS" className="w-32 h-32" />
                
              </div>
              <div className="flex justify-around mt-6">
                <img src="../img/javascript.svg" alt="JavaScript" className="w-32 h-32" />
                
              </div>
              <div className="flex justify-around mt-6">
                <img src="../img/react.svg" alt="JavaScript" className="w-32 h-32" />
                
              </div>
              <div className="flex justify-around mt-6">
                <img src="../img/nextjs.svg" alt="JavaScript" className="w-32 h-32" />
                
              </div>
              <div className="flex justify-around mt-6">
                <img src="../img/tail.svg" alt="JavaScript" className="w-32 h-32" />
                
              </div>
              {/* Agrega más habilidades según sea necesario */}
            </div>
    
            <h2 className="text-4xl font-bold mt-14 mb-4 uppercase px-32">Estudios</h2>
            <ul className="list-disc pl-4 mx-32">
              <li>Experiencia 1</li>
              <li>Experiencia 2</li>
              {/* Agrega más experiencias según sea necesario */}
            </ul>
          </div>
        </div>
      );
        };


  
  export default MisHabilidades;
  
