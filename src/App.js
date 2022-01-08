import React from 'react';
import './App.css';
import Calculator from './Components/Component-pages/Calculator';
import Todo from './Components/Component-pages/To-do-App.jsx';
import Home from './Components/Component-pages/Home.jsx';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <nav className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/todo'>Todo</Link>
        <Link to='/calculator'>Calculator</Link>
      </nav>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/todo' element = {<Todo />} />
        <Route path='/calculator' element = {<Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;
