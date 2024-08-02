import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx';
import { ChatContextProvider } from './context/ChatContext';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
);