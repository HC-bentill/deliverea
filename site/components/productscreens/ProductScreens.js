import { useEffect } from 'react';
import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'
import productimg1 from '../../assets/images/1.Hero-TomaElControl.png'
import Image from 'next/image'
import AOS from "aos";

const ProductScreens = ({toptitle, maintitle, subtext, }) => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration:1700,
            delay:150,
            
        });
        AOS.refresh();
      }, []);

  return (
    <div className="relative bg-transparent pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
              </div>
              <div data-aos="fade-right" className="mt-6">
                <p className='text-accent'>{toptitle} </p>
                <h2 className="text-2xl font-extrabold tracking-tight text-dark">
                 {maintitle}
                </h2>
                <p className="mt-4 text-md text-gray-500">
                 {subtext}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div data-aos="slide-left" className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:absolute lg:h-full">
              <Image
                // className="h-6 w-6"
                src={productimg1}
                alt=""
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductScreens