import { GradientPrimaryHeader } from '../components/PrimaryHeader'
import { PrimaryDescription } from '../components/Description'
import Scroll from '../components/Scroll'
import testimonial from '../assets/Resources/testimonials.jpg'

const Testimonials = () => {
  return (
    <div className='relative my-10 flex flex-col items-center justify-center'>
      <Scroll />
      <GradientPrimaryHeader 
      content="Testimonials"/>
      <div className='flex mx-5 md:mx-20 mt-10 lg:mt-16 gap-10 flex-col lg:flex-row items-center justify-center'>
        <div className='lg:w-1/2'>
          <img src={testimonial} alt="Testimonials" />
        </div>
        <div className='lg:w-1/2 text-justify'>
          <PrimaryDescription 
          description='Real success stories from students and professionals who have completed training
           and certifications. TREDLE HUB Learning and Innovation Center showcases **real success stories**
            from students and professionals who have completed our **training programs and certifications,** 
            highlighting their **career growth, skill development, and industry achievements.** These testimonials
            reflect the **impact of our expert-led training, globally recognized certifications, and hands-on 
            learning approach,** inspiring others to advance their careers and thrive in a competitive job market.'/>
        </div>
      </div>
    </div>
  )
}

export default Testimonials