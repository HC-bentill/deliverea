import CostReductionIcon from '../../assets/icons/cost.png'
import OptimizationIcon from '../../assets/icons/cog.png'
import StandardizationIcon from '../../assets/icons/standardization.png'
import Image from 'next/image'


const data = [
  {
    key: 'optimization',
    renderIcon: OptimizationIcon,
    title: 'Optimización de operaciones',
    explanation:
      'Utiliza la tecnología de Deliverea para automatizar el proceso de devoluciones o para optimizar tu red propia de transporte como si fuera un carrier más'
  },
  {
    key: 'cost-reduction',
    renderIcon: CostReductionIcon,
    title: 'Reducción de costes',
    explanation:
      'Configura las reglas para hacer la asignación automática de cada envío al carrier más adecuado y reducir tus costes de transporte'
  },
  {
    key: 'standardization',
    renderIcon: StandardizationIcon,
    title: 'Comunicación y estandarización',
    explanation:
      'Gestiona las incidencias de todos los carriers desde una única plataforma y estandariza cómo comunicas a tus clientes el estado de su envío'
  }
]

export const WhatWeDo = () => {

  return (
    <section >
      <div className="bg-dark">
        <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
          <div className="rounded-2xl px-6 py-16 sm:p-16">
            <div className="max-w-xl mx-auto lg:max-w-none">
              <div className="text-center">
                <p className='text-md tracking-tight text-accent pb-5'>
                  ¿QUÉ HACEMOS?
                </p>
                <p className="text-md tracking-tight text-gray-100">
                    Ponemos a tu disposición la herramienta más completa para <br></br>gestionar 
                    tu logística multi-carrier
                </p>
              </div>
              <div className="mt-24 max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-12 sm:max-w-none lg:grid-cols-3">
                {data.map((data) => (
                  <div key={data.key} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                    <div className="sm:flex-shrink-0">
                      <div className='relative w-100 h-20 object-center'>
                        <Image
                        src={data.renderIcon}
                        layout="fill"
                        objectFit="contain"
                          />
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                      <h3 className="text-lg text-white">{data.title}</h3>
                      <p className="mt-2 text-sm text-gray-400">{data.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
