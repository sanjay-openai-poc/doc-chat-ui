import React from "react";
import { Paper, Typography } from "@mui/material";

function ChatInterface(props) {
  const getChat = (message) => {
    if (message.type === "prompt")
      return (
        <Typography variant="body1" style={{ fontWeight: "bold" }}>
          You: {message.value}
        </Typography>
      );
    else {
      return (
        <Typography
          variant="body1"
          style={{ fontStyle: "italic", textAlign: "start" }}
        >
          Bot: {message.value}
        </Typography>
      );
    }
  };

  const reversedChat = [...props.chatData].reverse();

  if (reversedChat.length) {
    return (
      <Paper className="chat-interface messages-list">
        {reversedChat.map((message) => (
          <div key={message.id} style={{ marginBottom: 10 }}>
            {getChat(message)}
          </div>
        ))}
      </Paper>
    );
  } else {
    return (
      <Paper className="chat-interface">
        <Typography variant="h5" gutterBottom>
          Start by asking a question based on the document!
        </Typography>
      </Paper>
    );
  }
}

export default ChatInterface;
