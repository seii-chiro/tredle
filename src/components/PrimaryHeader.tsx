// type SolidPrimaryHeaderProps = {
//     content: string
//     color: string
// }

type GradientPrimaryHeaderProps = {
    content: string
}

// export const SolidPrimaryHeader = ({ content, color }: SolidPrimaryHeaderProps) => {
//     return <h1 className={`text-[4rem] text-[${color}]`}>{content}</h1>
// }

export const GradientPrimaryHeader = ({ content }: GradientPrimaryHeaderProps) => {
    return (
        <h1 className="text-[4rem] bg-gradient-to-r from-[#265197] via-[#7b337d] to-[#c23526] bg-clip-text text-transparent">
            {content}
        </h1>
    )
}
