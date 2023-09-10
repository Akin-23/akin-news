import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/UserProvider";
import { TopicProvider } from './components/TopicProvider.jsx';






ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <TopicProvider>
          <App />
        </TopicProvider>
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>
);
