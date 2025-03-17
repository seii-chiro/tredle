import { SolidPrimaryHeader } from "../components/PrimaryHeader"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const ContactUs = () => {
    return <div>
        <div className="relative">
            <div className="bg-gradient-to-r py-20 text-center from-[#1E365C] via-[#2F183E] to-[#801811] w-full">
                <div>
                    <SolidPrimaryHeader 
                    color="text-white"
                    content="Contact Us"
                    />
                </div>
                <div className="flex flex-col mt-10 lg:flex-col items-center justify-center">
                <div className="border-2 flex flex-col lg:flex-row gap-8 lg:gap-2 px-5 py-5 lg:p-10 border-white rounded-xl">
                    <div className="flex text-white gap-4 w-3xs xl:w-xs">
                        <div className="bg-white/10 p-3 w-fit h-fit rounded-full">
                            <FaPhoneAlt className="text-white text-md"/>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[1rem] font-semibold">Phone Number</p>
                            <a className="text-sm font-light text-left" href="tel:+63 935 737 8970">+63 935 737 8970</a>
                            <a className="text-sm font-light text-left" href="tel:+63 2 8571 7117">+63 2 8571 7117</a>
                        </div>
                    </div>
                    <div className="flex text-white gap-4 w-3xs xl:w-xs">
                        <div className="bg-white/10 p-3 w-fit h-fit rounded-full">
                            <MdEmail className="text-white text-md"/>
                        </div>
                        <div className="flex text-left flex-col">
                            <p className="text-[1rem] font-semibold">Email Address</p>
                            <a className="text-sm font-light text-left" href="mailto:vip@tambulilabs.com">vip@tambulilabs.com</a>
                        </div>
                    </div>
                    <div className="flex text-white gap-4 w-3xs xl:w-xs">
                        <div className="bg-white/10 p-3 w-fit h-fit rounded-full">
                            <FaLocationDot className="text-white text-md"/>
                        </div>
                        <div className="flex text-left flex-col">
                            <p className="text-[1rem] font-semibold">Location</p>
                            <a className="text-sm font-light text-left" target="_blank" href="https://maps.app.goo.gl/pJ36gQepb3AZW35y7">Unit A Mezzanine Level AAP Tower, 683 Aurora Blvd, Quezon City, 1112 Metro Manila</a>
                        </div>
                    </div>
                    <div className="flex text-left flex-col gap-2">
                        <p className="text-[1rem] font-semibold text-white">Social Media</p>
                        <div className="flex gap-2">
                            <div className="bg-white w-fit rounded-full p-2">
                                <FaFacebookF className="text-[#2E1C42] text-md"/>
                            </div>
                            <div className="bg-white w-fit rounded-full p-2">
                                <FaYoutube className="text-[#2E1C42] text-md"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 lg:mt-20 bg-white rounded-xl p-2">
                <iframe className="lg:w-[58rem] h-[20rem] md:h-[30rem] md:w-[30rem] xl:w-[60rem] xl:h-[35rem] rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.7495187273844!2d121.02863838543112!3d14.613339840359151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c83eb5b090cf%3A0x8c795a8f2755a4de!2sTambuli%20Labs!5e0!3m2!1sen!2sph!4v1742053426263!5m2!1sen!2sph"></iframe>
                </div>
            </div> 
            </div>
        </div>
    </div>
}

export default ContactUs
