import { 
  VerticalTimeline,
  VerticalTimelineElement
}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { LocationMarkerIcon } from '@heroicons/react/solid'
export const HowWeDoIt = () => {

  return (
    <section className="">
        <div style={{ display:"grid",placeItems:"center"}}
         className="mx-auto px-4 py-16 sm:px-6 lg:px-8"
         >
        <div className="text-center mb-14">
          <p className='text-md tracking-tight text-accent pb-5'>
          ¿CÓMO LO HACEMOS?
          </p>
          <p className="text-md tracking-tight text-dark">
            Toda la operativa de envíos en una única plataforma
          </p>
        </div>

      <VerticalTimeline lineColor={ "gray" }>

       <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "none", color: "black" }}
          iconStyle={{ background: "#ff6150", color: "#fff" }}
          icon={<LocationMarkerIcon />}
        >
          <p style={{color:"#ff6150", marginBottom:"10px"}}>Paso 1</p>
          <h1 className="vertical-timeline-element-title font-bold text-4xl text-gray-700">Conéctate con Deliverea</h1>
          <p className='text-gray-500'>
          Integra tu tienda o ERP a Deliverea utilizando nuestra API o módulos de conexión como Shopify.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          position={ "right" }
          className="vertical-timeline-element--work"
          contentStyle={{ background: "none", color: "black"}}
          iconStyle={{ background: "#ff6150", color: "#ff6150" }}
          icon={<LocationMarkerIcon />}
        >
          <p style={{color:"gray", marginBottom:"10px"}}>Paso 2</p>
          <h1 className="vertical-timeline-element-title font-bold text-2xl text-gray-400">Configura tu cuenta</h1>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          position={ "right" }
          className="vertical-timeline-element--work"
          contentStyle={{ background: "none", color: "black"}}
          iconStyle={{ background: "#ff6150", color: "#ff6150" }}
          icon={<LocationMarkerIcon />}
        >
          <p style={{color:"gray", marginBottom:"10px"}}>Paso 3</p>
          <h1 className="vertical-timeline-element-title font-bold text-2xl text-gray-400">Imprime las etiquetas</h1>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          position={ "right" }
          className="vertical-timeline-element--work"
          contentStyle={{ background: "none", color: "black"}}
          iconStyle={{ background: "#ff6150", color: "#ff6150" }}
          icon={<LocationMarkerIcon />}
        >
          <p style={{color:"gray", marginBottom:"10px"}}>Paso 4</p>
          <h1 className="vertical-timeline-element-title font-bold text-2xl text-gray-400">Estandariza el tracking</h1>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          position={ "right" }
          className="vertical-timeline-element--work"
          contentStyle={{ background: "none", color: "black"}}
          iconStyle={{ background: "#ff6150", color: "#ff6150" }}
          icon={<LocationMarkerIcon />}
        >
          <p style={{color:"gray", marginBottom:"10px"}}>Paso 5</p>
          <h1 className="vertical-timeline-element-title font-bold text-2xl text-gray-400">Gestión de incidencias</h1>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          position={ "right" }
          className="vertical-timeline-element--work"
          contentStyle={{ background: "none", color: "black"}}
          iconStyle={{ background: "#ff6150", color: "#ff6150" }}
          icon={<LocationMarkerIcon />}
        >
          <p style={{color:"gray", marginBottom:"10px"}}>Paso 6</p>
          <h1 className="vertical-timeline-element-title font-bold text-2xl text-gray-400">Automatiza las devolucionesa</h1>

        </VerticalTimelineElement>
      </VerticalTimeline>
          
        </div>
    </section>
  )
}
