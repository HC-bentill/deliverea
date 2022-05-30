import Logo from '../../assets/images/logo.png'
import Image from 'next/image'
import { menuItems } from './menuItems'

export const Header = ({}) => {
  return (
    <>
      <nav className='px-16 py-3 flex relative flex items-center w-100'>

        <div className='relative w-24 h-10 '>
          <Image
           src={Logo}
           layout="fill"
           objectFit="contain"
            />
        </div>

        <div className='mx-10'>
          <ul className='flex'>
            {menuItems.map((item, idx) =>(
              <li className='mx-5' key={idx}>
                <p className='text-gray-500 text-sm'>
                {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className=' flex relative flex items-center ml-20'>
          <p className='text-orange-500 text-sm font-bold mr-10'>
            Iniciar sesión
          </p>
          <button
            style={{
              background:"#FF6150",
              color:"white"
            }}
          >
            Probar gratis
          </button>
        </div>


      </nav>
    </>
  )
}

