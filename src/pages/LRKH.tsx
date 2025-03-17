import {PrimaryDescription} from '../components/Description'
import Scroll from '../components/Scroll'
import learning_knowledge from '../assets/Resources/Group 369.jpg'
import knowledgebase from '../assets/Resources/knowledge-base.jpg'
import webinars from '../assets/Resources/webinars.jpg'
import learningmaterial from '../assets/Resources/learing-materials.jpg'
import integration from '../assets/Resources/integration.jpg'

const LRKH = () => {
  return (
    <div className="relative w-full">
      <Scroll />
        <div className="mb-[28rem] md:mb-[20rem] lg:mb-[16rem] xl:mb-[20vh]">
            <div className="flex place-items-center">
              <div className="w-full">
                <img src={learning_knowledge} className="w-full" alt="Training Categories" />
              </div>
              <h1 className="absolute text-white ml-8 md:ml-20 font-bold text-2xl md:text-[2.75rem] leading-7 md:leading-9">Learning Resources & Knowledge Hub</h1>
            </div>
            <div className="absolute mx-5 md:mx-20 -mt-5 md:-mt-16 lg:-mt-24 text-justify bg-gradient-to-r p-8 rounded-2xl from-[#32384E] via-[#332036] to-[#742822] text-white">
              <PrimaryDescription
              xtraStyle="text-md md:text-[1.25rem]"
              description="TREDLE HUB Learning and Innovation Center provides a **comprehensive Learning Resources & Knowledge Hub,** offering a 
              **curated collection of articles, whitepapers, blogs, video tutorials, and webinars** to support 
              continuous learning. Our exclusive learning materials ensure that individuals and organizations 
              have **access to up-to-date industry insights, technical guides, and expert-driven content**
               to enhance their skills and knowledge in various fields." />
            </div>
          </div>
          <div className='mx-10 flex flex-col mb-10 items-center justify-center'>
            <div className='mx-10 flex flex-wrap mb-10 gap-10 items-center justify-center'>
              <div className='bg-white flex flex-col items-center border-2 h-[21rem] w-fit px-5 border-[#c1c1c1] py-5 rounded-xl space-y-5 text-center'>
                  <img src={knowledgebase} className='rounded-xl w-[18rem] md:w-[20rem]' alt="Knowledge Base" />
                  <p className='w-[18rem] md:w-[20rem]'>Knowledge Base: Articles, Whitepapers, Blogs</p>
              </div>
              <div className='bg-white flex flex-col items-center border-2 h-[21rem] w-fit px-5 border-[#c1c1c1] py-5 rounded-xl space-y-5 text-center'>
                  <img src={webinars} className='rounded-xl w-[18rem] md:w-[20rem]' alt="Video Tutorials" />
                  <p className='w-[18rem] md:w-[20rem]'>Video Tutorials & Webinars</p>
              </div>
            </div>
        <div className='mx-10 flex flex-wrap gap-10 items-center justify-center'>
            <div className='bg-white flex flex-col items-center border-2 h-[21rem] w-fit px-5 border-[#c1c1c1] py-5 rounded-xl space-y-5 text-center'>
                <img src={learningmaterial} className='rounded-xl w-[18rem] md:w-[20rem]' alt="Learning Materials" />
                <p className='w-[18rem] md:w-[20rem]'>Learning Materials: Exclusive Student Access</p>
            </div>
            <div className='bg-white flex flex-col items-center border-2 h-[21rem] w-fit px-5 border-[#c1c1c1] py-5 rounded-xl space-y-5 text-center'>
                <img src={integration} className='rounded-xl w-[18rem] md:w-[20rem]' alt="Integration" />
                <p className='w-[18rem] md:w-[20rem]'>TREDLE HUB Integration</p>
            </div>
        </div>
          </div>
        
    </div>
  )
}

export default LRKH