import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './NavBar';
import HomePage from './HomePage';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <NavBar />
          <Routes>
          <Route path='/' element={<HomePage/>}/>
          </Routes>
        </div>
     
    </BrowserRouter>
  );
}

export default App;
