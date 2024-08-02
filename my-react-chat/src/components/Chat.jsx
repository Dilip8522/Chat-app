import React, { useContext } from 'react';
import Vid from '../img/video-solid.svg';
import Add from '../img/person-add.svg';
import More from '../img/More.svg';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName || "Select a user"}</span>
        <div className="chatIcons">
          <img src={Vid} alt="Video Call" />
          <img src={Add} alt="Add User" />
          <img src={More} alt="More Options" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
