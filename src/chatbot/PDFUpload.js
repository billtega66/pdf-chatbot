import React, { useState } from "react";
import axios from "axios";

const PDFUpload = (props) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("pdf", file);

      try {
        const response = await axios.post("http://localhost:5000/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert("File uploaded successfully: " + response.data.message);
      } catch (error) {
        alert("Error uploading file: " + error.message);
      }
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload PDF</button>
    </div>
  );
};

export default PDFUpload;
