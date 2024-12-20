import Image from "next/image";
import { useState, useRef } from "react";

const CompareSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);

    const handleMove = (event) => {
        if (!isDragging) return;

        const sliderRect = sliderRef.current.getBoundingClientRect();
        const x = event.clientX - sliderRect.left;
        let percent = (x / sliderRect.width) * 100;

        // Ensure slider doesn't go beyond bounds
        percent = Math.max(0, Math.min(percent, 100));

        setSliderPosition(percent);
    };

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div className="w-100 position-relative" onMouseUp={handleMouseUp}>
            <div
                ref={sliderRef}
                className="position-relative w-100 max-w-700 aspect-70/45 m-auto overflow-hidden"
                onMouseMove={handleMove}
                onMouseDown={handleMouseDown}
            >
                <Image
                    className="img-fluid"
                    priority
                    alt="Before"
                    src="/Veneers/after-1.jpg"
                    width={600}
                    height={300}
                    style={{ pointerEvents: 'none' }}
                />
                <div
                    className="position-absolute top-0 start-0 end-0 w-100 max-w-700 aspect-70/45 m-auto overflow-hidden select-none"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`, inset: "0", pointerEvents: 'none' }}
                >
                    <div >
                        <Image
                            priority
                            alt="After"
                            src="/Veneers/before-1.jpg"
                            width={600}
                            height={300}
                            style={{ pointerEvents: 'none' }}
                        />
                    </div>
                </div>
                <div
                    className="position-absolute top-0 h-100 bottom-0 bg-white"
                    style={{
                        left: `calc(${sliderPosition}% - 1px)`,
                        cursor: "ew-resize",
                        width: "4px",
                        top: "0",
                        pointerEvents: 'none'
                    }}
                >
                    <div className="bg-white position-absolute rounded-circle h-3 w-3 start-0 top-50 translate-middle-y" style={{ height: '12px', width: '12px', top: '50%', left: '0', transform: 'translateY(-50%)' }} />
                </div>
            </div>
        </div>
    );
};

export default CompareSlider;
