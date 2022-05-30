import React from 'react'
import Image from 'next/image'
import ceoInactive from '../../assets/icons/ceoInactive.png'
import ceoActive from '../../assets/icons/ceoActive.png'


const Ceo = React.memo((index) => {
  return (
    <div className='relative w-100 h-28 object-center'>
      {index.index === 2 ?
        <Image
        src={ceoActive}
        layout="fill"
        objectFit="contain"
        />
        :
        <Image
        src={ceoInactive}
        layout="fill"
        objectFit="contain"
        />
      }

    </div>
  )
})



export default Ceo