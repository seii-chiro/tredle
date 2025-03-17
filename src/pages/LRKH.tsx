import { GradientPrimaryHeader } from '../components/PrimaryHeader'
import Skills from '../assets/Resources/Skills.png'
import knowledgebase from '../assets/Resources/knowledge-base.jpg'
import webinars from '../assets/Resources/webinars.jpg'
import learningmaterial from '../assets/Resources/learing-materials.jpg'
import integration from '../assets/Resources/integration.jpg'

const LRKH = () => {
  return (
    <div className="relative w-full">
        <div className="mb-[60vh] md:mb-44">
          <div className="flex flex-col-reverse lg:flex-row w-full space-x-5 xl:space-x-20">
            <img src={Skills} className="w-full lg:w-1/2 h-[40vh] md:h-[60vh] xl:h-[70vh]" alt="Learning Resources and Knowledge" />
            <div className="my-5 md:mt-20 xl:mt-32 ml-5 lg:ml-0 leading-12 text-left flex mx-auto xl:mx-0">
              <GradientPrimaryHeader content="Learning Resources & Knowledge Hub"/>
            </div>
          </div>
          <div className="absolute -mt-16 md:-mt-32 lg:-mt-56 xl:-mt-72 lg:w-4xl mx-10 lg:mr-5 text-justify right-0 bg-gradient-to-r p-5 rounded-2xl from-[#32384E] via-[#332036] to-[#742822] text-white xl:w-5xl">
            <p className='text-white text-justify text-[1.25rem]'>TREDLE HUB Learning and Innovation Center provides a <b>comprehensive Learning Resources & Knowledge Hub,
                </b>  offering a <b>curated collection of articles, whitepapers, blogs, video tutorials, and webinars</b> to support continuous learning. Our exclusive 
                learning materials ensure that individuals and organizations have <b>access to up-to-date industry insights, technical guides, and expert-driven content</b>  
                to enhance their skills and knowledge in various fields.</p>
          </div>
        </div>
        <div className='mx-10 flex flex-wrap mb-10 gap-10 items-center justify-center'>
            <div className='bg-white flex flex-col items-center border-2 h-[21rem] w-fit px-5 border-[#c1c1c1] py-5 rounded-xl space-y-5 text-center'>
                <img src={knowledgebase} className='rounded-xl w-[20rem]' alt="Knowledge Base" />
                <p className='w-[20rem]'>Knowledge Base: Articles, Whitepapers, Blogs</p>
            </div>
            <div className='bg-white flex flex-col items-center border-2 h-[21rem] w-fit px-5 border-[#c1c1c1] py-5 rounded-xl space-y-5 text-center'>
                <img src={webinars} className='rounded-xl w-[20rem]' alt="Video Tutorials" />
                <p className='w-[20rem]'>Video Tutorials & Webinars</p>
            </div>
            <div className='bg-white flex flex-col items-center border-2 h-[21rem] w-fit px-5 border-[#c1c1c1] py-5 rounded-xl space-y-5 text-center'>
                <img src={learningmaterial} className='rounded-xl w-[20rem]' alt="Learning Materials" />
                <p className='w-[20rem]'>Learning Materials: Exclusive Student Access</p>
            </div>
            <div className='bg-white flex flex-col items-center border-2 h-[21rem] w-fit px-5 border-[#c1c1c1] py-5 rounded-xl space-y-5 text-center'>
                <img src={integration} className='rounded-xl w-[20rem]' alt="Integration" />
                <p className='w-[20rem]'>TREDLE HUB Integration</p>
            </div>
        </div>
    </div>
  )
}

export default LRKH