type PrimaryDescriptionProps = {
    id?: string
    description: string
    color?: string
}

type SecondaryDescriptionProps = {
    id?: string
    description: string
    color?: string
}

type BaseDescriptionProps = {
    id?: string
    description: string
    color?: string
    xtraStyles?: string
}

type ThirdDescriptionProps = {
    id?: string
    title: string
    description: string
}

export const PrimaryDescription = ({ description, id, color }: PrimaryDescriptionProps) => {
    const parts = description?.split(/(\*\*[^*]+\*\*)/g)

    return (
        <div id={id} className={`text-[1.25rem] scroll-mt-36 ${color}`}>
            <p>
                {parts?.map((part, index) =>
                    part.startsWith('**') && part.endsWith('**') ? (
                        <b key={index}>{part?.slice(2, -2)}</b>
                    ) : (
                        part
                    )
                )}
            </p>
        </div>
    )
}

export const SecondaryDescription = ({ description, id, color }: SecondaryDescriptionProps) => {
    const parts = description?.split(/(\*\*[^*]+\*\*)/g)

    return (
        <div id={id} className={`text-[1.5rem] scroll-mt-36 ${color}`}>
            <p>
                {parts?.map((part, index) =>
                    part.startsWith('**') && part.endsWith('**') ? (
                        <b key={index}>{part?.slice(2, -2)}</b>
                    ) : (
                        part
                    )
                )}
            </p>
        </div>
    )
}

export const ThirdDescription = ({ title, description, id }: ThirdDescriptionProps) => {
    const parts = description?.split(/(\*\*[^*]+\*\*)/g)

    return (
        <div id={id} className={`scroll-mt-36 space-y-[2rem] flex flex-col mx-auto text-white`}>
            <h1 className="font-bold text-[2rem] leading-10">{title}</h1>
            <p className="text-[1.25rem] text-justify">
                {parts?.map((part, index) =>
                    part.startsWith('**') && part.endsWith('**') ? (
                        <b key={index}>{part?.slice(2, -2)}</b>
                    ) : (
                        part
                    )
                )}
            </p>
        </div>
    )
}

export const BaseDescription = ({ description, color, id, xtraStyles }: BaseDescriptionProps) => {
    const parts = description?.split(/(\*\*[^*]+\*\*)/g)

    return (
        <div id={id} className={`text-[1rem] scroll-mt-36 ${color} ${xtraStyles}`}>
            <p>
                {parts?.map((part, index) =>
                    part.startsWith('**') && part.endsWith('**') ? (
                        <b key={index}>{part?.slice(2, -2)}</b>
                    ) : (
                        part
                    )
                )}
            </p>
        </div>
    )
}
