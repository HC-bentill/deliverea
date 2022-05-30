import Head from 'next/head'
import { Header, Page } from '../components'
import Banner from '../components/banner/Banner'
import Brand from '../components/brand/brand'
import Hero from '../components/hero/Hero'
import Footer from '../components/footer/Footer'
import { HowWeDoIt } from '../components/how-we-do-it/how-we-do-it'
import LogoSection from '../components/logo-section/logo-section'
import SucessStories from '../components/success-stories/success-stories'
import { WhatWeDo } from '../components/what-we-do/what-we-do'

const Home = () => {
    return (
        <>
            <Head>
                <title>Deliverea</title>
                <link rel="icon" href="/logo.png"/>
            </Head>

            <Header/>
            <Hero/>
            <WhatWeDo/>
            <HowWeDoIt/>
            <SucessStories/>
            <LogoSection />
            {/* <Brand/> */}
            <Banner/>
            <Footer/>
        </>
    )
}


export default Home

