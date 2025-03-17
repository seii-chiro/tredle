import Scroll from "../components/Scroll"
import meeting from "../assets/Resources/meeting.jpg"
import { PrimaryDescription } from "../components/Description"

const Faculty = () => {
  return (
    <div>
      <Scroll />
      <div className="relative">
        <div className="mb-[50rem] md:mb-[50vh] lg:mb-[20rem] xl:mb-[30vh]">
            <div className="flex place-items-center">
              <div className="w-full">
                <img src={meeting} className="w-full" alt="Faculty & Certified Instructor" />
              </div>
              <h1 className="absolute text-white ml-8 md:ml-20 font-bold text-2xl md:text-[2.75rem] leading-9">Faculty & Certified Instructor</h1>
            </div>
            <div className="absolute mx-5 md:mx-20 -mt-5 md:-mt-28 lg:-mt-32 text-justify bg-gradient-to-r p-8 rounded-2xl from-[#32384E] via-[#332036] to-[#742822] text-white">
              <PrimaryDescription
              xtraStyle="text-md md:text-[1.25rem]"
              description="At **TREDLE HUB Learning and Innovation Center,** our faculty and certified instructors 
              are **seasoned professionals** with extensive **industry experience, globally recognized certifications, 
              and a strong commitment to excellence in education.** Each instructor brings a wealth of **practical knowledge**
              gained from working in **various industries,** ensuring that learners receive **real-world insights and hands-on training.**
              With backgrounds in **management, business, technology, agriculture, and multiindustry domains,** our instructors 
              are **not only educators but also mentors,** guiding students through **cutting-edge curricula** designed to meet 
              **current industry standards.** Their expertise, combined with innovative teaching methods, ensures that every 
              learner gains **valuable skills, industry-recognized credentials, and the confidence** to excel in today’s competitive landscape." />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Faculty