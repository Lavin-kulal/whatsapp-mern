import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Pusher from "pusher-js";
import axios from "./axios";
import Chat from "./Chat";

function App() {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("1a4f69e0c268a397ecf8", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage: any) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
