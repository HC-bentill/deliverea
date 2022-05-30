import Logo from '../../assets/images/logo_transparent.png'
import Image from 'next/image'
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import { borderRadius } from 'tailwindcss/defaultTheme';

const navigation = {

    empersa: [
      { name: 'Pricing', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'API Status', href: '#' },
    ],
    recursos: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
            <FaLinkedinIn/>
        ),
      },
      {
        name: 'Instagram',
        href: '#',
        icon: (props) => (
            <FaFacebookF/>
        ),
      },
      {
        name: 'Twitter',
        href: '#',
        icon: (props) => (
            <FaTwitter/>
        ),
      }
    ],
  }
  const footerIconStyle={
    border:"1px solid",
    borderRadius:"100%"
  }

  const newsletterStyle ={
      width:"100%",
      background:"#E6EBF2",
      borderBottom:"solid 2px gray",
      marginTop:"14px",
      outline:"none",
      padding:"10px"
  }

function footer() {
  return (
    <footer className="bg-screen" aria-labelledby="footer-heading">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-10 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                    <div className='relative w-30 h-14 '>
                        <Image
                        src={Logo}
                        layout="fill"
                        objectFit="contain"
                        />
                    </div>
                    <p className='my-2 text-gray-400 text-sm'>La solución multi-operador para tus paquetes.</p> <br></br>
                    <p className='text-sm leading-snug'>
                        <span>hello@deliverea.com</span><br></br>
                        <span>+34 933 28 25 27</span><br></br>
                        <span>Carrer Llauder, 1, Barcelona, 08003, España</span>
                    </p>
                    <div className="flex space-x-6 md:order-2 mt-6">
                        {navigation.social.map((item) => (
                        <a key={item.name} href={item.href} style={footerIconStyle} className=" p-2 text-dark hover:text-gray-500">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-12 w-12" aria-hidden="true" />
                        </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold text-dark tracking-wider uppercase">EMPRESA</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.empersa.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-lg font-semibold text-dark tracking-wider uppercase">RECURSOS</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.recursos.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-lg font-semibold text-dark tracking-wider uppercase">
            Suscríbete a nuestra Newsletter
            </h3>
            <form className="mt-4 md:flex-col sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                placeholder="Tu email"
                style={newsletterStyle}
              />
             <a
                href="#"
                style={{background:"#FF6150"}}
                className="ml-8 inline-flex items-center justify-center px-2 py-2 border
                 border-transparent rounded-md shadow-sm text-base font-medium text-white
                 mt-10 w-40 md:ml-2
                 "
              >
                Suscribirse
              </a>
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              </div>
            </form>
          </div>
        </div>  
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="mt-8 text-center text-base text-gray-400 md:mt-0 md:order-1">
            &copy; Copyright Deliverea S.L. 2022
          </p>
        </div>
      </div>
    </footer>
  )
}

export default footer