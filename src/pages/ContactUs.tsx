import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const ContactUs = () => {
    const [activeTrainingOption, setActiveTrainingOption] = useState<string | null>(null)
    return (
        <div>
            <h2>Active Option: {activeTrainingOption}</h2>

            <TrainingOption
                id="it-and-software-development"
                label="IT and Software Development"
                setActiveTrainingOption={setActiveTrainingOption}
            />
            <TrainingOption
                id="design-and-arts"
                label="Design and Arts"
                setActiveTrainingOption={setActiveTrainingOption}
            />
            <TrainingOption
                id="marketing-and-sales"
                label="Marketing and Sales"
                setActiveTrainingOption={setActiveTrainingOption}
            />
        </div>
    )
}

export default ContactUs

const TrainingOption = ({
    id,
    label,
    setActiveTrainingOption,
}: {
    id: string
    label: string
    setActiveTrainingOption: (value: string | null) => void
}) => {
    const { ref, inView } = useInView({
        threshold: 0.5, // 50% of the element should be visible
        triggerOnce: false, // Keep observing continuously
    })

    if (inView) {
        setActiveTrainingOption(id)
        window.history.replaceState(null, '', `#${id}`)
    }

    return (
        <div id={id} ref={ref} style={{ height: '100vh', border: '2px solid black' }}>
            {label}
        </div>
    )
}
