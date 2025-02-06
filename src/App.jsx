import React, { useEffect, useState} from "react";
import "./App.css"
import OfflinePage from "./components/OfflinePage";
import MainApp from "./components/MainApp";
import ImageUploader from "./components/ImageUploader";


const App = () => {

   useEffect(() => {
    if("serviceWorker" in navigator) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
            for( let registration of registrations) {
                registration.update();
            }
        });
    }
   }, []);
    
   return (
    <div>
        <ImageUploader />
    </div>
   )
}

export default App;