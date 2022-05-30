import React, {useState} from 'react'
import Ceo from './Ceo';
import Ecommerce from './Ecommerce';
import Operations from './Operations';
import SolutionContent from './SolutionContent';
import Sport from './Sport';

// import ecommerceInactive from '../../assets/icons/ecommerceInactive.png'
// import operationsInactive from '../../assets/icons/operationsInactive.png'
// import ceoInactive from '../../assets/icons/ceoInactive.png'
// import sportInactive from '../../assets/icons/sportInactive.png'
// import Ecommerce from '../ecommerce/Ecommerce'

const Solution = () => {

    const [index, setIndex] = useState(1);

  return (
    <div className="py-20 pb-32 bg-dark">
        <SolutionContent index={index}/>

        <div className="mt-24 max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-12 sm:max-w-none lg:grid-cols-4 lg:px-14">

                <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
                    <div onClick={() => setIndex(0)} className="sm:flex-shrink-0">
                        <Ecommerce  index={index}/>
                    </div>
                </div>

                <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
                    <div onClick={() => setIndex(1)} className="sm:flex-shrink-0">
                        <Operations  index={index}/>
                    </div>
                </div>

                <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
                    <div onClick={() => setIndex(2)} className="sm:flex-shrink-0">
                        <Ceo  index={index}/>
                    </div>
                </div>

                <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
                    <div onClick={() => setIndex(3)} className="sm:flex-shrink-0">
                        <Sport  index={index}/>
                    </div>
                </div>

        </div>

        

    </div>
  )
}

export default Solution