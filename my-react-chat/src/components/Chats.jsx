import React, { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      console.log("Fetching chats for user:", currentUser.uid);
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        if (doc.exists()) {
          const chatData = doc.data();
          console.log("Chat data:", chatData);
          setChats(Object.entries(chatData));
        } else {
          console.log("No chats found for user:", currentUser.uid);
          setChats([]);
        }
      });

      return () => {
        unsub();
      };
    };

    if (currentUser?.uid) {
      getChats();
    }
  }, [currentUser]);

  const handleSelect = (u) => {
    console.log("Selected user:", u);
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="chats">
      {chats.length > 0 ? (
        chats
          .sort((a, b) => b[1].date - a[1].date)
          .map((chat) => (
            <div
              className="userChat"
              key={chat[0]}
              onClick={() => handleSelect(chat[1].userInfo)}
            >
              <img
                src={
                  chat[1].userInfo.photoURL ||
                  "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                alt=""
              />
              <div className="userChatInfo">
                <span>{chat[1].userInfo.displayName}</span>
                <p>{chat[1].lastMessage?.text || ""}</p>
              </div>
            </div>
          ))
      ) : (
        <p>No chats available</p>
      )}
    </div>
  );
};

export default Chats;
