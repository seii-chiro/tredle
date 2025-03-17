import { Outlet } from 'react-router'
import { MobileNavbar, WideNavbar } from '../components/Navbar'
import Footer from '../components/Footer'
import tredle_logo from "../assets/logo_tredle-hub 1.svg"
import tredle_logo_small from "../assets/logo_tredle-hub 2.svg"
import { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import { useLocation } from 'react-router'

const RootLayout = () => {
    const [showLoader, setShowLoader] = useState(true)
    const location = useLocation();


    //there's a dedication page transition component thingy that react router provide 
    //but i cant get the id hover to work when i use it so...
    useEffect(() => {
        setShowLoader(true);

        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <div className="w-full h-full flex justify-center items-center">
            {
                showLoader ? <Loader /> : (
                    <div className="w-full h-full relative">
                        <header className="flex items-center w-full justify-between sticky top-0 h-16 lg:h-20 px-4 lg:10 xl:px-20 shadow-sm bg-[#ffffff2a] backdrop-blur-3xl z-[1000]">
                            <div>
                                <img src={tredle_logo} className='w-50 hidden lg:block' />
                                <img src={tredle_logo_small} className='pl-[20%] w-16 lg:hidden' />
                            </div>
                            <WideNavbar />
                            <MobileNavbar />
                        </header>
                        <main>
                            <Outlet />
                        </main>
                        <Footer />
                    </div>
                )
            }
        </div>
    )
}

export default RootLayout
