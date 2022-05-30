import React from 'react'
import { data } from './content-data'



const SolutionContent = React.memo((index) => {
  console.log("data.ecommerce",data.ecommerce)
  return (
      <div className="text-center mb-5">
          <p className='text-md tracking-tight text-accent pb-5'>
          PORQUÉ DELIVEREA ES TU SOLUCIÓN
          </p>
          {index?.index === 0 ? 
            data.ecommerce.map((item, idx) => (
              <p key={idx} className="text-sm tracking-tight text-gray-100 py-1">
                <span className="text-lg mr-2">{item.title}:</span>{" "} {item.subTitle}
              </p>
            ))
            :
            index?.index === 1 ? 
            data.operations.map((item, idx) => (
              <p key={idx} className="text-sm tracking-tight text-gray-100 py-1">
                <span className="text-lg mr-2">{item.title}:</span>{" "} {item.subTitle}
              </p>
            ))
            :
            index?.index === 2 ? 
            data.ceo.map((item, idx) => (
              <p key={idx} className="text-sm tracking-tight text-gray-100 py-1">
                <span className="text-lg mr-2">{item.title}:</span>{" "} {item.subTitle}
              </p>
            ))
            :
            index?.index === 3 ? 
            data.sport.map((item, idx) => (
              <p key={idx} className="text-sm tracking-tight text-gray-100 py-1">
                <span className="text-lg mr-2">{item.title}:</span>{" "} {item.subTitle}
              </p>
            ))
            :
            ""
          }



      </div>
  )
})



export default SolutionContent