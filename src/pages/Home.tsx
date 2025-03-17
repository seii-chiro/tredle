import { Link } from "react-router"
import { SolidPrimaryHeader } from "../components/PrimaryHeader"
import Scroll from "../components/Scroll"
import { TitleGradient } from "../components/Titles"
import { BaseDescription } from "../components/Description"
import check from "../assets/check.png"
import treddlegirlmock from "../assets/girl-model.png"
import MarqueeCarousel from "../components/MarqueeCarousel"

const Card = ({ content }: { content: string }) => {
    return (
        <div>
            <div className="bg-gradient flex justify-center items-center text-center text-balance text-xl font-semibold p-5 text-white rounded-3xl h-40 w-80">
                <p>{content}</p>
            </div>
        </div>
    )
}

const Home = () => {

    const categories = [
        { id: 1, name: "IT & Software Development" },
        { id: 2, name: "Artificial Intelligence & Machine Learning" },
        { id: 3, name: "Data Science & Analytics" },
        { id: 4, name: "ERP & Business Solutions" },
        { id: 5, name: "Digital Forensics & Investigation" },
        { id: 6, name: "Cybersecurity & Ethical Hacking" },
        { id: 7, name: "Cloud Computing & DevOps" },
        { id: 8, name: "Project Management & Agile Frameworks" },
        { id: 9, name: "Digital Marketing" },
        { id: 10, name: "Space Technologies" },
        { id: 11, name: "Unmanned Systems (UxS)" },
        { id: 12, name: "Intelligence Gathering Systems" }
    ];

    return (
        <>
            <Scroll />
            <div>
                <div className={`bg-[url("/hero.png")] bg-cover bg-center h-[95vh] w-full relative`}>
                    <div className="flex flex-col gap-4 pt-[40%] md:pt-[16%] mx-[10%]">
                        <div className="flex flex-col leading-none">
                            <SolidPrimaryHeader color="navy-blue-text" content="TREDDLE HUB" />
                            <SolidPrimaryHeader color="navy-blue-text" content="Website" />
                        </div>
                        <div>
                            <p className="text-[1.25rem] navy-blue-text text-balance">
                                A Center for Excellence in Technology, <br />
                                Trainings, and Certifications
                            </p>
                        </div>
                    </div>
                    <div className="w-full items-center justify-center flex absolute bottom-20 lg:bottom-30">
                        <ul className="flex gap-5 flex-col md:flex-row">
                            <li className="bg-navy-blue text-white px-4 py-1 rounded-3xl flex items-center justify-center"><Link to={"/programs/certification-programs"}>Explore Courses</Link></li>
                            <li className="bg-navy-blue text-white px-4 py-1 rounded-3xl flex items-center justify-center"><Link to={"/programs#training-categories"}>Become Certified</Link></li>
                            <li className="bg-navy-blue text-white px-4 py-1 rounded-3xl flex items-center justify-center"><Link to={"/contact-us"}>Connect with Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="bg-[#F5F5F5] w-full flex flex-col items-center justify-center py-10">
                    <h2 className="navy-blue-text text-[2rem] font-semibold py-10 text-balance text-center">Upcoming Training & Events</h2>


                    <div className="w-full">
                        <MarqueeCarousel items={
                            categories.map(item => <Card key={item.id} content={item.name} />)
                        } />
                    </div>

                </div>

                <div className="flex flex-col lg:flex-row items-center py-16">
                    <div className="flex-1 flex flex-col gap-8 mx-[5%]">
                        <TitleGradient title="Why Choose Us?" />
                        <BaseDescription
                            xtraStyles="text-justify lg:text-left"
                            id="why-choose-us"
                            description="TREDLE HUB Learning and Innovation Center showcases **real success stories** 
                        from students and  professionals who have completed our **training programs and certifications,** 
                        highlighting their **career  growth, skill development, and industry achievements.** 
                        These testimonials reflect the **impact of our  expert-led training, globally recognized 
                        certifications, and hands-on learning approach,** inspiring  others to advance their careers 
                        and thrive in a competitive job market."
                        />
                        <ul className="flex flex-col gap-3">
                            <li className="flex gap-5 items-center">
                                <img src={check} alt="checkbox-icon" />
                                <p className="text-base sm:text-[1.25rem] md:text-[1.5rem] navy-blue-text font-semibold">Customer Centric Solution</p>
                            </li>
                            <li className="flex gap-5 items-center">
                                <img src={check} alt="checkbox-icon" />
                                <p className="text-base sm:text-[1.25rem] md:text-[1.5rem] navy-blue-text font-semibold">Proven Expertise and Experience</p>
                            </li>
                            <li className="flex gap-5 items-center">
                                <img src={check} alt="checkbox-icon" />
                                <p className="text-base sm:text-[1.25rem] md:text-[1.5rem] navy-blue-text font-semibold">Confident Track Record</p>
                            </li>
                            <li className="flex gap-5 items-center">
                                <img src={check} alt="checkbox-icon" />
                                <p className="text-base sm:text-[1.25rem] md:text-[1.5rem] navy-blue-text font-semibold">Flexible Business Model</p>
                            </li>
                            <li className="flex gap-5 items-center">
                                <img src={check} alt="checkbox-icon" />
                                <p className="text-base sm:text-[1.25rem] md:text-[1.5rem] navy-blue-text font-semibold">Strong Core on Cybersecurity</p>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <img src={treddlegirlmock} alt="A woman holding a laptop with Tredle HUb on display" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
