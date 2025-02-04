import React, { useEffect, useState} from "react";
import "./App.css"
import OfflinePage from "./components/OfflinePage";
import MainApp from "./components/MainApp";

const App = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
    }, []);

    return isOnline ? <MainApp /> : <OfflinePage />
}

export default App;