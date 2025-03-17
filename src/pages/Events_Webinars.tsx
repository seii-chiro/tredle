import {PrimaryDescription} from '../components/Description'
import Scroll from '../components/Scroll'
import eventandwebinars from '../assets/Resources/eventamdwebinars.jpg'
import laptopcoworker from '../assets/Resources/laptop-coworking-space-wth-schedule 1.jpg'
import peopletaking from '../assets/Resources/people-taking-part-business-event 1.jpg'
import multiethic from '../assets/Resources/multiethnic-business-people-looking-blank-projection-screen-while-sitting-conference-table-office 1.jpg'
import collengues from '../assets/Resources/colleagues-clapping-hands-celebrating-successful-presentation-boardroom-team-business-people-receiving-applause-from-coworkers-feeling-satisfied-about-success-accomplishment 1.jpg'

const Events_Webinars = () => {
  return (
    <div className="relative w-full">
      <Scroll />
        <div className="mb-[27rem] md:mb-[32vh] xl:mb-[20vh]">
            <div className="flex place-items-center">
              <div className="w-full">
                <img src={eventandwebinars} className="w-full" alt="Event and Webinars" />
              </div>
              <h1 className="absolute text-white ml-8 md:ml-20 font-bold text-2xl md:text-[2.75rem] leading-9">Events & Webinars</h1>
            </div>
            <div className="absolute mx-5 md:mx-20 -mt-10 md:-mt-20 lg:-mt-24 text-justify bg-gradient-to-r p-8 rounded-2xl from-[#32384E] via-[#332036] to-[#742822] text-white">
              <PrimaryDescription
              xtraStyle="text-md md:text-[1.25rem]"
              description="TREDLE HUB Learning and Innovation Center hosts **a diverse range of events and webinars,** including 
              **upcoming training sessions, industry conferences, symposiums, guest lectures, and special  webinars**
              led by experts. We also offer **on-demand training sessions,** ensuring flexible access to  **cutting-edge 
              insights, skill development opportunities, and the latest industry trends** for  professionals and organizations." />
            </div>
          </div>
          <div className='flex flex-col mx-10 mb-10 items-center justify-center'>
            <div className='flex flex-wrap mb-10 gap-10 items-center justify-center'>
              <div className='bg-white flex flex-col items-center border-2 h-[21rem] w-fit px-5 border-[#c1c1c1] py-5 rounded-xl space-y-5 text-center'>
                  <img src={laptopcoworker} className='rounded-xl w-[18rem] md:w-[20rem]' alt="Upcoming Training Schedules" />
                  <p className='w-[18rem] md:w-[20rem]'>Upcoming Training Schedules</p>
              </div>
              <div className='bg-white flex flex-col items-center border-2 h-[21rem] w-fit px-5 border-[#c1c1c1] py-5 rounded-xl space-y-5 text-center'>
                  <img src={peopletaking} className='rounded-xl w-[18rem] md:w-[20rem]' alt="Industry Conferences" />
                  <p className='w-[18rem] md:w-[20rem]'>Industry Conferences & Symposiums</p>
              </div>
            </div>
        <div className='flex flex-wrap mb-10 gap-10 items-center justify-center'>
            <div className='bg-white flex flex-col items-center border-2 h-[21rem] w-fit px-5 border-[#c1c1c1] py-5 rounded-xl space-y-5 text-center'>
                <img src={multiethic} className='rounded-xl w-[18rem] md:w-[20rem]' alt="Special Webinars" />
                <p className='w-[18rem] md:w-[20rem]'>Guest Lectures & Special Webinars</p>
            </div>
            <div className='bg-white flex flex-col items-center border-2 h-[21rem] w-fit px-5 border-[#c1c1c1] py-5 rounded-xl space-y-5 text-center'>
                <img src={collengues} className='rounded-xl w-[18rem] md:w-[20rem]' alt="Training Sessions" />
                <p className='w-[18rem] md:w-[20rem]'>On-Demand Training Sessions</p>
            </div>
        </div>
          </div>
        
    </div>
  )
}

export default Events_Webinars