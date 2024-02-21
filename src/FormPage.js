import React, { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./FormPage.css";
import { uploadDocument } from "./api";

function FileUploadPage(props) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    console.log("Uploading file:", selectedFile);
    const formData = new FormData();
    formData.append("file", selectedFile);
    uploadDocument("set/context/file", formData)
      .then((response) => {
        console.log("We got the response:", response);
        localStorage.setItem("contextId", response.data.context_id);
        props.refresh();
      })
      .catch((error) => {
        // TODO: Handle error
        console.log("Error:", error);
      });
  };

  return (
    <Container className="center-container">
      <Paper className="form-container">
        <Typography variant="h4" align="center" gutterBottom>
          File Upload
        </Typography>
        <input
          accept=".pdf,.doc,.docx,.xls,.xlsx"
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <label htmlFor="file-upload">
          <Button variant="contained" color="primary" component="span">
            Choose File
          </Button>
        </label>
        {selectedFile && (
          <Typography variant="body1" style={{ marginTop: 10 }}>
            Selected File: {selectedFile.name}
          </Typography>
        )}
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
            disabled={!selectedFile}
          >
            Upload
          </Button>
        </div>
      </Paper>
    </Container>
  );
}

export default FileUploadPage;
