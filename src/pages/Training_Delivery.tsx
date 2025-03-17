import { GradientPrimaryHeader } from "../components/PrimaryHeader"
import Scroll from '../components/Scroll'
import AI_Powered from '../assets/Resources/Icons/ai-powered-models.png'
import hybrid_work from '../assets/Resources/Icons/hybrid-work.png'
import smartphone from '../assets/Resources/Icons/smartphone.png'
import telecommunication from '../assets/Resources/Icons/telecommuting.png'
import training from '../assets/Resources/Icons/training.png'
import colorpalette from '../assets/Resources/Icons/ColorPalette.png'

const Training_Delivery = () => {
    return (
        <div className="relative">
            <Scroll />
            <div className="flex flex-col items-center my-20 justify-center w-full">
                <GradientPrimaryHeader 
                content="Training Delivery Options"/>
                <div className="flex flex-wrap gap-5 items-center justify-center mx-20 mt-20">
                    <div className="flex items-center p-4 bg-white border-2 rounded-md w-[23rem] h-[7rem] gap-5 border-[#c1c1c1]">
                        <img src={colorpalette} className="w-14" alt="" />
                        <p className="text-[1.25rem]">On-Site Face-to-Face Training</p>
                    </div>
                    <div className="flex items-center p-4 bg-white border-2 rounded-md w-[23rem] h-[7rem] gap-5 border-[#c1c1c1]">
                        <img src={smartphone} className="w-14" alt="" />
                        <p className="text-[1.25rem]">Online (Self-paced & Instructor-led)</p>
                    </div>
                    <div className="flex items-center p-4 bg-white border-2 rounded-md w-[23rem] h-[7rem] gap-5 border-[#c1c1c1]">
                        <img src={telecommunication} className="w-14" alt="" />
                        <p className="text-[1.25rem]">Hybrid Online Training</p>
                    </div>
                    <div className="flex items-center p-4 bg-white border-2 rounded-md w-[23rem] h-[7rem] gap-5 border-[#c1c1c1]">
                        <img src={hybrid_work} className="w-14" alt="" />
                        <p className="text-[1.25rem]">Hybrid (Online + Internal TREDLE HUB Materials)</p>
                    </div>
                    <div className="flex items-center p-4 bg-white border-2 rounded-md w-[23rem] h-[7rem] gap-5 border-[#c1c1c1]">
                        <img src={training} className="w-14" alt="" />
                        <p className="text-[1.25rem]">Bootcamp (Intensive Hands-on Training)</p>
                    </div>
                    <div className="flex items-center p-4 bg-white border-2 rounded-md w-[23rem] h-[7rem] gap-5 border-[#c1c1c1]">
                        <img src={AI_Powered} className="w-14" alt="" />
                        <p className="text-[1.25rem]">On-the-Job Training (OJT) in Simulated Business Environments</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Training_Delivery