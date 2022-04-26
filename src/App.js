
//Components

import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/TopBar/TopBar";
import Home from "./pages/home/Home";

//Styles
import "./app.css";

function App() {
    

    return (
        <div className="App">
            <TopBar />
            <div className="container">
                <Sidebar />
                <Home />
            </div>
        </div>
    );
}

export default App;
