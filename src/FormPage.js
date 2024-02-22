import React, { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./FormPage.css";
import { uploadDocument } from "./api";
import { CircularProgress } from "@mui/material";

function FileUploadPage(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    setLoading(true);
    setError("");
    uploadDocument("set/context/file", formData)
      .then((response) => {
        localStorage.setItem("contextId", response.data.context_id);
        localStorage.setItem("filename", selectedFile.name);
        props.refresh();
      })
      .catch((error) => {
        console.log("Error:", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container className="center-container">
      <Paper className="form-container">
        <Typography variant="h4" align="center" gutterBottom>
          Upload Document
        </Typography>
        <input
          accept=".pdf,.doc,.docx"
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
          {loading ? (
            <CircularProgress className="progress-ind" />
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpload}
              disabled={!selectedFile}
            >
              Upload
            </Button>
          )}
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </Paper>
    </Container>
  );
}

export default FileUploadPage;
