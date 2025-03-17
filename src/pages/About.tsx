import Scroll from "../components/Scroll"
import { BaseDescription, PrimaryDescription } from "../components/Description";
import { GradientPrimaryHeader, SolidPrimaryHeader } from "../components/PrimaryHeader";
import { BorderedTitleGradient, TitleGradient } from "../components/Titles";
import lobby from "../assets/Tambuli.png"
import nerd from "../assets/nerd.png"
import { HistoryCardR, HistoryCardL } from "../components/HistoryCards";
import capitol from "../assets/capitol.png"
import laptop from "../assets/laptop.png"
import target from "../assets/target.png"
import vision from "../assets/vision.png"
import values from "../assets/values.png"
import training from "../assets/training.png"

const BulletedList = ({ title, description, color }: { title: string, description: string, color: string }) => {
  return (
    <li className={`${color} list-none`}>
      <p><b>&bull; {title}</b>: {description}</p>
    </li>
  )
}

const About = () => {

  const bulletedList = [
    { title: "Teachable", description: "The ability to learn through guidance and instruction." },
    { title: "Resolute", description: "Demonstrating determination and strong purpose." },
    { title: "Effective", description: "Achieving desired goals and outcomes." },
    { title: "Diligent", description: "Showing meticulous and persistent effort in tasks." },
    { title: "Luminous", description: "Exhibiting intellectual brilliance." },
    { title: "Esoteric", description: "Possessing unique, exceptional knowledge and understanding." }
  ];

  const bulletedList2 = [
    { title: "Hardworking", description: "Energetically and earnestly dedicated to work." },
    { title: "Useful", description: "Skilled and competent in their field." },
    { title: "Brilliant", description: "Exceptionally skillful and innovative." }
  ];

  const valuesList = [
    { title: "Excellence", description: "We strive for the highest quality in education, training, and certification, ensuring learners achieve exceptional results." },
    { title: "Innovation", description: "We embrace emerging technologies and progressive methodologies to remain at the forefront of learning and development." },
    { title: "Integrity", description: "We uphold ethical practices and transparency in all our operations." },
    { title: "Empowerment", description: "We focus on equipping individuals with the confidence and skills needed to succeed in their careers and communities." },
    { title: "Collaboration", description: "We build strong partnerships with industry leaders, institutions, and organizations to create impactful learning experiences." },
    { title: "Lifelong Learning", description: "We foster a culture of continuous growth and knowledge advancement for learners and educators alike." }
  ];

  const philosophyList = [
    { title: "Equip Learners", description: "Equip learners with theoretical and practical knowledge." },
    { title: "Build Adaptability", description: "Build adaptability for open-source and commercial technologies." },
    { title: "Encourage Critical Thinking", description: "Encourage critical thinking and problem-solving skills through real-life scenarios." },
    { title: "Promote Values", description: "Promote values of diligence, brilliance, and innovation." }
  ];



  return (
    <>
      <Scroll />
      <div>
        <div className={`bg-[url("/about_hero.png")] bg-contain bg-no-repeat bg-center h-[92vh] w-full relative flex justify-center items-center`}>
          <div className="w-[90%] lg:w-[70%] text-justify lg:text-center absolute bottom-14">
            <PrimaryDescription description="TREDLE HUB Learning and Innovation Center empowers **professionals, businesses, 
          entrepreneurs,  and students in Aklan and neighboring provinces** with **globally recognized certifications 
          and industry relevant skills** through **Accredited programs, partnerships with global testing centers like 
          Prometric,  and strategically located facilities in Quezon City and Kalibo, Aklan,** ensuring they stay 
          competitive in  today’s technology-driven world."/>
          </div>
        </div>

        <div id="about-us" className="bg-[url('/aboutus_bg.png')] bg-cover bg-no-repeat bg-center min-h-screen w-full flex justify-center items-center py-10 lg:py-0 scroll-mt-16">
          <div className="flex justify-center items-center flex-col gap-14 w-full h-full">
            <SolidPrimaryHeader color="text-white" content="About Us" />
            <p className="font-medium text-2xl md:text-[2rem] text-white w-[90%] lg:w-[60%] text-center">TREDLE HUB Learning and Innovation Center: Empowering Careers, Strengthening Industries</p>
            <div className="flex gap-10 w-[80%] flex-col lg:flex-row">
              <div className="flex flex-col gap-10">
                <BaseDescription
                  xtraStyles="text-justify"
                  color="text-white"
                  description="TREDLE HUB Learning and Innovation Center is a premier training, 
                education, and knowledge hub  designed to meet the evolving needs of **professionals, businesses, 
                entrepreneurs, students,** and  industries in **Aklan and neighboring provinces.** We are committed to 
                equipping individuals with **globally recognized certifications** and **industry-relevant skills,** 
                enabling them to **thrive in today’s  competitive, technology-driven economy.**"
                />
                <BaseDescription
                  xtraStyles="text-justify"
                  color="text-white"
                  description="Our specialized programs cover **management, business, technology, 
                agriculture, and multi-industry  domains,** ensuring that learners gain expertise that is both 
                **practical and adaptable.** We integrate **both  open-source and commercial technologies,** providing 
                a **well-rounded education** that meets the  diverse needs of professionals and organizations seeking 
                to **advance their capabilities** in an  increasingly digital world."
                />
              </div>
              <div className="flex flex-col gap-10">
                <BaseDescription
                  xtraStyles="text-justify"
                  color="text-white"
                  description="With a strong focus on **Accredited programs** and **partnerships with 
                global testing centers like  Prometric, TREDLE HUB** delivers a comprehensive range of **technical-vocational 
                education,  professional certification programs, and corporate training solutions.** Our **state-of-the-art 
                facilities,  innovative training methodologies, and expert instructors** ensure that every learner gains 
                **cutting edge knowledge and hands-on experience,** setting them up for **career growth and long-term success.**"
                />
                <BaseDescription
                  xtraStyles="text-justify"
                  color="text-white"
                  description="As industries continue to undergo rapid **digital transformation,** 
                the demand for **skilled professionals**  grows stronger. **TREDLE HUB aligns with national workforce 
                development efforts,** such as **TESDA  initiatives,** by offering **high-impact training** that enables 
                individuals and businesses to **stay  competitive** in a **globalized economy.**"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center py-30">
          <div className="w-[85%] flex gap-30 items-center flex-col lg:flex-row">
            <div className="flex-1 flex flex-col gap-10 xl:gap-16">
              <TitleGradient title="Strategically Located to Serve Industry and Workforce Needs" />
              <BaseDescription
                xtraStyles="text-justify lg:text-left"
                description="Our **headquarters in Quezon City** ensures that we remain at the **forefront of technological  
            advancements and industry trends.** This location allows us to continuously update our programs with  the **latest innovations, 
            tools, and methodologies,** ensuring that our **learners stay ahead of the curve.** Proximity to **major business districts, 
            innovation hubs, and industry leaders** provides our students  and corporate clients with **valuable networking opportunities, 
            collaborations, and direct industry  exposure,** enhancing their career prospects and business success."/>
              <BaseDescription
                xtraStyles="text-justify lg:text-left"
                description="Meanwhile, our **main training center in Kalibo, Aklan**—home to the **world-famous Ati-Atihan  
            Festival**—serves as the foundation of our **regional outreach.** This strategic location enables us to **bring  world-class education 
            and training closer to the local community,** helping **Aklanons and neighboring provinces** gain access to **career-enhancing programs** 
            without the need to relocate. By fostering **local  talent development and economic growth, TREDLE HUB** plays a crucial role 
            in preparing individuals  and organizations for the **future of work.**"/>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div className="w-[90%] flex flex-col gap-10">
                <div className="w-full">
                  <img src={lobby} alt="Tambuli Labs Lobby" className="w-full" />
                </div>
                <BaseDescription
                  xtraStyles="text-justify"
                  description="**Whether you are an individual looking to upskill, a business seeking to train your workforce, 
            or an  organization aiming for technological advancement, TREDLE HUB is your trusted partner in  professional growth and 
            innovation.**"/>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="flex-1 flex items-center justify-center mt-[-12%] lg:mt-0 lg:mr-[-10%] p-10 z-10">
              <img src={nerd} alt="Man with a laptop pointing his finger" className="hidden lg:block lg:w-[80%]" />
              <img src={nerd} alt="Man with a laptop pointing his finger" className="block lg:hidden" />
            </div>
            <div className="flex-[1.25] bg-gradient lg:rounded-l-3xl flex items-center justify-center py-10">
              <div className="w-[85%] flex flex-col gap-6">
                <h2 className="font-semibold text-[2rem] text-white">What’s in the Name TREDLE HUB?</h2>
                <h3 className="font-semibold text-lg text-white">
                  TREDLE is an acronym for TRained, EDucated, and LEarned. It embodies independence, enthusiasm,
                  and admiration. Each letter in TREDLE signifies qualities we instill in our learners:
                </h3>

                <ul className="text-white">
                  {
                    bulletedList?.map(item => (
                      <BulletedList key={item.title} title={item.title} description={item.description} color="text-white" />
                    ))
                  }
                </ul>

                <h3 className="font-semibold text-lg text-white">
                  HUB stands for Hardworking, Useful, and Brilliant, emphasizing the caliber of individuals
                  molded by  TREDLE HUB. A TREDLE HUB-trained individual is:
                </h3>

                <ul>
                  {
                    bulletedList2?.map(item => (
                      <BulletedList key={item.title} title={item.title} description={item.description} color="text-white" />
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-40">
          <div id="background-history" className="w-[75%] py-10 scroll-mt-16">
            <GradientPrimaryHeader content="History" />
          </div>

          <div className="w-[90%] flex flex-col gap-20">
            <HistoryCardL
              image={laptop}
              alt="image of a laptop"
              description="The **TREDLE HUB Learning and Innovation Center** was established with a clear mission: to provide  
                    **high-quality technological training and education** tailored to the needs of individuals, professionals,  
                    businesses, and organizations in **Aklan and neighboring provinces.** We recognize that as industries  
                    evolve, the demand for **skilled, tech-savvy professionals** continues to grow. However, access  to **industry-aligned, 
                    globally competitive training programs** has often been limited in the region.  **TREDLE HUB** aims to bridge this gap 
                    by delivering **cutting-edge learning opportunities,** equipping our  learners with the technical expertise and 
                    certifications necessary to **thrive in the modern workforce—** whether they are students, career shifters, 
                    entrepreneurs, or corporate teams seeking upskilling."
            />

            <HistoryCardR
              image={capitol}
              alt="image of a laptop"
              description="As someone **born, raised, and educated in Kalibo,** it has always been a **lifelong dream** to establish a  
              **learning and innovation center** that directly benefits the local community. We believe that by  providing **accessible, 
              world-class training,** we can help businesses **enhance workforce capabilities,**  empower professionals to **advance their 
              careers,** and support students in gaining a **competitive edge.  TREDLE HUB** is more than just a training center—it is 
              a **partner in growth,** committed to **nurturing  talent, driving innovation, and strengthening industries in the region.**"
            />
          </div>
        </div>

        <div className="bg-[url('/mvv.png')] bg-cover bg-no-repeat bg-center min-h-screen w-full flex justify-center items-center py-10 lg:py-0 scroll-mt-16">
          <div className="w-full mx-[10%] flex flex-col gap-10">
            <div className="flex flex-col leading-none">
              <SolidPrimaryHeader color="text-white" content="Mission, Vision" />
              <SolidPrimaryHeader color="text-white" content="and Values" />
            </div>
            <div>
              <p className="text-[1.25rem] font-medium text-white w-[80%] md:w-[60%] lg:w-[35%]">
                Empowering individuals and
                organizations with cutting-edge training
                to foster innovation and career  growth.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center py-20">
          <div id="mission" className="w-[80%] flex items-center gap-10 justify-center flex-col lg:flex-row py-2 lg:py-20 scroll-mt-16">
            <div className="flex-1 flex flex-col gap-10 w-[90%]">
              <BorderedTitleGradient title="Mission" />
              <BaseDescription xtraStyles="text-justify lg:text-left" description="To empower individuals with the skills and certifications needed to thrive 
            in the modern technology driven world by providing innovative training programs, accredited education, 
            and globally aligned  assessments."
              />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img src={target} alt="target with an arrow icon" className="" />
            </div>
          </div>
        </div>

        <div id="vision" className="w-full flex items-center justify-center scroll-mt-16">
          <div className="w-[80%] flex flex-col lg:flex-row-reverse gap-10 items-center justify-center py-2 lg:py-20">
            <div className="flex-1 flex flex-col gap-10 w-[90%]">
              <BorderedTitleGradient title="Vision" />
              <BaseDescription xtraStyles="text-justify lg:text-center" description="To be the leading hub for innovative learning and certification, empowering individuals and  
              organizations to excel in a technology-driven world through cutting-edge education, partnerships, and  
              transformative training experiences."
              />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img src={vision} alt="eye" className="" />
            </div>
          </div>
        </div>

        <div id="values" className="w-full flex items-center justify-center scroll-mt-16">
          <div className="w-[80%] flex items-center justify-center gap-10 flex-col lg:flex-row py-20">
            <div className="flex-1 flex flex-col gap-10 w-[90%]">
              <BorderedTitleGradient title="Values" />
              <ul className="flex flex-col gap-1">
                {
                  valuesList?.map(item => (
                    <BulletedList key={item.title} color="text-black" title={item.title} description={item.description} />
                  ))
                }
              </ul>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img src={values} alt="diamond" className="" />
            </div>
          </div>
        </div>

        <div id="training-philosophy" className="w-full py-30 scroll-mt-16">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 w-full flex items-center justify-center">
              <img src={training} alt="people working in the office" className="w-full lg:rounded-r-3xl" />
            </div>
            <div className="flex-[1.5] flex items-center justify-center py-10">
              <div className="w-[85%] flex flex-col gap-6">
                <SolidPrimaryHeader content="Training Philosophy" color="navy-blue-text" />
                <h3 className="font-light text-lg text-black w-[90%] lg:w-[70%]">
                  TREDLE HUB believes in a holistic approach to education. Every training module is designed to:
                </h3>

                <ul className="text-black list-disc pl-5">
                  {
                    philosophyList?.map(item => (
                      <li key={item.title}>{item.description}</li>
                    ))
                  }
                </ul>

                <h3 className="font-light text-black">
                  TREDLE HUB Learning and Innovation Center is dedicated to shaping the workforce of tomorrow. By
                  combining technical expertise with a commitment to lifelong learning, we aim to create a community  of
                  individuals who are not just skilled but also hardworking, useful, and brilliant. TREDLE HUB is more  than a
                  training center—it is a hub for innovation and excellence.
                </h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default About