import CoverFlow from 'coverflow-react';
import macnificos from '../../assets/images/macnifios.png'
import cast from '../../assets/images/cast.png'
import drim from '../../assets/images/drim.png'
import verdecora from '../../assets/images/verdecora.png'
import vw from '../../assets/images/vw.png'
import kern from '../../assets/images/kern.png'

const imagesArr = [
    macnificos,
    cast,
    drim,
    verdecora,
    vw,
    kern
];


function Brand() {
  return (
    <div className="py-14">
        <div className="text-center mb-14">
          <p className='text-md tracking-tight text-accent pb-5'>
          ¿CÓMO LO HACEMOS?
          </p>
          <p className="text-md tracking-tight text-dark">
            Toda la operativa de envíos en una única plataforma
          </p>
        </div>

    <CoverFlow imagesArr={imagesArr} /> 

    </div>
  )
}

export default Brand