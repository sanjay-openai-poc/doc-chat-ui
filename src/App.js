import { useEffect, useState } from "react";
import "./App.css";
import FormUploadPage from "./FormPage.js";
import ChatPage from "./ChatPage/ChatPage.js";

function App() {
  const [context, setContext] = useState(null);

  useEffect(() => {
    console.log("Starting App");
    queryContextIdFromLocalStorage();
  });

  const queryContextIdFromLocalStorage = () => {
    const contextId = localStorage.getItem("contextId");
    if (contextId) {
      setContext(contextId);
    }
  };

  const getContainer = () => {
    if (context) {
      return <ChatPage />;
    } else {
      return <FormUploadPage refresh={queryContextIdFromLocalStorage} />;
    }
  };

  return <div className="App">{getContainer()}</div>;
}

export default App;
