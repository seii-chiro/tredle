import Construction from '../assets/under_construction (2).png'

const Faculty = () => {
  return (
    <div>
      <div className="flex mt-10 flex-col items-center justify-center">
        <div className='text-center flex flex-col gap-5 md:gap-10 mx-5 md:mx-10'>
          <h1 className="bg-gradient-to-r font-extrabold text-transparent bg-clip-text from-[#1E365C] via-[#2F183E] to-[#801811] text-[2rem]">
            Page In Progress...
          </h1>
          <p className='text-[1.5rem] lg:w-5xl text-[#333] leading-8'>This section is being crafted by our team to provide you with the best insights. Please check back later to see what we've been working on!</p>
        </div>
        <img src={Construction} alt="Under Construction Page" />
      </div>
    </div>
  )
}

export default Faculty