import tredlehubLogoV3 from "../assets/logo_tredle-hub3.png"
import { BsTelephoneFill } from "react-icons/bs";
import { BiSolidEnvelope } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="min-h-[25dvh] bg-[#F5F5F5] w-full flex items-center justify-center lg:px-10 pt-10">
      <div className="min-h-[30dvh] flex flex-col bg-[#F5F5F5] w-full">
        <div className="flex flex-[3] flex-col md:flex-row w-full gap-10 lg:gap-20">

          <section className="flex-2 lg:flex-1 flex items-center justify-center">
            <img src={tredlehubLogoV3} alt="tredle hub logo" />
          </section>

          <div className="flex-2 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-10">
            <section className="flex flex-[1.5] flex-col gap-4 lg:items-center justify-center p-5 w-full">
              <h4 className="w-full text-center md:text-left">Connect with us</h4>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center">
                  <BsTelephoneFill />
                  <p>+63 995 539 2499 | +63 995 539 2500</p>
                </div>
                <div className="flex gap-3 items-center">
                  <BiSolidEnvelope />
                  <p><a href="mailto:vip@tambuli.group">vip@tambuli.group</a></p>
                </div>
                <div className="flex gap-3 items-center">
                  <FaLocationDot />
                  <p className="w-60 md:w-72 lg:w-96">
                    <a href="https://maps.app.goo.gl/GVx1zTdHTSdR4ZqF9">Unit A Mezzanine Level - AAP Tower, 683 Aurora Blvd., New Manila, Quezon City 1112, Metro Manila, Philippines</a>
                  </p>
                </div>
              </div>
            </section>

            <section className="flex-1 flex items-center md:items-start lg:items-center justify-center w-full p-5">
              <div className="flex flex-col gap-4 items-center lg:items-center justify-center w-full">
                <h4 className="text-center md:text-left w-full text-nowrap">Quick Links</h4>
                <div className="w-full">
                  <ul className="grid grid-cols-2 md:grid-cols-1 text-center md:text-left">
                    <li><Link to={"/programs/certification-programs"}>Courses</Link></li>
                    <li><Link to={"/programs/certification-programs"}>Certifications</Link></li>
                    <li><Link to={"/events-and-webinars"}>Events</Link></li>
                    <li><Link to={"/accreditation-and-partnerships"}>Partnerships</Link></li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

        </div>
        <hr className="my-10 lg:my-5" />
        <div className="flex-1 flex justify-center items-center pb-10 lg:pb-5">
          <p>©2024 TREDLE HUB. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

