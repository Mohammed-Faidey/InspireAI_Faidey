import React from 'react';
import axios from 'axios';

const sendAudioForm = (selectedFile) => {
  // Local state to store the currently selected file
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a FormData object to hold the file data
    const formData = new FormData();
    formData.append('audio', selectedFile);

    try {
      // Send a POST request to the server
      const response = await axios({
        method: 'post',
        url: '/api/speechToTextJs', // Replace with your server endpoint
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // Handle the response (e.g., show a success message)
      console.log('Audio uploaded successfully:', response.data);
    } catch (error) {
      // Handle any errors (e.g., display an error message)
      console.error('Error uploading video:', error);
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileSelect} />
      <input type="submit" value="Upload Video" />
    </form>
  );
};

export default sendAudioForm;
