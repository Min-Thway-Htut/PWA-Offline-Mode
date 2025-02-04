import React, { useEffect, useState} from "react";
import "./App.css"
import OfflinePage from "./components/OfflinePage";
import MainApp from "./components/MainApp";

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
        <MainApp />
    </div>
   )
}

export default App;