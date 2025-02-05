import React, { useRef, useState } from 'react';

function ImageUploader() {
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const [image, setImage] = useState(null);
  const [isConverted, setIsConverted] = useState(false); // Track conversion state

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

      // Ensure the image is fully loaded before drawing to canvas
      image.onload = () => {
        // Set canvas size
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;

        // Draw image to canvas
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        // Get pixel data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Convert to grayscale
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];     
          const g = data[i + 1]; 
          const b = data[i + 2]; 
          const gray = 0.3 * r + 0.59 * g + 0.11 * b;

          data[i] = gray;     
          data[i + 1] = gray; 
          data[i + 2] = gray; 
        }

        // Apply grayscale effect
        ctx.putImageData(imageData, 0, 0);
        setIsConverted(true);
      };

      // If the image is already loaded, trigger the onload manually
      if (image.complete) {
        image.onload();
      }
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Upload Image</h1>

      {/* Hidden file input */}
      <input
        id="file-input"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />

      {/* Image Preview (Hidden after conversion) */}
      {image && (
        <img
          ref={imgRef}
          src={image}
          alt="Preview"
          style={{ 
            marginTop: '20px', 
            maxWidth: '100%', 
            display: isConverted ? 'none' : 'block' 
          }}
        />
      )}

      {/* Canvas for Black & White Conversion */}
      {image && <canvas ref={canvasRef} style={{ marginTop: "20px", maxWidth: "100%" }}></canvas>}

      <div className="buttons" style={{ marginTop: "20px" }}>
        <button onClick={handleButtonClick}>Upload Image</button>
        <button onClick={handleReset} style={{ marginLeft: '10px' }}>Reset</button>
        <button onClick={convertToBlackAndWhite} style={{ marginLeft: '10px' }}>Black and White</button>
      </div>
    </div>
  );
}

export default ImageUploader;
