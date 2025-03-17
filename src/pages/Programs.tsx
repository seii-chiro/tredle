import Scroll from "../components/Scroll"
import people from "../assets/Resources/people-taking-part-business-event (1) 1 (2).jpg"
import { PrimaryDescription } from "../components/Description"

const Programs = () => {
  return (
    <div>
      <Scroll />
      <div className="relative">
        <div className="mb-[28rem] md:mb-[32vh] xl:mb-[20vh]">
            <div className="flex place-items-center">
              <div className="w-full">
                <img src={people} className="w-full" alt="Programs" />
              </div>
              <h1 className="absolute text-white ml-8 md:ml-20 font-bold text-2xl md:text-[2.75rem] leading-9">Programs</h1>
            </div>
            <div className="absolute mx-5 md:mx-20 -mt-10 md:-mt-20 lg:-mt-24 text-justify bg-gradient-to-r p-8 rounded-2xl from-[#32384E] via-[#332036] to-[#742822] text-white">
              <PrimaryDescription
              xtraStyle="text-md md:text-[1.25rem]"
              description="TREDLE HUB Learning and Innovation Center offers **comprehensive training programs**
              across  **management, business, technology, agriculture, and multi-industry fields,** integrating 
              **accredited  courses, globally recognized certifications, and hands-on learning experiences** to
              equip individuals  with **practical, in-demand skills.** Our programs combine **open-source and 
              commercial technologies,**  ensuring learners stay **adaptable and competitive** in an ever-evolving digital economy." />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Programs