import { PrimaryDescription } from "../components/Description"
import { TitleGradient } from "../components/Titles"
import actcman from "../assets/atcman.png"
import actgirl from "../assets/atcgirl.png"
import Scroll from "../components/Scroll"

const GroupL = ({ image, title, description }: { image: string, title: string, description: string }) => {
    return (
        <div className="flex items-center gap-10 flex-col lg:flex-row">
            <div className="flex-1">
                <img src={image} alt="image of a laptop with a person on the screen." />
            </div>
            <div className="flex-1 flex flex-col gap-10 justify-center items-center">
                <TitleGradient xtraStyle="text-center w-[95%] lg:w-[80%] lg:text-left lg:pl-10" title={title} />
                <PrimaryDescription color="text-justify lg:text-left w-[95%] lg:w-[80%] lg:pl-10" description={description} />
            </div>
        </div>
    )
}

const GroupR = ({ image, title, description }: { image: string, title: string, description: string }) => {
    return (
        <div className="flex items-center gap-10 flex-col lg:flex-row-reverse">
            <div className="flex-1">
                <img src={image} alt="image of a laptop with a person on the screen." />
            </div>
            <div className="flex-1 flex flex-col gap-10 justify-center items-center">
                <TitleGradient xtraStyle="text-center w-[95%] lg:w-[80%] lg:text-left lg:pl-10" title={title} />
                <PrimaryDescription color="text-justify lg:text-left w-[95%] lg:w-[80%] lg:pl-10" description={description} />
            </div>
        </div>
    )
}

const ATC = () => {
    return (
        <>
            <Scroll />
            <div>
                <div className="h-screen relative">
                    <div className={` bg-[url("/ATC.png")] bg-cover bg-center h-[80%] w-full relative`}></div>
                    <div className="bg-gradient w-[80%] mx-auto flex items-center justify-center rounded-3xl p-10 absolute bottom-25 left-0 right-0">
                        <div className="mx-auto">
                            <PrimaryDescription color="text-white text-justify lg:text-left" description="TREDLE HUB Learning and Innovation Center serves as an **official testing center,** 
                    providing **on-site certification exams** in a **secure, high-speed environment** with **AI-proctored monitoring** to ensure 
                    exam integrity. We also partner with **recognized testing providers like Pearson VUE and Kryterion,** expanding access 
                    to **globally accredited certifications.**"/>
                        </div>
                    </div>
                </div>

                <div className="w-full flex items-center justify-center pt-10 pb-20">
                    <div className="w-[80%] flex flex-col gap-20">
                        <GroupL
                            image={actcman}
                            title="Online Exam Booking System"
                            description="Our **online exam booking system** offers **realtime seat availability, 
                    live chat support, and clear proctoring and ID verification policies,** ensuring 
                    a smooth testing experience for candidates. "
                        />

                        <GroupR
                            image={actgirl}
                            title="Online Exam Booking System"
                            description="Our **online exam booking system** offers **realtime seat availability, 
                    live chat support, and clear proctoring and ID verification policies,** ensuring 
                    a smooth testing experience for candidates. "
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ATC