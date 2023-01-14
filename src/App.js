import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from "./components/About";
import Login from "./components/Login";
import Authentication from "./components/Authentication";
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Authentication />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
