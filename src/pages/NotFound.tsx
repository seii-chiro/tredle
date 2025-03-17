import weed from "../assets/weed.png";

const NotFound = () => {
    return (
        <div className="h-[98vh] flex flex-col justify-between">
            <div className="flex flex-col items-center justify-center text-center h-90% w-[60%] pt-[20%] mx-auto gap-10 leading-10">
                <h1 className="bg-gradient-to-r from-[#32384E] via-[#332036] to-[#742822] bg-clip-text text-transparent text-5xl font-bold">Oopsie, it seems like the page you're trying to access does not exist.</h1>
                <h2>Perhaps this is a typo?</h2>
                <h3 className="text-xl bg-gradient-to-r from-[#32384E] via-[#332036] to-[#742822] bg-clip-text text-transparent font-semibold">404 | Page Not Found</h3>
            </div>
            <div className="tumbleweed w-14 h-14">
                <img src={weed} alt="tumbleweed" className="w-full h-full object-contain" />
            </div>
        </div>
    );
};

export default NotFound;
