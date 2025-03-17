import { BaseDescription } from "./Description"

export const HistoryCardL = ({ image, description, alt }: { image: string, description: string, alt: string }) => {
    return (
        <div className={`flex items-center justify-center`}>
            <div className={`flex w-[90%] gap-20 flex-col lg:flex-row`}>
                <div className={`flex-1 flex items-center gap-8`}>
                    <div className="bg-gradient-to-b from-[#32384E] via-[#332036] to-[#742822] h-[100%] w-40 hidden lg:block"></div>
                    <BaseDescription description={description} xtraStyles="leading-8 text-justify lg:text-left" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <img src={image} alt={alt} className="w-[90%]" />
                </div>
            </div>
        </div>)
}

export const HistoryCardR = ({ image, description, alt }: { image: string, description: string, alt: string }) => {
    return (
        <div className={`flex items-center justify-center`}>
            <div className={`flex w-[90%] gap-10 lg:gap-20 flex-col lg:flex-row-reverse`}>
                <div className={`flex-1 flex items-center lg:gap-8 flex-row-reverse`}>
                    <div className="bg-gradient-to-b from-[#32384E] via-[#332036] to-[#742822] h-[100%] w-30 hidden lg:block"></div>
                    <BaseDescription description={description} xtraStyles="leading-8 text-justify lg:text-left" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <img src={image} alt={alt} className="w-[90%]" />
                </div>
            </div>
        </div>)
}

