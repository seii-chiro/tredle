import tredle_logo_small from "../assets/logo_tredle-hub 2.svg"

const Loader = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-gradient bg-opacity-50 rounded-full ripple-outer"></div>
                <div className="absolute inset-0 bg-gradient bg-opacity-70 rounded-full ripple-inner"></div>
                <div className="relative flex justify-center items-center w-full h-full rounded-full overflow-hidden bg-white z-10">
                    <img
                        className="w-25 h-25 rounded-full object-cover ripple-image"
                        src={tredle_logo_small}
                        alt="Tredle Logo"
                    />
                </div>
            </div>
        </div>
    );
};

export default Loader;