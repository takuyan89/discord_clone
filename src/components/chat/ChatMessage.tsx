import React from "react";
import "./ChatMessage.scss";
import Avatar from "@mui/material/Avatar";

const ChatMessage = () => {
    return (
        <div className="message">
            <Avatar />
            <div className="messageInfo">
                <h4>
                    UserName
                    <span className="messageTimestamp">2024/8/2</span>
                </h4>
                <p>メッセージ</p>
            </div>
        </div>
    );
};

export default ChatMessage;
