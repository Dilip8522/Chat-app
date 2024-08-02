import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const isOwner = message.senderId === currentUser.uid;

  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [message]);

  console.log('Rendering message:', message);

  return (
    <div className={`message ${isOwner ? 'owner' : ''}`} ref={ref}>
      <div className="messageInfo">
        <img src={isOwner ? currentUser.photoURL : data.user.photoURL} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
}

export default Message;
