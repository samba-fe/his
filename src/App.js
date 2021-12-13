import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
       {/*
       <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
      </header>
      */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/Dashboard" element={<Dashboard/>} />
          <Route exact path="/Details" element={<Details/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
