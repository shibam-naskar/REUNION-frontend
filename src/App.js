import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' Component={HomePage}/>
      </Routes>
    </Router>
  );
}

export default App;
