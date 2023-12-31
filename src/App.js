import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Public from "./Routes/Public";

function App() {
  return (
    <div className="App" data-testid='app'>
      <Router>
        <Public/>
      </Router>
    </div>
  );
}

export default App;
