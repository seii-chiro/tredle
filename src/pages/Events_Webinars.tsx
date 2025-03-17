import { GradientPrimaryHeader } from "../components/PrimaryHeader"
import { PrimaryDescription } from "../components/Description"
import check from '../assets/check.png'
import event from '../assets/events.png'

const Events_Webinars = () => {
  return (
    <div className='relative'>
      <div className='w-full lg:mx-5 xl:mx-20 my-10 space-y-10'>
        <div className="px-10">
          <GradientPrimaryHeader 
          content="Events & Webinars"
          />
        </div>
          <div className="flex gap-10 xl:gap-20 justify-center flex-col-reverse lg:flex-row">
            <div className="lg:w-1/2 space-y-10 text-justify px-5 md:px-10">
              <PrimaryDescription 
              description="TREDLE HUB Learning and Innovation Center hosts **a diverse range of events and webinars,** including  **upcoming training sessions, industry conferences, symposiums, guest lectures, and special  webinars** led by experts. We also offer **on-demand training sessions,** ensuring flexible access to  **cutting-edge insights, skill development opportunities, and the latest industry trends** for  professionals and organizations."
              />
              <div className="space-y-3 text-[1.25rem]">
                <div className="flex gap-2 items-center">
                  <img src={check} className="w-[1.25rem] h-[1.25rem] md:w-[1.8rem] md:h-[1.8rem]" alt="Check" />
                  <p>Upcoming Training Schedules</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={check} className="w-[1.25rem] h-[1.25rem] md:w-[1.8rem] md:h-[1.8rem]" alt="Check" />
                  <p>Industry Conferences & Symposiums</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={check} className="w-[1.25rem] h-[1.25rem] md:w-[1.8rem] md:h-[1.8rem]" alt="Check" />
                  <p>Guest Lectures & Special Webinars</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={check} className="w-[1.25rem] h-[1.25rem] md:w-[1.8rem] md:h-[1.8rem]" alt="Check" />
                  <p>On-Demand Training Sessions</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex justify-end items-center xl:-mt-28 ml-5 md:ml-0">
              <img src={event} className="rounded-tl-3xl rounded-bl-3xl" alt="Event and Webinars" />
            </div>
          </div>
        
      </div>
    </div>
  )
}

export default Events_Webinars