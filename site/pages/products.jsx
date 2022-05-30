import Head from 'next/head'
import React from 'react'
import { Header } from '../components'
import MoreTools from '../components/moretools/MoreTools'
import Parallax1 from '../components/parallax/Parallax1'
import Solution from '../components/solution/Solution'
import Footer from '../components/footer/Footer'


const Products = () => {
  return (
      <>
        <Head>
            <title>Deliverea</title>
            <link rel="icon" href="/logo.png"/>
        </Head>

        <Header/>
        <Parallax1/>
        <MoreTools/>
        <Solution/>
        <Footer/>

      </>

  )
}

export default Products