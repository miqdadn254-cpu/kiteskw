import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Use instant to avoid smooth scrolling conflict with layout shifts
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
