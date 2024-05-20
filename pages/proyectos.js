import Layout from "@/components/layout";
import Misproyectos from "@/components/misproyectos";



export default function Proyectos(){
  
  return (
    <Layout
    title="Proyectos"
    description="Descubre los proyectos de Flavio Arzamendia, desarrollador web en Buenos Aires. Desde aplicaciones de delivery hasta sitios tipo Airbnb!."
    >
      <Misproyectos/>

    </Layout>
  )
}

