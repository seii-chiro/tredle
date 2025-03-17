type SolidPrimaryHeaderProps = {
    content: string
    color: string
}

type GradientPrimaryHeaderProps = {
    content: string
}

export const SolidPrimaryHeader = ({ content, color }: SolidPrimaryHeaderProps) => {
    return <h1 className={`text-[2.75rem] font-bold ${color}`}>{content}</h1>
}

export const GradientPrimaryHeader = ({ content }: GradientPrimaryHeaderProps) => {
    return (
        <h1 className="text-[1.5rem] md:text-[2.75rem] font-bold bg-gradient-to-r from-[#32384E] via-[#332036] to-[#742822] bg-clip-text text-transparent">
            {content}
        </h1>
    )
}
