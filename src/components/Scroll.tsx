import { useEffect } from "react";
import { useLocation } from "react-router";

const Scroll = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const scrollToElement = () => {
                const element = document.getElementById(location.hash.replace("#", ""));
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            };

            // Wait for the DOM to fully render
            setTimeout(scrollToElement, 100);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    return null;
};

export default Scroll;
