import Scroll from "../components/Scroll"
import { PrimaryDescription } from "../components/Description"
import { ThirdDescription } from "../components/Description"
import { Card } from "../components/Card"
import training from '../assets/Resources/5210 (1) 1.png'
import AI from '../assets/Resources/AI.jpg'
import data from '../assets/Resources/Icons/data.png'
import deep from '../assets/Resources/Icons/deep-learning.png'
import erp from '../assets/Resources/erp.jpg'
import forensic from '../assets/Resources/forensic.jpg'
import cybersecurity from '../assets/Resources/cybersecurity.jpg'
import DevOps from '../assets/Resources/DevOps.jpg'
import Agile from '../assets/Resources/Agile-Framework.jpg'
import digital from '../assets/Resources/digital-marketing.jpg'
import space from '../assets/Resources/space-tech.jpg'
import system from '../assets/Resources/unnamed-system.jpg'
import IGS from '../assets/Resources/IGS.jpg'
import ITS from '../assets/Resources/ITs.jpg'
import DS from '../assets/Resources/DS.jpg'
import search from '../assets/Resources/Icons/search.png'

const Trainingcategories = () => {
  return (
    <div>
      <Scroll />
      <div className="relative w-full mb-32">
        <div className="mb-[30rem] md:mb-[32vh] xl:mb-[20vh]">
          <div className="flex place-items-center">
            <div className="w-full">
              <img src={training} className="w-full" alt="Training Categories" />
            </div>
            <h1 className="absolute text-white ml-8 md:ml-20 font-bold text-2xl md:text-[2.75rem] leading-9">Training Categories</h1>
            <h1 className="absolute text-white ml-32 md:ml-20 font-bold text-2xl md:text-[2.75rem] leading-9"></h1>
          </div>
          <div className="absolute mx-5 md:mx-20 -mt-10 md:-mt-20 lg:-mt-24 text-justify bg-gradient-to-r p-8 rounded-2xl from-[#32384E] via-[#332036] to-[#742822] text-white">
            <PrimaryDescription
            xtraStyle="text-md md:text-[1.25rem]"
            description="Offers **training programs** across **IT & Software Development, Artificial Intelligence, Data Science,
            Cybersecurity, Cloud Computing, ERP, and Business Solutions,** equipping individuals and businesses
            with **industry-leading skills and certifications**. Our specialized courses also cover **emerging fields** such
            as **Space Technologies, Unmanned Systems (UxS), Intelligence Gathering Systems, and Digital
            Forensics** ensuring learners stay at the forefront of **technological innovation and industry
            advancements.**" />
          </div>
        </div>
        {/* IT & Software */}
        <div id="it-and-software-development" className="scroll-mt-36 flex items-center flex-col-reverse lg:flex-row mt-20 md:px-20 gap-5 xl:gap-32 ">
          <div className="lg:w-1/2 flex px-5 md:px-0">
            <Card 
          title="IT & Software Development"
          description="TREDLE HUB Learning and Innovation Center provides **comprehensive training in IT and Software 
          Development,** equipping learners with **industry-relevant coding, system architecture, and software engineering 
          skills** to excel in today’s fast-evolving digital landscape."/>
          </div>
          <div className="lg:w-1/2 bg-[#1e365d]/5 p-5 rounded-2xl">
            <img src={ITS} className="rounded-2xl w-full" alt="Digital Forensic and Investigation" />
          </div>
        </div>

        {/* AI and Machine Learning */}
        <div className="mt-20 flex flex-wrap bg-gradient-to-r from-[#32384E] via-[#332036] to-[#742822] text-white w-full px-5 py-10 md:p-20">
          <ThirdDescription 
          id="ai-and-ml"
          title="Artificial Intelligence & Machine Learning"
          description="Offers **specialized training in Artificial Intelligence and Machine Learning,**
          equipping learners with **cutting-edge AI technologies, data-driven decision-making skills, and hands-on experience 
          in developing intelligent systems** for various industries."/>
          <div className="mt-5 gap-5 flex flex-wrap items-center">
            <div className="lg:w-1/2 mt-5 rounded-2xl">
              <img src={AI} className="rounded-2xl w-full xl:w-[60rem]" alt="AI Machine Learning" />
            </div>
            <div className="flex flex-col gap-3 w-[21rem] xl:w-[30rem] mx-auto">
              <div className="bg-white p-4 flex gap-5 items-center rounded-md border-2 border-[#c1c1c1] shadow-sm shadow-[#c1c1c1]">
                <img src={data} className="w-14" alt="Data" />
                <p className="bg-gradient-to-r text-transparent from-[#32384E] via-[#332036] to-[#742822] bg-clip-text font-bold text-[1.5rem]">Data Engineering</p>
              </div>
              <div className="bg-white p-4 flex gap-5 items-center rounded-md border-2 border-[#c1c1c1] shadow-sm shadow-[#c1c1c1]">
                <img src={deep} className="w-14" alt="Data" />
                <p className="bg-gradient-to-r leading-6 text-transparent from-[#32384E] via-[#332036] to-[#742822] bg-clip-text font-bold text-[1.5rem]">Data Science and Machine Learning</p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Science */}
        <div id="data-science-and-analytics" className="scroll-mt-36 flex items-center flex-col-reverse lg:flex-row mt-20 md:px-20 gap-5 xl:gap-32 ">
          <div className="lg:w-1/2 px-5 md:px-0 flex flex-col">
            <Card 
            title="Data Science & Analytics"
            description="TREDLE HUB Learning and Innovation Center provides **comprehensive training in Data Science & Analytics,**
            empowering learners with **data-driven decision-making skills, statistical modeling, machine learning techniques, and 
            hands-on experience in extracting valuable insights from complex data.**"/>
            <div className="bg-gradient-to-tr mt-7 md:mt-10 md:w-[23rem] from-[#1e365c] via-[#2f183e] to-[#742822] p-4 flex gap-5 items-center rounded-md">
              <img src={search} className="w-14" alt="Search Icon" />
              <p className="leading-6 font-bold text-white text-[1.5rem]">Data Science and Machine Learning</p>
            </div>
          </div>
          <div className="lg:w-1/2 bg-[#1e365d]/5 p-5 rounded-2xl">
            <img src={DS} className="rounded-2xl w-full" alt="Data Science & Machine Learning" />
          </div>
        </div>

        {/* ERP */}
        <div id="erp-and-business-solution" className="scroll-mt-36 flex items-center flex-col lg:flex-row mt-20 md:px-20 gap-5 xl:gap-32">
          <div className="lg:w-1/2 bg-[#1e365d]/5 p-5 rounded-2xl">
            <img src={erp} className="rounded-2xl w-full" alt="ERP and Business Solution" />
          </div>
          <div className="lg:w-1/2 px-5 md:px-0 flex">
            <Card 
          title="ERP & Business Solutions"
          description="TREDLE HUB Learning and Innovation Center offers **specialized training in ERP & Business Solutions,**
           equipping learners with **enterprise resource planning systems, business process optimization, and technology-driven solutions**
           to enhance operational efficiency and decision-making in organizations."/>
          </div>
        </div>

        {/* Digital Foensic */}
        <div id="digital-forensics-and-investigation" className="scroll-mt-36 flex items-center flex-col-reverse lg:flex-row mt-20 md:px-20 gap-5 xl:gap-32 ">
          <div className="lg:w-1/2 px-5 md:px-0 flex">
            <Card 
          title="Digital Forensics & Investigation"
          description="TREDLE HUB Learning and Innovation Center provides **expert training in Digital Forensics & Investigation,**
           equipping learners with **advanced techniques for cybercrime analysis, data recovery, incident response, and forensic evidence collection**
            to support cybersecurity and law enforcement efforts."/>
          </div>
          <div className="lg:w-1/2 bg-[#1e365d]/5 p-5 rounded-2xl">
            <img src={forensic} className="rounded-2xl w-full" alt="Digital Forensic and Investigation" />
          </div>
        </div>

        {/* Cybersecurity */}
        <div id="cybersecurity-and-ethical-hacking" className="scroll-mt-36 flex items-center flex-col lg:flex-row mt-20 md:px-20 gap-5 xl:gap-32 ">
          <div className="lg:w-1/2 bg-[#1e365d]/5 p-5 rounded-2xl">
            <img src={cybersecurity} className="rounded-2xl w-full" alt="Cybersecurity and Ethical hacking" />
          </div>
          <div className="lg:w-1/2 px-5 md:px-0 flex">
            <Card 
          title="Cybersecurity & Ethical Hacking"
          description="TREDLE HUB Learning and Innovation Center offers **comprehensive training in Cybersecurity & Ethical Hacking,** equipping learners with 
          **advanced skills in network security, penetration testing, threat analysis, and defensive strategies** to protect systems, data, and organizations from cyber threats."/>
          </div>
        </div>

        <div id="cloud-computing-and-devops" className="scroll-mt-36 flex mt-20 flex-col-reverse lg:flex-row gap-5 xl:gap-32  items-center bg-gradient-to-r from-[#32384E] via-[#332036] to-[#742822] text-white w-full py-10 px-5 md:p-20">
          <div className="lg:w-1/2">
            <ThirdDescription 
          title="Cloud Computing & DevOps"
          description="TREDLE HUB Learning and Innovation Center offers **comprehensive training in Cloud Computing & DevOps,** equipping learners with 
          **cloud infrastructure management, automation, CI/CD pipelines, and scalable deployment strategies** to optimize modern IT operations and software development."/>
          </div>
          <div className="lg:w-1/2">
            <img src={DevOps} className="rounded-xl shadow-[0_0_70px_rgba(193,_193,_193,_0.25)] w-full" alt="Cloud Computing and DevOps" />
          </div>
        </div>

        <div id="project-management-and-agile-frameworks" className="scroll-mt-36 flex items-center flex-col lg:flex-row mt-20 md:px-20 gap-5 xl:gap-32 ">
          <div className="lg:w-1/2 bg-[#1e365d]/5 p-5 rounded-2xl">
            <img src={Agile} className="rounded-2xl w-full" alt="Project Management and Agile Framework" />
          </div>
          <div className="lg:w-1/2 px-5 md:px-0 flex">
            <Card 
          title="Project Management & Agile Frameworks"
          description="TREDLE HUB Learning and Innovation Center provides **specialized training in Project Management & Agile Frameworks,**
          equipping learners with **industry-standard methodologies, agile principles, and practical tools** to effectively manage projects, streamline workflows, and drive business success."/>
          </div>
        </div>

        <div id="digital-marketing" className="scroll-mt-36 flex items-center flex-col-reverse lg:flex-row mt-20 md:px-20 gap-5 xl:gap-32 ">
          <div className="lg:w-1/2 px-5 md:px-0 flex">
            <Card 
          title="Digital Marketing"
          description="TREDLE HUB Learning and Innovation Center offers **comprehensive training in Digital Marketing,** equipping learners with 
          **strategic online marketing techniques, social media management, SEO, content creation, and data-driven analytics**
          to enhance brand visibility and business growth in the digital landscape."/>
          </div>
          <div className="lg:w-1/2 bg-[#1e365d]/5 p-5 rounded-2xl">
            <img src={digital} className="rounded-2xl w-full" alt="Digital Marketing" />
          </div>
        </div>

        {/* group 1 */}
        <div id="space-technologies" className="scroll-mt-36 flex items-center flex-col lg:flex-row mt-20 md:px-20 gap-5 xl:gap-32 ">
          <div className="lg:w-1/2 bg-[#1e365d]/5 p-5 rounded-2xl">
            <img src={space} className="rounded-2xl w-full" alt="Space Technology" />
          </div>
          <div className="lg:w-1/2 flex px-5 md:px-0">
            <Card 
          title="Space Technologies"
          description="TREDLE HUB Learning and Innovation Center provides **specialized training in Space Technologies,**
           equipping learners with **foundational and advanced knowledge in satellite systems, space exploration, remote sensing, and emerging aerospace innovations** to support advancements in the space industry."/>
          </div>
        </div>

        {/* Group 2 */}
        <div id="uxs" className="scroll-mt-36 flex items-center flex-col-reverse lg:flex-row mt-20 md:px-20 gap-5 xl:gap-32 ">
          <div className="lg:w-1/2 flex px-5 md:px-0">
            <Card 
          title="Unmanned Systems (UxS)"
          description="TREDLE HUB Learning and Innovation Center offers **specialized training in Unmanned Systems (UxS),** equipping learners with **expertise 
          in autonomous and remotely operated aerial, ground, surface, and underwater vehicles,** focusing on **operations, maintenance, and emerging applications across various industries.**"/>
          </div>
          <div className="lg:w-1/2 bg-[#1e365d]/5 p-5 rounded-2xl">
            <img src={system} className="rounded-2xl w-full" alt="Unmanned Systems" />
          </div>
        </div>

        <div id="intelligence-gathering-systems" className="scroll-mt-36 flex mt-20 gap-5 xl:gap-32 flex-col lg:flex-row items-center bg-gradient-to-r from-[#32384E] via-[#332036] to-[#742822] text-white w-full py-10 px-5 md:p-20">
          <div className="lg:w-1/2">
            <img src={IGS} className="rounded-xl  shadow-[0_0_70px_rgba(193,_193,_193,_0.25)] w-full" alt="Intelligence Gathering System" />
          </div>
          <div className="lg:w-1/2">
            <ThirdDescription 
          id=""
          title="Intelligence Gathering Systems"
          description="TREDLE HUB Learning and Innovation Center provides specialized training in Intelligence Gathering Systems, equipping learners with techniques in data collection, analysis, cybersecurity, surveillance, and strategic intelligence methodologies to support decision-making in security, defense, and corporate environments."/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trainingcategories