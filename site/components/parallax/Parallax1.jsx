import styles from '../../styles/Parallax.module.css'
import AOS from "aos";
import { useEffect } from 'react';
import Image from 'next/image'
import productImg1 from '../../assets/images/productimg1.png'
import ProductScreens from '../productscreens/ProductScreens';
import { parallaxcontent } from './parallaxcontent';
import MoreTools from '../moretools/MoreTools';

function Parallax1() {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration:1700,
            delay:150,
            
        });
        AOS.refresh();
      }, []);

      const handleScrollEffect = () => {
        window.scrollBy(0, 100 * window.innerHeight/100);
     }

  return (
      <>
            <div onClick={()=>handleScrollEffect()}>
        <div className={styles.p1}>
            <div>
                <p className='text-center text-dark text-2xl pt-14 pb-10'>
                    Haz del delivery parte de la experiencia de compra<br></br>
                    <span className='text-sm text-gray-500'>La solución de envío multi-carrier que automatiza y agiliza tus procesos para ahorrarte tiempo y dinero</span>
                </p>
            </div>
            <div className='grid place-items-center pb-10'>
                <a className="m-auto px-10 py-3 m rounded text-center mx-auto text-accent bg-white">
                Solicitar demo
                </a>
            </div>
            <div data-aos="fade-right" className="relative" style={{width:"50%", height:"50%", margin:"auto"}}>
                <Image
                src={productImg1}
                layout="fill"
                />
            </div>
        </div>

        {parallaxcontent.map((item, key) => (
            <div key={key} className={styles.p1}>
                <ProductScreens
                toptitle={item.toptitle}
                maintitle={item.maintitle}
                subtext={item.subtext}
                />
            </div>
        ))}
      </div>
      </>


  )
}

export default Parallax1