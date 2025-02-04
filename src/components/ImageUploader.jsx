import React, { useState } from 'react';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [fileInput, setFileInput] = useState(null);

  const handleImageChange = () => {
    if (fileInput) {
      const file = fileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <div>
          {image && <img src={image} alt="Uploaded" />}
      <input
        type="file"
        accept="image/*"
        ref={(fileInputRef) => setFileInput(fileInputRef)}
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <button onClick={() => fileInput.click()}>Upload Image</button>
    </div>
  );
};

export default ImageUploader;
