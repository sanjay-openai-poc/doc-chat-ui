import React from "react";
import "./chat-page.css";
import SendIcon from "@mui/icons-material/Send";
import {
  Paper,
  Typography,
  TextField,
  Box,
  Button,
  Container,
} from "@mui/material";

function ChatPage() {
  const chatData = [
    { id: 1, type: "prompt", value: "What is blue moon?" },
    {
      id: 2,
      type: "bot",
      value: "Blue moon is a moon that appears on blue days",
    },
    { id: 3, type: "prompt", value: "Why do cats purr?" },
    {
      id: 4,
      type: "bot",
      value:
        "Cats purr for various reasons, including communication, self-soothing, and healing.",
    },
    { id: 5, type: "prompt", value: "What do dogs dream about?" },
    {
      id: 6,
      type: "bot",
      value:
        "Dogs can dream about various things, similar to humans. It may include activities they enjoy, such as playing fetch or chasing squirrels.",
    },
    { id: 7, type: "prompt", value: "Do birds sing for fun?" },
    {
      id: 8,
      type: "bot",
      value:
        "Birds primarily sing for communication, such as marking territory, attracting mates, or warning of danger. However, some species may also sing simply for enjoyment.",
    },
    { id: 9, type: "prompt", value: "Can fish recognize their owners?" },
    {
      id: 10,
      type: "bot",
      value:
        "While it's debated whether fish can recognize their owners in the same way that mammals do, they can certainly learn to associate their owners with food and other positive experiences.",
    },
    { id: 11, type: "prompt", value: "How fast can a cheetah run?" },
    {
      id: 12,
      type: "bot",
      value:
        "Cheetahs are the fastest land animals, capable of reaching speeds up to 75 miles per hour (120 kilometers per hour) in short bursts covering distances up to 1,500 feet (460 meters).",
    },
    { id: 13, type: "prompt", value: "Are elephants afraid of mice?" },
    {
      id: 14,
      type: "bot",
      value:
        "Contrary to popular belief, elephants are not afraid of mice. In fact, elephants have poor eyesight and may not even notice a small mouse scurrying around them.",
    },
    { id: 15, type: "prompt", value: "How do octopuses change color?" },
    {
      id: 16,
      type: "bot",
      value:
        "Octopuses change color through special cells called chromatophores, which contain pigment and can expand or contract to reveal different colors and patterns. This allows them to camouflage, communicate, and express emotions.",
    },
    { id: 17, type: "prompt", value: "Do spiders sleep?" },
    {
      id: 18,
      type: "bot",
      value:
        "Spiders don't sleep in the same way that mammals do, but they do have periods of rest where they become less active. They also exhibit daily rhythms of activity and inactivity.",
    },
  ];

  return (
    <Container className="center-container container" maxWidth="lg">
      <Box className="flex">
        <Typography variant="h3" gutterBottom>
          Document Chat
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Will be answering based on the file: somefile.pdf
        </Typography>
        <Paper className="chat-interface">
          {chatData.reverse().map((message) => (
            <div key={message.id} style={{ marginBottom: 10 }}>
              {message.type === "prompt" ? (
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  You: {message.value}
                </Typography>
              ) : (
                <Typography
                  variant="body1"
                  style={{ fontStyle: "italic", textAlign: "start" }}
                >
                  Bot: {message.value}
                </Typography>
              )}
            </div>
          ))}
        </Paper>
        <Box className="flex prompt-container">
          <TextField
            id="outlined-multiline-flexible"
            label="Question"
            fullWidth
            multiline
            maxRows={4}
          />
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default ChatPage;
