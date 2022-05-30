import { logoImages } from "./logos"
import Image from 'next/image'
const LogoSection = () => {
  return (
    <div style={{background:"#FAFAFA"}} className="w-full py-8 flex items-center justify-center ">
        {logoImages.map((logo, idx) => (
            <div key={idx} className='relative w-24 h-20 mr-20'>
                <Image
                src={logo.src}
                layout="fill"
                objectFit="contain"
                />
            </div>
        ))}
    </div>
  )
}

export default LogoSection