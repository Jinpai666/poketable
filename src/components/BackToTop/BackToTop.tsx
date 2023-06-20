import React, { useState, useEffect } from 'react';
import "./backToTop.scss"
const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="back-to-top">
            {   isVisible &&
                <div onClick={scrollToTop} className="back-to-top__button"/>
            }

        </div>

    );
};

export default BackToTop;