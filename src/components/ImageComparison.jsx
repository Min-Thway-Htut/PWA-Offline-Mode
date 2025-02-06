import React, { useEffect } from "react";

const ImageComparison = () => {

    useEffect(() => {
        const container = document.querySelector('.container');
        const slider = document.querySelector('.slider');
        
        const handleSliderInput = (e) => {
            container.style.setProperty('--position', `${e.target.value}%`);
        };

        slider.addEventListener('input', handleSliderInput);

        return () => {
            slider.removeEventListener('input', handleSliderInput);
        };
    }, []);
    return(
            <main>
                <div className="container">
                    <div className="image-container">
                        <img src="/download.jpg" alt="before result" className="image-before slider-image"/>
                        <img src="/download_bw.jpg" alt="after result" className="image-after slider-image"/>
                    </div>
                    <input type="range" min="0" max="100"
                    value="50" className="slider" aria-label="Percentage of before photo shown"/>
                <div className="slider-line"></div>
                <div className="slider-button" aria-hidden="true">
                    <img src="/arrows-out-line-horizontal.svg" alt="" />
                </div>
                </div>
            </main>
    )
}

export default ImageComparison;