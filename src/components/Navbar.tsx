import { useState } from 'react'
import { NavLink, Link } from 'react-router'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoIosArrowDown } from 'react-icons/io'
import { SlArrowRight } from 'react-icons/sl'
import { IoClose } from 'react-icons/io5'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

export const WideNavbar = () => {
    const [isAboutHovered, setIsAboutHovered] = useState(false)
    const [isProgramsHovered, setIsProgramsHovered] = useState(false)
    const [trainingCategoriesIsHovered, setTrainingCategoriesIsHovered] = useState(false)
    const [aboutDropDownIsHovered, setAboutDropDownIsHovered] = useState(false)
    const [programsDropDownIsHovered, setProgramsDropDownIsHovered] = useState(false)

    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [activeTrainingOption, setActiveTrainingOption] = useState<string | null>(null)

    return (
        <div className="hidden h-full lg:flex items-center">
            <nav className="h-full [&_a:hover]:text-[#1E365D] [&_a:active]:text-[#1E365D]">
                <ul className="flex justify-center items-center gap-2 xl:gap-6 h-full text-center">
                    <li className="h-full">
                        <NavLink
                            onFocus={() => {
                                setIsAboutHovered(false)
                                setAboutDropDownIsHovered(false)
                            }}
                            to="/"
                            className="flex items-center"
                            onClick={() => {
                                setActiveTrainingOption(null)
                                setActiveDropdown(null)
                            }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li
                        onMouseEnter={() => setIsAboutHovered(true)}
                        onMouseLeave={() => setIsAboutHovered(false)}
                        onClick={() => {
                            setIsAboutHovered(false)
                            setAboutDropDownIsHovered(false)
                        }}
                        className="relative h-full"
                    >
                        <NavLink
                            to="about"
                            className="flex gap-1 items-center"
                            onMouseEnter={() => setIsAboutHovered(true)}
                            onFocus={() => {
                                setIsAboutHovered(true)
                                setAboutDropDownIsHovered(true)
                                setIsProgramsHovered(false)
                                setProgramsDropDownIsHovered(false)
                            }}
                            onBlur={() => setIsAboutHovered(false)}
                            onClick={() => {
                                setIsAboutHovered(false)
                                setAboutDropDownIsHovered(false)
                                setActiveTrainingOption(null)
                                setActiveDropdown(null)
                            }}
                        >
                            About <IoIosArrowDown />
                        </NavLink>
                        {(isAboutHovered || aboutDropDownIsHovered) && (
                            <div
                                className="p-4 absolute left-[-210%] w-72"
                                onMouseEnter={() => setIsAboutHovered(true)}
                                onMouseLeave={() => setIsAboutHovered(false)}
                            >
                                <div
                                    className="shadow-all-sides bg-white rounded flex w-full"
                                    onMouseEnter={() => setIsAboutHovered(true)}
                                    onMouseLeave={() => setIsAboutHovered(false)}
                                >
                                    <ul className="text-nowrap flex flex-col text-left w-full p-2">
                                        <li
                                            className={`hover:bg-gray-300 p-3 ${activeDropdown === 'About Us' && 'navy-blue-text font-bold'}`}
                                        >
                                            <Link
                                                onFocus={() => setIsAboutHovered(true)}
                                                to="/about#about-us"
                                                className="w-full h-full"
                                                onClick={() => {
                                                    setActiveTrainingOption(null)
                                                    setActiveDropdown('About Us')
                                                }}
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                        <li
                                            className={`hover:bg-gray-300 p-3  ${activeDropdown === 'Background/History' && 'navy-blue-text font-bold'}`}
                                        >
                                            <Link
                                                onFocus={() => setIsAboutHovered(true)}
                                                to="/about#background-history"
                                                onClick={() => {
                                                    setActiveTrainingOption(null)
                                                    setActiveDropdown('Background/History')
                                                }}
                                            >
                                                Background/History
                                            </Link>
                                        </li>
                                        <li className="hover:bg-gray-300 p-3">
                                            <div>
                                                <Link
                                                    className={`${activeDropdown === 'Mission' && 'navy-blue-text font-bold'}`}
                                                    onFocus={() => setIsAboutHovered(true)}
                                                    to="/about#mission"
                                                    onClick={() => {
                                                        setActiveTrainingOption(null)
                                                        setActiveDropdown('Mission')
                                                    }}
                                                >
                                                    Mission,&nbsp;
                                                </Link>
                                                <Link
                                                    className={`${activeDropdown === 'Vision' && 'navy-blue-text font-bold'}`}
                                                    onFocus={() => setIsAboutHovered(true)}
                                                    to="/about#vision"
                                                    onClick={() => {
                                                        setActiveTrainingOption(null)
                                                        setActiveDropdown('Vision')
                                                    }}
                                                >
                                                    Vision,&nbsp;
                                                </Link>
                                                <Link
                                                    className={`${activeDropdown === 'Values' && 'navy-blue-text font-bold'}`}
                                                    onFocus={() => setIsAboutHovered(true)}
                                                    to="/about#values"
                                                    onClick={() => {
                                                        setActiveTrainingOption(null)
                                                        setActiveDropdown('Values')
                                                    }}
                                                >
                                                    Values
                                                </Link>
                                            </div>
                                        </li>
                                        <li
                                            className={`hover:bg-gray-300 p-3 ${activeDropdown === 'Training Philosophy' && 'navy-blue-text font-bold'}`}
                                        >
                                            <Link
                                                onFocus={() => setIsAboutHovered(true)}
                                                to="/about#training-philosophy"
                                                onClick={() => {
                                                    setActiveTrainingOption(null)
                                                    setActiveDropdown('Training Philosophy')
                                                }}
                                            >
                                                Training Philosophy
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </li>
                    <li
                        className="relative h-full"
                        onMouseEnter={() => setIsProgramsHovered(true)}
                        onMouseLeave={() => setIsProgramsHovered(false)}
                        onClick={() => {
                            setProgramsDropDownIsHovered(false)
                            setIsProgramsHovered(false)
                        }}
                    >
                        <NavLink
                            to="programs"
                            className="flex gap-1 items-center"
                            onMouseEnter={() => setIsProgramsHovered(true)}
                            onMouseLeave={() => setIsProgramsHovered(false)}
                            onFocus={() => {
                                setIsProgramsHovered(true)
                                setProgramsDropDownIsHovered(true)
                                setAboutDropDownIsHovered(false)
                                setIsAboutHovered(false)
                            }}
                            onBlur={() => setIsProgramsHovered(false)}
                            onClick={() => {
                                setIsAboutHovered(false)
                                setAboutDropDownIsHovered(false)
                                setProgramsDropDownIsHovered(false)
                                setIsProgramsHovered(false)
                                setActiveTrainingOption(null)
                            }}
                        >
                            Programs <IoIosArrowDown />
                        </NavLink>
                        {(isProgramsHovered || programsDropDownIsHovered) && (
                            <div
                                className={`p-4 absolute ${trainingCategoriesIsHovered ? 'left-[-400%]' : 'left-[-340%]'}`}
                                onMouseEnter={() => setIsProgramsHovered(true)}
                                onMouseLeave={() => setIsProgramsHovered(false)}
                            >
                                <div
                                    className="shadow-all-sides bg-white p-4 rounded"
                                    onMouseEnter={() => setIsProgramsHovered(true)}
                                    onMouseLeave={() => setIsProgramsHovered(false)}
                                >
                                    <ul
                                        className={`text-nowrap text-left flex flex-col ${trainingCategoriesIsHovered ? 'flex-row' : 'flex-col'}`}
                                    >
                                        <div>
                                            <li
                                                className={`hover:bg-gray-300 p-2 ${activeDropdown === 'Faculty and Certified Training Instructors' && 'navy-blue-text font-bold'}`}
                                            >
                                                <Link
                                                    onFocus={() =>
                                                        setTrainingCategoriesIsHovered(false)
                                                    }
                                                    to="/programs/faculty-and-certified-training-instructor"
                                                    onClick={() => {
                                                        setActiveDropdown(
                                                            'Faculty and Certified Training Instructors'
                                                        )
                                                        setActiveTrainingOption(null)
                                                    }}
                                                >
                                                    Faculty and Certified Training Instructors
                                                </Link>
                                            </li>
                                            <li
                                                onMouseEnter={() =>
                                                    setTrainingCategoriesIsHovered(true)
                                                }
                                                onMouseLeave={() =>
                                                    setTrainingCategoriesIsHovered(false)
                                                }
                                                className="hover:bg-gray-300 p-2"
                                            >
                                                <Link
                                                    className={`flex items-center justify-between ${trainingCategoriesIsHovered && 'navy-blue-text'} ${activeTrainingOption && 'font-bold navy-blue-text'}`}
                                                    to="/programs/training-categories"
                                                    onMouseEnter={() => {
                                                        setTrainingCategoriesIsHovered(true)
                                                    }}
                                                    onFocus={() =>
                                                        setTrainingCategoriesIsHovered(true)
                                                    }
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Tab' && !e.shiftKey) {
                                                            e.preventDefault()
                                                            // Focus the first link in the dropdown
                                                            // Why? IDK 🙂
                                                            const firstLink =
                                                                document.querySelector(
                                                                    'a[href="/programs/training-categories#it-and-software-development"]'
                                                                ) as HTMLAnchorElement
                                                            if (firstLink) {
                                                                firstLink.focus()
                                                            }
                                                        }
                                                    }}
                                                >
                                                    Training Categories
                                                    <SlArrowRight />
                                                </Link>
                                            </li>
                                            <li
                                                className={`hover:bg-gray-300 p-2 ${activeDropdown === 'Certification Programs' && 'navy-blue-text font-bold'}`}
                                            >
                                                <Link
                                                    onFocus={() =>
                                                        setTrainingCategoriesIsHovered(false)
                                                    }
                                                    to="/programs/certification-programs"
                                                    id="certification-programs"
                                                    onClick={() => {
                                                        setActiveTrainingOption(null)
                                                        setActiveDropdown('Certification Programs')
                                                    }}
                                                >
                                                    Certification Programs
                                                </Link>
                                            </li>
                                            <li
                                                className={`hover:bg-gray-300 p-2 ${activeDropdown === 'Training Delivery Options' && 'navy-blue-text font-bold'}`}
                                            >
                                                <Link
                                                    onFocus={() =>
                                                        setTrainingCategoriesIsHovered(false)
                                                    }
                                                    to="/programs/training-delivery-options"
                                                    id="training-delivery-options"
                                                    onClick={() => {
                                                        setActiveTrainingOption(null)
                                                        setActiveDropdown('Training Delivery Options')
                                                    }}
                                                >
                                                    Training Delivery Options
                                                </Link>
                                            </li>
                                            <li
                                                className={`hover:bg-gray-300 p-2 ${activeDropdown === 'Enrollment & Registration' && 'navy-blue-text font-bold'}`}
                                            >
                                                <Link
                                                    onFocus={() =>
                                                        setTrainingCategoriesIsHovered(false)
                                                    }
                                                    to="/programs/enrollment-and-registration"
                                                    onClick={() => {
                                                        setActiveTrainingOption(null)
                                                        setActiveDropdown(
                                                            'Enrollment & Registration'
                                                        )
                                                    }}
                                                >
                                                    Enrollment & Registration
                                                </Link>
                                            </li>
                                            <li
                                                className={`hover:bg-gray-300 p-2 ${activeDropdown === 'Authorized Testing Center (ATC) Services' && 'navy-blue-text font-bold'}`}
                                            >
                                                <Link
                                                    onFocus={() =>
                                                        setTrainingCategoriesIsHovered(false)
                                                    }
                                                    to="/programs/atc-services"
                                                    onClick={() => {
                                                        setActiveTrainingOption(null)
                                                        setActiveDropdown(
                                                            'Authorized Testing Center (ATC) Services'
                                                        )
                                                    }}
                                                >
                                                    Authorized Testing Center (ATC) Services
                                                </Link>
                                            </li>
                                            <li
                                                className={`hover:bg-gray-300 p-2 ${activeDropdown === 'Corporate Training and Government Services' && 'navy-blue-text font-bold'}`}
                                            >
                                                <Link
                                                    onFocus={() =>
                                                        setTrainingCategoriesIsHovered(false)
                                                    }
                                                    to="/programs/corporate-training-and-government-services"
                                                    onClick={() => {
                                                        setActiveTrainingOption(null)
                                                        setActiveDropdown(
                                                            'Corporate Training and Government Services'
                                                        )
                                                    }}
                                                >
                                                    Corporate Training and Government Services
                                                </Link>
                                            </li>
                                            <li
                                                className={`hover:bg-gray-300 p-2 ${activeDropdown === 'Learning Resources & Knowledge Hub' && 'navy-blue-text font-bold'}`}
                                            >
                                                <Link
                                                    onFocus={() =>
                                                        setTrainingCategoriesIsHovered(false)
                                                    }
                                                    to="/programs/learning-resources-and-knowledge-hub"
                                                    onClick={() => {
                                                        setActiveTrainingOption(null)
                                                        setActiveDropdown(
                                                            'Learning Resources & Knowledge Hub'
                                                        )
                                                    }}
                                                >
                                                    Learning Resources & Knowledge Hub
                                                </Link>
                                            </li>
                                        </div>
                                        {trainingCategoriesIsHovered && (
                                            <div
                                                className="pl-2 flex gap-6"
                                                onMouseEnter={() =>
                                                    setTrainingCategoriesIsHovered(true)
                                                }
                                                onMouseLeave={() =>
                                                    setTrainingCategoriesIsHovered(false)
                                                }
                                            >
                                                <div>
                                                    <ul>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                tabIndex={
                                                                    trainingCategoriesIsHovered
                                                                        ? 0
                                                                        : -1
                                                                }
                                                                to="/programs/training-categories#it-and-software-development"
                                                                className={`flex items-center gap-3 ${activeTrainingOption === 'IT & Software Development' && 'font-bold navy-blue-text'}`}
                                                                onClick={() => {
                                                                    setActiveTrainingOption(
                                                                        'IT & Software Development'
                                                                    )
                                                                    setActiveDropdown(null)
                                                                }}
                                                            >
                                                                IT & Software Development
                                                            </Link>
                                                        </li>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                tabIndex={
                                                                    trainingCategoriesIsHovered
                                                                        ? 0
                                                                        : -1
                                                                }
                                                                to="/programs/training-categories#ai-and-ml"
                                                                className={`flex items-center gap-3 ${activeTrainingOption === 'Artificial Intelligence & Machine Learning' && 'font-bold navy-blue-text'}`}
                                                                onClick={() => {
                                                                    setActiveTrainingOption(
                                                                        'Artificial Intelligence & Machine Learning'
                                                                    )
                                                                    setActiveDropdown(null)
                                                                }}
                                                            >
                                                                Artificial Intelligence & Machine
                                                                Learning
                                                            </Link>
                                                        </li>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                tabIndex={
                                                                    trainingCategoriesIsHovered
                                                                        ? 0
                                                                        : -1
                                                                }
                                                                to="/programs/training-categories#data-science-and-analytics"
                                                                className={`flex items-center gap-3 ${activeTrainingOption === 'Data Science & Analytics' && 'font-bold navy-blue-text'}`}
                                                                onClick={() => {
                                                                    setActiveTrainingOption(
                                                                        'Data Science & Analytics'
                                                                    )
                                                                    setActiveDropdown(null)
                                                                }}
                                                            >
                                                                Data Science & Analytics
                                                            </Link>
                                                        </li>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                tabIndex={
                                                                    trainingCategoriesIsHovered
                                                                        ? 0
                                                                        : -1
                                                                }
                                                                to="/programs/training-categories#erp-and-business-solution"
                                                                className={`flex items-center gap-3 ${activeTrainingOption === 'ERP & Business Solutions' && 'font-bold navy-blue-text'}`}
                                                                onClick={() => {
                                                                    setActiveTrainingOption(
                                                                        'ERP & Business Solutions'
                                                                    )
                                                                    setActiveDropdown(null)
                                                                }}
                                                            >
                                                                ERP & Business Solutions
                                                            </Link>
                                                        </li>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                tabIndex={
                                                                    trainingCategoriesIsHovered
                                                                        ? 0
                                                                        : -1
                                                                }
                                                                to="/programs/training-categories#digital-forensics-and-investigation"
                                                                className={`flex items-center gap-3 ${activeTrainingOption === 'Digital Forensics & Investigation' && 'font-bold navy-blue-text'}`}
                                                                onClick={() => {
                                                                    setActiveTrainingOption(
                                                                        'Digital Forensics & Investigation'
                                                                    )
                                                                    setActiveDropdown(null)
                                                                }}
                                                            >
                                                                Digital Forensics & Investigation
                                                            </Link>
                                                        </li>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                tabIndex={
                                                                    trainingCategoriesIsHovered
                                                                        ? 0
                                                                        : -1
                                                                }
                                                                to="/programs/training-categories#cybersecurity-and-ethical-hacking"
                                                                className={`flex items-center gap-3 ${activeTrainingOption === 'Cybersecurity & Ethical Hacking' && 'font-bold navy-blue-text'}`}
                                                                onClick={() => {
                                                                    setActiveTrainingOption(
                                                                        'Cybersecurity & Ethical Hacking'
                                                                    )
                                                                    setActiveDropdown(null)
                                                                }}
                                                            >
                                                                Cybersecurity & Ethical Hacking
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <ul>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                tabIndex={
                                                                    trainingCategoriesIsHovered
                                                                        ? 0
                                                                        : -1
                                                                }
                                                                to="/programs/training-categories#cloud-computing-and-devops"
                                                                className={`flex items-center gap-3 ${activeTrainingOption === 'Cloud Computing & DevOps' && 'font-bold navy-blue-text'}`}
                                                                onClick={() => {
                                                                    setActiveTrainingOption(
                                                                        'Cloud Computing & DevOps'
                                                                    )
                                                                    setActiveDropdown(null)
                                                                }}
                                                            >
                                                                Cloud Computing & DevOps
                                                            </Link>
                                                        </li>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                tabIndex={
                                                                    trainingCategoriesIsHovered
                                                                        ? 0
                                                                        : -1
                                                                }
                                                                to="/programs/training-categories#project-management-and-agile-frameworks"
                                                                className={`flex items-center gap-3 ${activeTrainingOption === 'Project Management & Agile Frameworks' && 'font-bold navy-blue-text'}`}
                                                                onClick={() => {
                                                                    setActiveTrainingOption(
                                                                        'Project Management & Agile Frameworks'
                                                                    )
                                                                    setActiveDropdown(null)
                                                                }}
                                                            >
                                                                Project Management & Agile
                                                                Frameworks
                                                            </Link>
                                                        </li>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                tabIndex={
                                                                    trainingCategoriesIsHovered
                                                                        ? 0
                                                                        : -1
                                                                }
                                                                to="/programs/training-categories#digital-marketing"
                                                                className={`flex items-center gap-3 ${activeTrainingOption === 'Digital Marketing' && 'font-bold navy-blue-text'}`}
                                                                onClick={() => {
                                                                    setActiveTrainingOption(
                                                                        'Digital Marketing'
                                                                    )
                                                                    setActiveDropdown(null)
                                                                }}
                                                            >
                                                                Digital Marketing
                                                            </Link>
                                                        </li>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                tabIndex={
                                                                    trainingCategoriesIsHovered
                                                                        ? 0
                                                                        : -1
                                                                }
                                                                to="/programs/training-categories#space-technologies"
                                                                className={`flex items-center gap-3 ${activeTrainingOption === 'Space Technologies' && 'font-bold navy-blue-text'}`}
                                                                onClick={() => {
                                                                    setActiveTrainingOption(
                                                                        'Space Technologies'
                                                                    )
                                                                    setActiveDropdown(null)
                                                                }}
                                                            >
                                                                Space Technologies
                                                            </Link>
                                                        </li>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                tabIndex={
                                                                    trainingCategoriesIsHovered
                                                                        ? 0
                                                                        : -1
                                                                }
                                                                to="/programs/training-categories#uxs"
                                                                className={`flex items-center gap-3 ${activeTrainingOption === 'Unmanned Systems (UxS)' && 'font-bold navy-blue-text'}`}
                                                                onClick={() => {
                                                                    setActiveTrainingOption(
                                                                        'Unmanned Systems (UxS)'
                                                                    )
                                                                    setActiveDropdown(null)
                                                                }}
                                                            >
                                                                Unmanned Systems (UxS)
                                                            </Link>
                                                        </li>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                tabIndex={
                                                                    trainingCategoriesIsHovered
                                                                        ? 0
                                                                        : -1
                                                                }
                                                                to="/programs/training-categories#intelligence-gathering-systems"
                                                                className={`flex items-center gap-3 ${activeTrainingOption === 'Intelligence Gathering Systems' && 'font-bold navy-blue-text'}`}
                                                                onClick={() => {
                                                                    setActiveTrainingOption(
                                                                        'Intelligence Gathering Systems'
                                                                    )
                                                                    setActiveDropdown(null)
                                                                }}
                                                                onKeyDown={(e) => {
                                                                    if (
                                                                        e.key === 'Tab' &&
                                                                        !e.shiftKey
                                                                    ) {
                                                                        e.preventDefault()
                                                                        setTrainingCategoriesIsHovered(
                                                                            false
                                                                        )
                                                                        const nextFocusableElement =
                                                                            document.querySelector(
                                                                                '#certification-programs'
                                                                            )
                                                                        if (nextFocusableElement) {
                                                                            ; (
                                                                                nextFocusableElement as HTMLElement
                                                                            ).focus()
                                                                        }
                                                                    }
                                                                }}
                                                            >
                                                                Intelligence Gathering Systems
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </li>
                    <li
                        className="h-full"
                        onClick={() => {
                            setActiveDropdown(null)
                            setActiveTrainingOption(null)
                        }}
                    >
                        <NavLink
                            onFocus={() => {
                                setIsProgramsHovered(false)
                                setProgramsDropDownIsHovered(false)
                            }}
                            to="accreditation-and-partnerships"
                            className="flex items-center"
                            onClick={() => {
                                setActiveDropdown(null)
                                setActiveTrainingOption(null)
                            }}
                        >
                            Accreditation & Partnerships
                        </NavLink>
                    </li>
                    <li
                        className="h-full"
                        onClick={() => {
                            setActiveDropdown(null)
                            setActiveTrainingOption(null)
                        }}
                    >
                        <NavLink
                            className="flex items-center"
                            to="testimonials"
                            onClick={() => {
                                setActiveDropdown(null)
                                setActiveTrainingOption(null)
                            }}
                        >
                            Testimonials
                        </NavLink>
                    </li>
                    <li
                        className="h-full"
                        onClick={() => {
                            setActiveDropdown(null)
                            setActiveTrainingOption(null)
                        }}
                    >
                        <NavLink
                            className="flex items-center"
                            to="events-and-webinars"
                            onClick={() => {
                                setActiveDropdown(null)
                                setActiveTrainingOption(null)
                            }}
                        >
                            Events & Webinars
                        </NavLink>
                    </li>
                    <li
                        className="h-full"
                        onClick={() => {
                            setActiveDropdown(null)
                            setActiveTrainingOption(null)
                        }}
                    >
                        <NavLink
                            className="flex items-center"
                            to="contact-us"
                            onClick={() => {
                                setActiveDropdown(null)
                                setActiveTrainingOption(null)
                            }}
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export const MobileNavbar = () => {
    const [activeTab, setActiveTab] = useState('home')
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [activeTrainingCategoryOption, setActiveTrainingCategoryOption] = useState<string | null>(
        null
    )
    const [mobileNavOpen, setMobileNavOpen] = useState(false)
    const [aboutSubMenuOpen, setAboutSubMenuOpen] = useState(false)
    const [programsSubMenuOpen, setProgramsSubMenuOpen] = useState(false)
    const [trainingCategoriesSubMenuOpen, setTrainingCategoriesSubMenuOpen] = useState(false)

    return (
        <div className="lg:hidden">
            <button
                onClick={() => setMobileNavOpen((prev) => !prev)}
                className="flex justify-center"
            >
                {mobileNavOpen ? <IoClose /> : <RxHamburgerMenu />}
            </button>
            {mobileNavOpen && (
                <nav className="bg-white shadow-sm absolute w-full flex flex-col gap-2 right-0 top-16 max-h-[80vh] overflow-y-auto">
                    <ul className="flex flex-col gap-2">
                        <li
                            className={`${activeTab === 'home' && 'bg-gray-200'}`}
                            onClick={() => setActiveTab('home')}
                        >
                            <NavLink
                                to="/"
                                onClick={() => {
                                    setMobileNavOpen((prev) => !prev)
                                    setActiveTrainingCategoryOption(null)
                                    setActiveDropdown(null)
                                    setActiveTab('home')
                                }}
                                className="block h-full w-full py-2 pl-4"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li
                            className={`${activeTab === 'about' && 'bg-gray-200'}`}
                            onClick={() => setActiveTab('about')}
                        >
                            <div className="flex items-center gap-1 h-full w-full">
                                <NavLink
                                    to="about"
                                    onClick={() => {
                                        setMobileNavOpen((prev) => !prev)
                                        setActiveTrainingCategoryOption(null)
                                        setActiveDropdown(null)
                                        setActiveTab('about')
                                    }}
                                    className="block h-full w-full py-2 pl-4"
                                >
                                    About
                                </NavLink>
                                <div
                                    className="h-full w-full flex justify-end"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        setAboutSubMenuOpen((prev) => !prev)
                                    }}
                                >
                                    {aboutSubMenuOpen ? (
                                        <MdKeyboardArrowUp size={20} className="mr-4" />
                                    ) : (
                                        <MdKeyboardArrowDown size={20} className="mr-4" />
                                    )}
                                </div>
                            </div>
                            {aboutSubMenuOpen && (
                                <div className="h-full w-full">
                                    <ul className="flex flex-col w-full">
                                        <li className="h-full">
                                            <Link
                                                className={`block h-full w-full py-2 pl-10 ${activeDropdown === 'About Us' && 'navy-blue-text font-bold'}`}
                                                to={'about#about-us'}
                                                onClick={() => {
                                                    setMobileNavOpen((prev) => !prev)
                                                    setActiveTab('about')
                                                    setActiveDropdown('About Us')
                                                    setActiveTrainingCategoryOption(null)
                                                }}
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className={`block h-full w-full py-2 pl-10 ${activeDropdown === 'Background / History' && 'navy-blue-text font-bold'}`}
                                                to={'/about#background-history'}
                                                onClick={() => {
                                                    setMobileNavOpen((prev) => !prev)
                                                    setActiveTab('about')
                                                    setActiveDropdown('Background / History')
                                                    setActiveTrainingCategoryOption(null)
                                                }}
                                            >
                                                Background / History
                                            </Link>
                                        </li>
                                        <li>
                                            <div className="inline-flex">
                                                <Link
                                                    to="/about#mission"
                                                    className={`block h-full py-2 pl-10 ${activeDropdown === 'Mission' && 'navy-blue-text font-bold'}`}
                                                    onClick={() => {
                                                        setMobileNavOpen((prev) => !prev)
                                                        setActiveTab('about')
                                                        setActiveDropdown('Mission')
                                                        setActiveTrainingCategoryOption(null)
                                                    }}
                                                >
                                                    Mission,&nbsp;
                                                </Link>
                                                <Link
                                                    to="/about#vision"
                                                    className={`block h-full py-2 ${activeDropdown === 'Vision' && 'navy-blue-text font-bold'}`}
                                                    onClick={() => {
                                                        setMobileNavOpen((prev) => !prev)
                                                        setActiveTab('about')
                                                        setActiveDropdown('Vision')
                                                        setActiveTrainingCategoryOption(null)
                                                    }}
                                                >
                                                    Vision,&nbsp;
                                                </Link>
                                                <Link
                                                    to="/about#values"
                                                    className={`block h-full w-full py-2 ${activeDropdown === 'Values' && 'navy-blue-text font-bold'}`}
                                                    onClick={() => {
                                                        setMobileNavOpen((prev) => !prev)
                                                        setActiveTab('about')
                                                        setActiveDropdown('Values')
                                                        setActiveTrainingCategoryOption(null)
                                                    }}
                                                >
                                                    Values
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <Link
                                                className={`block h-full w-full py-2 pl-10 ${activeDropdown === 'Training Philosophy' && 'navy-blue-text font-bold'}`}
                                                to={'/about#training-philosophy'}
                                                onClick={() => {
                                                    setMobileNavOpen((prev) => !prev)
                                                    setActiveTab('about')
                                                    setActiveDropdown('Training Philosophy')
                                                    setActiveTrainingCategoryOption(null)
                                                }}
                                            >
                                                Training Philosophy
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li
                            className={`${activeTab === 'programs' && 'bg-gray-200'}`}
                            onClick={() => setActiveTab('programs')}
                        >
                            <div className="flex items-center gap-1 h-full w-full">
                                <NavLink
                                    to="programs"
                                    onClick={() => {
                                        setMobileNavOpen((prev) => !prev)
                                        setActiveTab('programs')
                                        setActiveDropdown(null)
                                        setActiveTrainingCategoryOption(null)
                                    }}
                                    className="block h-full w-full py-2 pl-4"
                                >
                                    Programs
                                </NavLink>
                                <div
                                    className="h-full w-full flex justify-end"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        setProgramsSubMenuOpen((prev) => !prev)
                                    }}
                                >
                                    {programsSubMenuOpen ? (
                                        <MdKeyboardArrowUp size={20} className="mr-4" />
                                    ) : (
                                        <MdKeyboardArrowDown size={20} className="mr-4" />
                                    )}
                                </div>
                            </div>
                            {programsSubMenuOpen && (
                                <div className="h-full w-full">
                                    <ul className="flex flex-col w-full">
                                        <li className="h-full">
                                            <Link
                                                className={`block h-full w-full py-2 pl-10 ${activeDropdown === 'Faculty and Certified Instructors' && 'navy-blue-text font-bold'}`}
                                                to={
                                                    '/programs/faculty-and-certified-training-instructor'
                                                }
                                                onClick={() => {
                                                    setActiveTab('programs')
                                                    setActiveDropdown(
                                                        'Faculty and Certified Instructors'
                                                    )
                                                    setMobileNavOpen((prev) => !prev)
                                                    setActiveTrainingCategoryOption(null)
                                                }}
                                            >
                                                Faculty and Certified Instructors
                                            </Link>
                                        </li>
                                        <li>
                                            <div className="flex items-center gap-1 h-full w-full">
                                                <Link
                                                    className={`block h-full w-full py-2 pl-10 ${activeDropdown === 'Training Categories' && 'navy-blue-text font-bold'}`}
                                                    to={'/programs/training-categories'}
                                                    onClick={() => {
                                                        setActiveTab('programs')
                                                        setActiveDropdown('Training Categories')
                                                        setMobileNavOpen((prev) => !prev)
                                                        setActiveTrainingCategoryOption(null)
                                                    }}
                                                >
                                                    Training Categories
                                                </Link>
                                                <div
                                                    className="h-full w-full flex justify-end"
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        e.stopPropagation()
                                                        setTrainingCategoriesSubMenuOpen(
                                                            (prev) => !prev
                                                        )
                                                    }}
                                                >
                                                    {trainingCategoriesSubMenuOpen ? (
                                                        <MdKeyboardArrowUp
                                                            size={20}
                                                            className="mr-4"
                                                        />
                                                    ) : (
                                                        <MdKeyboardArrowDown
                                                            size={20}
                                                            className="mr-4"
                                                        />
                                                    )}
                                                </div>
                                            </div>

                                            {trainingCategoriesSubMenuOpen && (
                                                <div className="pl-14 flex flex-col">
                                                    <ul>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                to="/programs/training-categories#it-and-software-development"
                                                                className={`${activeTrainingCategoryOption === 'IT & Software Development' && 'navy-blue-text font-bold'}`}
                                                                onClick={() => {
                                                                    setMobileNavOpen(
                                                                        (prev) => !prev
                                                                    )
                                                                    setActiveTab('programs')
                                                                    setActiveDropdown(
                                                                        'Training Categories'
                                                                    )
                                                                    setActiveTrainingCategoryOption(
                                                                        'IT & Software Development'
                                                                    )
                                                                }}
                                                            >
                                                                IT & Software Development
                                                            </Link>
                                                        </li>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                to="/programs/training-categories#ai-and-ml"
                                                                className={`${activeTrainingCategoryOption === 'Artificial Intelligence & Machine Learning' && 'navy-blue-text font-bold'}`}
                                                                onClick={() => {
                                                                    setMobileNavOpen(
                                                                        (prev) => !prev
                                                                    )
                                                                    setActiveTab('programs')
                                                                    setActiveDropdown(
                                                                        'Training Categories'
                                                                    )
                                                                    setActiveTrainingCategoryOption(
                                                                        'Artificial Intelligence & Machine Learning'
                                                                    )
                                                                }}
                                                            >
                                                                Artificial Intelligence & Machine
                                                                Learning
                                                            </Link>
                                                        </li>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                to="/programs/training-categories#data-science-and-analytics"
                                                                className={`${activeTrainingCategoryOption === 'Data Science & Analytics' && 'navy-blue-text font-bold'}`}
                                                                onClick={() => {
                                                                    setMobileNavOpen(
                                                                        (prev) => !prev
                                                                    )
                                                                    setActiveTab('programs')
                                                                    setActiveDropdown(
                                                                        'Training Categories'
                                                                    )
                                                                    setActiveTrainingCategoryOption(
                                                                        'Data Science & Analytics'
                                                                    )
                                                                }}
                                                            >
                                                                Data Science & Analytics
                                                            </Link>
                                                        </li>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                to="/programs/training-categories#erp-and-business-solution"
                                                                className={`${activeTrainingCategoryOption === 'ERP & Business Solutions' && 'navy-blue-text font-bold'}`}
                                                                onClick={() => {
                                                                    setMobileNavOpen(
                                                                        (prev) => !prev
                                                                    )
                                                                    setActiveTab('programs')
                                                                    setActiveDropdown(
                                                                        'Training Categories'
                                                                    )
                                                                    setActiveTrainingCategoryOption(
                                                                        'ERP & Business Solutions'
                                                                    )
                                                                }}
                                                            >
                                                                ERP & Business Solutions
                                                            </Link>
                                                        </li>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                to="/programs/training-categories#digital-forensics-and-investigation"
                                                                className={`${activeTrainingCategoryOption === 'Digital Forensics & Investigation' && 'navy-blue-text font-bold'}`}
                                                                onClick={() => {
                                                                    setMobileNavOpen(
                                                                        (prev) => !prev
                                                                    )
                                                                    setActiveTab('programs')
                                                                    setActiveDropdown(
                                                                        'Training Categories'
                                                                    )
                                                                    setActiveTrainingCategoryOption(
                                                                        'Digital Forensics & Investigation'
                                                                    )
                                                                }}
                                                            >
                                                                Digital Forensics & Investigation
                                                            </Link>
                                                        </li>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                to="/programs/training-categories#cybersecurity-and-ethical-hacking"
                                                                className={`${activeTrainingCategoryOption === 'Cybersecurity & Ethical Hacking' && 'navy-blue-text font-bold'}`}
                                                                onClick={() => {
                                                                    setMobileNavOpen(
                                                                        (prev) => !prev
                                                                    )
                                                                    setActiveTab('programs')
                                                                    setActiveDropdown(
                                                                        'Training Categories'
                                                                    )
                                                                    setActiveTrainingCategoryOption(
                                                                        'Cybersecurity & Ethical Hacking'
                                                                    )
                                                                }}
                                                            >
                                                                Cybersecurity & Ethical Hacking
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                to="/programs/training-categories#cloud-computing-and-devops"
                                                                className={`${activeTrainingCategoryOption === 'Cloud Computing & DevOps' && 'navy-blue-text font-bold'}`}
                                                                onClick={() => {
                                                                    setMobileNavOpen(
                                                                        (prev) => !prev
                                                                    )
                                                                    setActiveTab('programs')
                                                                    setActiveDropdown(
                                                                        'Training Categories'
                                                                    )
                                                                    setActiveTrainingCategoryOption(
                                                                        'Cloud Computing & DevOps'
                                                                    )
                                                                }}
                                                            >
                                                                Cloud Computing & DevOps
                                                            </Link>
                                                        </li>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                to="/programs/training-categories#project-management-and-agile-frameworks"
                                                                className={`${activeTrainingCategoryOption === 'Project Management & Agile Frameworks' && 'navy-blue-text font-bold'}`}
                                                                onClick={() => {
                                                                    setMobileNavOpen(
                                                                        (prev) => !prev
                                                                    )
                                                                    setActiveTab('programs')
                                                                    setActiveDropdown(
                                                                        'Training Categories'
                                                                    )
                                                                    setActiveTrainingCategoryOption(
                                                                        'Project Management & Agile Frameworks'
                                                                    )
                                                                }}
                                                            >
                                                                Project Management & Agile
                                                                Frameworks
                                                            </Link>
                                                        </li>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                to="/programs/training-categories#digital-marketing"
                                                                className={`${activeTrainingCategoryOption === 'Digital Marketing' && 'navy-blue-text font-bold'}`}
                                                                onClick={() => {
                                                                    setMobileNavOpen(
                                                                        (prev) => !prev
                                                                    )
                                                                    setActiveTab('programs')
                                                                    setActiveDropdown(
                                                                        'Training Categories'
                                                                    )
                                                                    setActiveTrainingCategoryOption(
                                                                        'Digital Marketing'
                                                                    )
                                                                }}
                                                            >
                                                                Digital Marketing
                                                            </Link>
                                                        </li>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                to="/programs/training-categories#space-technologies"
                                                                className={`${activeTrainingCategoryOption === 'Space Technologies' && 'navy-blue-text font-bold'}`}
                                                                onClick={() => {
                                                                    setMobileNavOpen(
                                                                        (prev) => !prev
                                                                    )
                                                                    setActiveTab('programs')
                                                                    setActiveDropdown(
                                                                        'Training Categories'
                                                                    )
                                                                    setActiveTrainingCategoryOption(
                                                                        'Space Technologies'
                                                                    )
                                                                }}
                                                            >
                                                                Space Technologies
                                                            </Link>
                                                        </li>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                to="/programs/training-categories#uxs"
                                                                className={`${activeTrainingCategoryOption === 'Unmanned Systems (UxS)' && 'navy-blue-text font-bold'}`}
                                                                onClick={() => {
                                                                    setMobileNavOpen(
                                                                        (prev) => !prev
                                                                    )
                                                                    setActiveTab('programs')
                                                                    setActiveDropdown(
                                                                        'Training Categories'
                                                                    )
                                                                    setActiveTrainingCategoryOption(
                                                                        'Unmanned Systems (UxS)'
                                                                    )
                                                                }}
                                                            >
                                                                Unmanned Systems (UxS)
                                                            </Link>
                                                        </li>
                                                        <li className="hover:bg-gray-300 p-2">
                                                            <Link
                                                                to="/programs/training-categories#intelligence-gathering-systems"
                                                                className={`${activeTrainingCategoryOption === 'Intelligence Gathering Systems' && 'navy-blue-text font-bold'}`}
                                                                onClick={() => {
                                                                    setMobileNavOpen(
                                                                        (prev) => !prev
                                                                    )
                                                                    setActiveTab('programs')
                                                                    setActiveDropdown(
                                                                        'Training Categories'
                                                                    )
                                                                    setActiveTrainingCategoryOption(
                                                                        'Intelligence Gathering Systems'
                                                                    )
                                                                }}
                                                            >
                                                                Intelligence Gathering Systems
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </li>
                                        <li>
                                            <Link
                                                className={`block h-full w-full py-2 pl-10 ${activeDropdown === 'Certification Programs' && 'navy-blue-text font-bold'}`}
                                                to={'/programs/certification-programs'}
                                                onClick={() => {
                                                    setActiveTab('programs')
                                                    setActiveDropdown('Certification Programs')
                                                    setMobileNavOpen((prev) => !prev)
                                                    setActiveTrainingCategoryOption(null)
                                                }}
                                            >
                                                Certification Programs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className={`block h-full w-full py-2 pl-10 ${activeDropdown === 'Training Delivery Options' && 'navy-blue-text font-bold'}`}
                                                to={'/programs/training-delivery-options'}
                                                onClick={() => {
                                                    setActiveTab('programs')
                                                    setActiveDropdown('Training Delivery Options')
                                                    setMobileNavOpen((prev) => !prev)
                                                    setActiveTrainingCategoryOption(null)
                                                }}
                                            >
                                                Training Delivery Options
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className={`block h-full w-full py-2 pl-10 ${activeDropdown === 'Enrollment & Registration' && 'navy-blue-text font-bold'}`}
                                                to={'/programs/enrollment-and-registration'}
                                                onClick={() => {
                                                    setActiveTab('programs')
                                                    setActiveDropdown('Enrollment & Registration')
                                                    setMobileNavOpen((prev) => !prev)
                                                    setActiveTrainingCategoryOption(null)
                                                }}
                                            >
                                                Enrollment & Registration
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className={`block h-full w-full py-2 pl-10 ${activeDropdown === 'Authorized Testing Center (ATC) Services' && 'navy-blue-text font-bold'}`}
                                                to={'/programs/atc-services'}
                                                onClick={() => {
                                                    setActiveTab('programs')
                                                    setActiveDropdown(
                                                        'Authorized Testing Center (ATC) Services'
                                                    )
                                                    setMobileNavOpen((prev) => !prev)
                                                    setActiveTrainingCategoryOption(null)
                                                }}
                                            >
                                                Authorized Testing Center (ATC) Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className={`block h-full w-full py-2 pl-10 ${activeDropdown === 'Corporate Training & Government Partnerships' && 'navy-blue-text font-bold'}`}
                                                to={
                                                    '/programs/corporate-training-and-government-services'
                                                }
                                                onClick={() => {
                                                    setActiveTab('programs')
                                                    setActiveDropdown(
                                                        'Corporate Training & Government Partnerships'
                                                    )
                                                    setMobileNavOpen((prev) => !prev)
                                                    setActiveTrainingCategoryOption(null)
                                                }}
                                            >
                                                Corporate Training & Government Partnerships
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className={`block h-full w-full py-2 pl-10 ${activeDropdown === 'Learning Resources & Knowledge Hub' && 'navy-blue-text font-bold'}`}
                                                to={
                                                    '/programs/learning-resources-and-knowledge-hub'
                                                }
                                                onClick={() => {
                                                    setActiveTab('programs')
                                                    setActiveDropdown(
                                                        'Learning Resources & Knowledge Hub'
                                                    )
                                                    setMobileNavOpen((prev) => !prev)
                                                    setActiveTrainingCategoryOption(null)
                                                }}
                                            >
                                                Learning Resources & Knowledge Hub
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li
                            className={`${activeTab === 'accreditation-and-partnerships' && 'bg-gray-200'}`}
                            onClick={() => setActiveTab('accreditation-and-partnerships')}
                        >
                            <NavLink
                                to="accreditation-and-partnerships"
                                onClick={() => {
                                    setMobileNavOpen((prev) => !prev)
                                    setActiveDropdown(null)
                                    setActiveTrainingCategoryOption(null)
                                }}
                                className="block h-full w-full py-2 pl-4"
                            >
                                Accreditation & Partnerships
                            </NavLink>
                        </li>
                        <li
                            className={`${activeTab === 'testimonials' && 'bg-gray-200'}`}
                            onClick={() => setActiveTab('testimonials')}
                        >
                            <NavLink
                                to="testimonials"
                                onClick={() => {
                                    setMobileNavOpen((prev) => !prev)
                                    setActiveDropdown(null)
                                    setActiveTrainingCategoryOption(null)
                                }}
                                className="block h-full w-full py-2 pl-4"
                            >
                                Testimonials
                            </NavLink>
                        </li>
                        <li
                            className={`${activeTab === 'events-and-webinars' && 'bg-gray-200'}`}
                            onClick={() => setActiveTab('events-and-webinars')}
                        >
                            <NavLink
                                to="events-and-webinars"
                                onClick={() => {
                                    setMobileNavOpen((prev) => !prev)
                                    setActiveDropdown(null)
                                    setActiveTrainingCategoryOption(null)
                                }}
                                className="block h-full w-full py-2 pl-4"
                            >
                                Events & Webinars
                            </NavLink>
                        </li>
                        <li
                            className={`${activeTab === 'contact' && 'bg-gray-200'}`}
                            onClick={() => setActiveTab('contact')}
                        >
                            <NavLink
                                to="contact-us"
                                onClick={() => {
                                    setMobileNavOpen((prev) => !prev)
                                    setActiveDropdown(null)
                                    setActiveTrainingCategoryOption(null)
                                }}
                                className="block h-full w-full py-2 pl-4"
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    )
}
