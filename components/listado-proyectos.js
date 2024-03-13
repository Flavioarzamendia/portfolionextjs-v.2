import Image from "next/image"
import Link from "next/link"
import styles from "../styles/guitarras.module.css"


const ListadoProyectos = ({proyecto}) => {
    const {titulo, descripcion, imagen,link, url} = proyecto
  return (
    <div className={styles.guitarras}>
        <Image src={imagen.data.attributes.formats.large.url} width={600} height={400} alt={`Imagen proyecto ${titulo}`}/>
      <div className="mt-6">
        <h3 className="text-center text-5xl font-extrabold lg:text-6xl text-[#6eb5ff] py-6"
        >
          {titulo}
        </h3>
        <p className="font-sans font-semibold md:text-xl  text-black lg:text-3xl p-2 m-2 "
        >
          {descripcion}
          </p>
        
        <Link href={`${link}`} target="_blank" className=" px-1 py-2 w-full md:w-80  rounded-lg mr-4  text-black font-sans font-semibold text-3xl text-center">
              <span className="block bg-[#E8AD08] hover:bg-[#67be67] hover:text-white rounded-lg px-7 py-5 ">
             
              Visitar la Pagina
              
              </span>
            </Link>
            
            
      </div>  
      
    </div>
  )
}

export default ListadoProyectos