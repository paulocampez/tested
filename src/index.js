import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Details from './pages/Details/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/index'
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Header />
    <Routes>
      <Route>
        <Route path='/' element={<App />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/search' element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);


