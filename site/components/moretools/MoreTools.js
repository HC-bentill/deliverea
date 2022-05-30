import CarrierBackupIcon from '../../assets/icons/carrier_backup.png'
import WebPortalIcon from '../../assets/icons/web_portal.png'
import AddressValidationIcon from '../../assets/icons/address_validation.png'
import LabbelEngineIcon from '../../assets/icons/label_engine.png'
import Image from 'next/image'

const features = [
    {
      name: 'Carrier backup',
      description:
        'Establece carriers alternativos de asignación automática por si el original no presta servicio en ese momento. Así tu logística nunca para.',
      icon: CarrierBackupIcon,
    },
    {
      name: 'Returns web portal',
      description:
        'Con esta herramienta tus clientes podrán gestionar cómodamente las devoluciones de manera totalmente autónoma.',
      icon: WebPortalIcon,
    },
    {
      name: 'Address validation',
      description:
        'Obtén la geolocalización de tus direcciones necesarias para todos aquellos carriers de entrega en el día, de manera automática.',
      icon: AddressValidationIcon,
    },
    {
        name: 'Label engine',
        description:
          'Obtén tus etiquetas en el momento que lo necesites sin necesidad de haber documentado la expedición al carrier',
        icon: LabbelEngineIcon,
      },
  ]

function MoreTools() {
  return (
    <div>
        <div className="py-12">
            <div className="text-center mb-14">
                <p className='text-md tracking-tight text-accent pb-5'>
                  MÁS HERRAMIENTAS A TU ALCANCE
                </p>
                <p className="text-md tracking-tight text-dark">
                 Aquí queremos explicar todos los módulos aparte que puedes contratar
                </p>
            </div>

            <div className="bg-white">
                <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">A better way to send money.</h2>
                    <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
                    {features.map((feature) => (
                        <div className='lg:pl-24 lg:pr-24' key={feature.name}>
                        <dt className='text-center'>
                        <div className="sm:flex-shrink-0">
                          <div className='relative w-100 h-20 object-center'>
                            <Image
                            src={feature.icon}
                            layout="fill"
                            objectFit="contain"
                              />
                          </div>
                        </div>
                      <p className="mt-5 text-2xl leading-6 font-bold text-dark">{feature.name}</p>
                        </dt>
                        <dd className="text-center mt-2 text-base text-gray-500">{feature.description}</dd>
                        </div>
                    ))}
                    </dl>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default MoreTools