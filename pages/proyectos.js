import Layout from "@/components/layout"
import ListadoProyectos from "@/components/listado-proyectos"
import styles from "../styles/grid.module.css"


export default function Proyectos({proyectos}){
  console.log(proyectos)
  return (
    <Layout
    title="Proyectos"
    description="Explora mi galería de proyectos web. Desde sitios elegantes hasta aplicaciones interactivas, cada proyecto es una muestra de mi habilidad para transformar ideas en experiencias digitales impactantes."
    >
      <main className="py-10 mt-0">
        <h1 className="text-5xl text-center font-extrabold lg:text-6xl text-[#141414] uppercase mb-20"
        >
          Mis Proyectos
          </h1>
          <div className={styles.grid}>
         {proyectos.map(proyecto =>(
          <ListadoProyectos
          key={proyecto.id}
          proyecto={proyecto.attributes}
          />
         ))}
          </div>
      </main>

    </Layout>
  )
}

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/proyectos/?populate=imagen`)
  const {data: proyectos} = await respuesta.json()
  return {
    props:{
      proyectos
    }
  }
}