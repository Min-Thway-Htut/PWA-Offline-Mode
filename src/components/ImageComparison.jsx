import React from "react";

const ImageComparison = () => {
    return(
            <main>
                <div className="container">
                    <div className="image-container">
                        <img src="/download.jpg" alt="before result"/>
                        <img src="/download_bw.jpg" alt="after result" />
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