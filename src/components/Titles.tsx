export const TitleGradient = ({ title, xtraStyle }: { title: string, xtraStyle?: string }) => {
    return (
        <h2 className={`text-[2rem] font-bold bg-gradient-to-r from-[#32384E] via-[#332036] to-[#742822] bg-clip-text text-transparent ${xtraStyle}`}>
            {title}
        </h2>
    )
}

export const BorderedTitleGradient = ({ title }: { title: string }) => {
    return (
        <div className="flex gap-5 items-center">
            <div className="bg-gradient-to-b from-[#32384E] via-[#332036] to-[#742822] w-2 h-10"></div>
            <TitleGradient title={title} />
        </div>
    )
}
