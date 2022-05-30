import React from 'react'
import Image from 'next/image'
import operationsInactive from '../../assets/icons/operationsInactive.png'
import operationsActive from '../../assets/icons/operationsActive.png'


const Operations = React.memo((index) => {
  return (
    <div className='relative w-100 h-28 object-center'>
      {index.index === 1 ?
        <Image
        src={operationsActive}
        layout="fill"
        objectFit="contain"
        />
        :
        <Image
        src={operationsInactive}
        layout="fill"
        objectFit="contain"
        />
      }

    </div>
  )
})



export default Operations