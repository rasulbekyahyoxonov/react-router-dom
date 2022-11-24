import './App.css';
import { Route, Routes, Link } from "react-router-dom"
import Home from "./page/Home"
import About from './page/About'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
      </Routes>

      <footer>
        <p>hello</p>
      </footer>

    </>
  );
}

export default App;
