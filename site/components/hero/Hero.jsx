import Image from 'next/image'
import React from 'react'
import MacBook from '../../assets/images/MacBook.png'
import styles from '../../styles/Hero.module.css'

function Hero() {
  return (
    <div className={styles.bg}>
        <main className="lg:relative h-screen">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:pt-24 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-6xl tracking-tight font-extrabold text-gray-800 sm:text-xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline leading-snug">La solución <br></br>
              <span>multi-operador</span> <br></br>
              <span>para tus paquetes</span>
                </span>{' '}
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            <span>Gestiona tus envíos, devoluciones y seguimientos</span>

            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  style={{color:"#FF6150"}}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-white md:py-2 md:text-lg md:px-6"
                >
                  Solicitar demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <Image
            src={MacBook}
            layout="fill"
            />
        </div>
      </main>
    </div>
  )
}

export default Hero