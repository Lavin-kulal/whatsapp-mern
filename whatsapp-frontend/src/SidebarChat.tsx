import React from "react";
import "./SidebarChart.css";
import { Avatar } from "@mui/material";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar className="sidebarChat__icon" />
      <div className="sidbarChat__info">
        <h2>Room name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
