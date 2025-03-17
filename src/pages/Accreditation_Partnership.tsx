import { PrimaryDescription } from '../components/Description'
import Scroll from '../components/Scroll'
import accreditation from '../assets/Resources/accreditation 1.jpg'

const Accreditation_Partnership = () => {
  return (
    <div>
      <Scroll />
      <div className='relative w-full'>
      <div className="mb-[25rem] md:mb-[32vh] xl:mb-[20vh]">
          <div className="flex place-items-center">
            <div className='w-full'>
              <img src={accreditation} className='w-full' alt="Accreditation & Partnership" />
            </div>
            <h1 className="absolute text-white mx-8 md:ml-20 font-bold text-2xl md:text-[2.75rem] leading-6 md:leading-10">Accreditations & Partnerships</h1>
          </div>
          <div className="absolute mx-5 md:mx-20 -mt-5 md:-mt-20 lg:-mt-24 text-justify bg-gradient-to-r p-5 md:p-8 rounded-2xl from-[#32384E] via-[#332036] to-[#742822] text-white">
            <PrimaryDescription
            xtraStyle="text-md md:text-[1.25rem]"
            description="TREDLE HUB Learning and Innovation Center is **accredited and partnered** with 
            **leading training and certification bodies,** ensuring that our programs meet **global industry standards.**
            Through these strategic partnerships, we provide **high-quality, recognized certifications** that empower individuals 
            and organizations to stay **competitive and future-ready** in their respective fields." />
          </div>
        </div>
        </div>
      </div>
  )
}

export default Accreditation_Partnership