import { useState, useEffect } from 'react';

const useResponsive = () => {
    const [screenWidth, setScreenWidth] = useState(0); // default to 0 or another fallback value
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Check if we're on the client side
        setIsClient(true);

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        if (isClient) {
            // Initialize the width on client side
            handleResize();

            // Attach the resize event listener
            window.addEventListener('resize', handleResize);

            // Cleanup the event listener on component unmount
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [isClient]); // Run effect once when on client side

    return isClient ? screenWidth : 0; // Return 0 or fallback value if on server
};

export default useResponsive;
