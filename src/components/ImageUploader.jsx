import React, { useState } from 'react';

function ImageUploader() {
  const [image, setImage] = useState(null);

  // Handle image upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Create a URL for the image
    }
  };

  // Trigger the hidden file input when the "Upload Image" button is clicked
  const handleButtonClick = () => {
    document.getElementById("file-input").click();
  };

  // Handle image reset
  const handleReset = () => {
    setImage(null); // Reset the image to null
  };

  return (
    <div>
      <h1>Upload Image</h1>
      
      {/* Upload Image Button */}
      

      {/* Hidden file input */}
      <input 
        id="file-input"
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
        style={{ display: 'none' }} 
      />
      
      {/* Image Preview */}
      {image && <img src={image} alt="Preview" style={{ marginTop: '20px', maxWidth: '100%' }} />}
      <div className="buttons">

      </div>
      <div className="buttons">
      <button onClick={handleButtonClick}>Upload Image</button>  
      <button onClick={handleReset} style={{ marginLeft: '10px' }}>Reset</button> 
      </div> 
      </div>
  );
}

export default ImageUploader;
