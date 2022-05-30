import React from 'react'
import Image from 'next/image'
import ecommerceInactive from '../../assets/icons/ecommerceInactive.png'
import ecommerceActive from '../../assets/icons/ecommerceActive.png'


const Ecommerce = React.memo((index) => {
  return (
    <div className='relative w-100 h-28 object-center'>
      {index.index === 0 ?
        <Image
        src={ecommerceActive}
        layout="fill"
        objectFit="contain"
        />
        :
        <Image
        src={ecommerceInactive}
        layout="fill"
        objectFit="contain"
        />
      }

    </div>
  )
})



export default Ecommerce