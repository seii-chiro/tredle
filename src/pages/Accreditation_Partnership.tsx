import { GradientPrimaryHeader } from "../components/PrimaryHeader"
import accreditation from '../assets/Resources/accreditation.jpg'

const Accreditation_Partnership = () => {
  return (
    <div>
      <div className='relative md:my-10 flex w-full'>
        <div className="flex flex-col mt-5">
          <div className='flex flex-col lg:flex-row px-5 md:px-10 items-center lg:items-start'>
            <div className="xl:w-1/2 flex items-center justify-center text-center xl:text-left xl:ml-10 mt-10 lg:mt-20">
              <GradientPrimaryHeader content="Accreditations & Partnerships" />
            </div>
            <div className="border-2 border-white p-8 z-10 rounded-2xl">
              <img src={accreditation} className="rounded-2xl h-[15rem] md:h-[25rem] xl:h-[30rem]" alt="Accreditation and Partnership" />
            </div>
          </div>
          <div className="w-full bg-gradient-to-r text-justify -mt-10 lg:-mt-44 from-[#32384E] via-[#332036] to-[#742822] text-white py-20">
            <div className="lg:w-1/2 px-5 md:px-10 lg:px-16 xl:px-32">
              <p>TREDLE HUB Learning and Innovation Center is <b>accredited and partnered</b>  with <b>leading training 
                and certification bodies,</b> ensuring that our programs meet <b>global industry standards.</b>  Through 
                these strategic partnerships, we provide <b>high-quality, recognized certifications</b>  that empower 
                individuals and organizations to stay <b>competitive and future-ready</b>  in their respective fields.</p>
            </div>
        </div>
        </div>
        
        </div>
      </div>
  )
}

export default Accreditation_Partnership