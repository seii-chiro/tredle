import { SolidPrimaryHeader } from "../components/PrimaryHeader"
import { PrimaryDescription } from "../components/Description"
import one from "../assets/customize_training.png"
import two from "../assets/government.png"
import three from "../assets/Training-Certification-forWorkforce-Develop.png"
import four from "../assets/B2B.png"
import five from "../assets/customize_training.png"
import six from "../assets/Bulk-Enrollment.png"
import seven from "../assets/Employee-Certification.png"

const Cards = ({ title, image, alt }: { title: string, image: string, alt: string }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-5 lg:gap-10 h-80 w-80">
            <div className="h-[70%] flex justify-center items-center">
                <img src={image} alt={alt} className="w-full" />
            </div>
            <p className="font-bold text-base text-center h-[20%] bg-gradient-to-r from-[#32384E] via-[#332036] to-[#742822] bg-clip-text text-transparent">{title}</p>
        </div>
    )
}

const CTGP = () => {

    const cardDetails = [
        {
            title: "Customized Training for Enterprises",
            image: one,
            alt: "man clicking a holographic  computer"
        },
        {
            title: "Government Partnerships & Accreditations",
            image: two,
            alt: "man an woman shaking hands"
        },
        {
            title: "Training & Certification for Workforce Development",
            image: three,
            alt: "employee meeting in an office"
        },
        {
            title: "B2B Solutions for IT, AI & Cybersecurity Training",
            image: four,
            alt: "employee presenting in an office"
        },
        {
            title: "Custom Training Packages (Enterprise, Government, SMB)",
            image: five,
            alt: "employees celebrating"
        },
        {
            title: "Bulk Enrollment for Teams",
            image: six,
            alt: "three employees meeting"
        },
        {
            title: "Employee Certification Tracking Dashboard for Companies",
            image: seven,
            alt: "person typing"
        },
    ]

    return (
        <div>
            <div className="h-screen relative">
                <div className={` bg-[url("/corporate.jpg")] bg-cover bg-center h-[80%] w-full relative flex items-center`}>
                    <div className="w-[80%] lg:w-[40%] ml-[10%] text-center md:text-left">
                        <SolidPrimaryHeader color="text-white text-balance" content="Corporate Training & Government Partnerships" />
                    </div>
                </div>
                <div className="bg-gradient w-full md:w-[80%] mx-auto flex items-center justify-center md:rounded-3xl p-10 md:absolute md:bottom-16 lg:bottom-25 left-0 right-0">
                    <div className="mx-auto">
                        <PrimaryDescription color="text-white text-justify lg:text-left" description="TREDLE HUB Learning and Innovation 
                        Center collaborates with enterprises and government agencies to deliver customized training programs, workforce 
                        development initiatives, and industry-recognized certifications tailored to organizational needs. Through B2B 
                        solutions, bulk enrollment, and an employee certification tracking dashboard, we help businesses and government 
                        institutions enhance workforce skills, maintain compliance, and stay competitive in IT, AI, and cybersecurity 
                        advancements."/>
                    </div>
                </div>
            </div>

            <div className="pb-40 pt-[30rem] lg:pt-[10rem] flex items-center justify-center">
                <div className="flex flex-wrap justify-center gap-5">
                    {
                        cardDetails?.map(item => (
                            <div key={item.title} className="flex justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <Cards
                                    key={item.title}
                                    alt={item.alt}
                                    image={item.image}
                                    title={item.title}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>



        </div>
    )
}

export default CTGP