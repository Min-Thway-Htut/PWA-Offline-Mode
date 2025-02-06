import React, { useRef, useState, useEffect } from 'react';

const ImageUploader = () => {
    const canvasRef = useRef(null);
    const imgRef = useRef(null);
    const [image, setImage] = useState(null);
    const [isConverted, setIsConverted] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            setIsConverted(false);
        }
    };

    const handleButtonClick = () => {
        document.getElementById("file-input").click();
    };

    const handleReset = () => {
        setImage(null);
        setIsConverted(false);
    };

    const convertToBlackAndWhite = () => {
        if (imgRef.current && canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            const image = imgRef.current;

            image.onload = () => {
                canvas.width = image.naturalWidth;
                canvas.height = image.naturalHeight;
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;

                for (let i = 0; i < data.length; i += 4) {
                    const gray = 0.3 * data[i] + 0.59 * data[i + 1] + 0.11 * data[i + 2];
                    data[i] = data[i + 1] = data[i + 2] = gray;
                }

                ctx.putImageData(imageData, 0, 0);
                setIsConverted(true);
            };

            if (image.complete) {
                image.onload();
            }
        }
    };

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

    return (
        <main>
            <h1>Upload Image</h1>
            <div className="container">
                <input id="file-input" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
                <div className="image-container">
                    {image && <img ref={imgRef} src={image} alt="Preview" className="image-before slider-image" />}
                    {image && <canvas ref={canvasRef} className="image-after slider-image"></canvas>}
                </div>
                <input type="range" min="0" max="100" defaultValue="100" className="slider" aria-label="Percentage of before photo shown" />
                <div className="slider-line"></div>
                <div className="slider-button" aria-hidden="true">
                    <img src="/arrows-out-line-horizontal.svg" alt="" />
                </div>
            </div>
            <div className="buttons" style={{ marginTop: "20px" }}>
                <button onClick={handleButtonClick}>Upload Image</button>
                <button onClick={handleReset} style={{ marginLeft: '10px' }}>Reset</button>
                <button onClick={convertToBlackAndWhite} style={{ marginLeft: '10px' }}>Black and White</button>
            </div>
        </main>
    );
};

export default ImageUploader;
