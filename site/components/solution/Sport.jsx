import React from 'react'
import Image from 'next/image'
import sportInactive from '../../assets/icons/sportInactive.png'
import sportActive from '../../assets/icons/sportActive.png'


const Sport = React.memo((index) => {
  return (
    <div className='relative w-100 h-28 object-center'>
      {index.index === 3 ?
        <Image
        src={sportActive}
        layout="fill"
        objectFit="contain"
        />
        :
        <Image
        src={sportInactive}
        layout="fill"
        objectFit="contain"
        />
      }

    </div>
  )
})



export default Sport