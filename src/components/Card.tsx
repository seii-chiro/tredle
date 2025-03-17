type CardProps = {
    title : string
    description : string
    id?: string
}

export const Card = ({title, description, id}: CardProps) => {
  const parts = description?.split(/(\*\*[^*]+\*\*)/g)

  return (
    <div>
        <div id={id} className="space-y-[2rem]">
          <h3 className="text-[2rem] bg-gradient-to-r leading-9 from-[#32384E] via-[#332036] to-[#742822] bg-clip-text font-bold text-transparent">
            {title}
          </h3>
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
    </div>
  )
}

