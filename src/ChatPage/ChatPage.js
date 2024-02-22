import React, { useState } from "react";
import "./chat-page.css";
import SendIcon from "@mui/icons-material/Send";
import {
  Typography,
  TextField,
  Box,
  Button,
  Container,
  CircularProgress,
} from "@mui/material";
import ChatInterface from "./ChatInterface";
import { submitPrompt } from "../api";

function ChatPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [chats, setChat] = useState([]);

  const sendPrompt = () => {
    const validatedPrompt = prompt.trim();
    if (validatedPrompt) {
      const payload = {
        context_id: localStorage.getItem("contextId"),
        query: validatedPrompt,
      };
      setLoading(true);
      submitPrompt(payload)
        .then((response) => {
          buildChat(chats, response.data);
        })
        .catch((e) => console.log("Error :", e))
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <Container className="center-container container" maxWidth="lg">
      <Box className="flex">
        <Typography variant="h3" gutterBottom>
          Document Chat
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Will be answering based on the file: 
          {localStorage.getItem("filename")}
        </Typography>
        <ChatInterface chatData={chats} />
        <Box className="flex prompt-container">
          <TextField
            id="outlined-multiline-flexible"
            label="Question"
            fullWidth
            multiline
            maxRows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          {loading ? (
            <CircularProgress className="progress-ind" />
          ) : (
            <Button
              onClick={sendPrompt}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Submit
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
}

export default ChatPage;

function buildChat(chats, data) {
  chats.push({
    id: chats.length,
    type: "prompt",
    value: data.input,
  });
  chats.push({
    id: chats.length,
    type: "bot",
    value: data.answer,
  });
}
