import React, {StrictMode} from 'react';
import ReactDOM from"react-dom/client";
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

if("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/public/service-worker.js").then(() => {
    console.log("Service Worker registered successfully");
  }).catch((error) => {
    console.log("Service Worker registration faild:", error);
  })
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
