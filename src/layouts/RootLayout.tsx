import { Outlet } from 'react-router'
import { MobileNavbar, WideNavbar } from '../components/Navbar'
import Footer from '../components/Footer'

const RootLayout = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-full relative">
                <header className="flex items-center w-full justify-between sticky top-0 h-16 lg:h-20 px-4 lg:10 xl:px-20 shadow-sm bg-[#ffffff2a] backdrop-blur-3xl">
                    <div>
                        <h1>TREDLE HUB</h1>
                    </div>
                    <WideNavbar />
                    <MobileNavbar />
                </header>

                <div>RootLayout</div>
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default RootLayout
