import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Employees from './pages/Employees'
import { Provider } from 'react-redux'
import store from'./outils/reducer/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
  <React.StrictMode>
    <Router>
       <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/employees' element={<Employees/>} />
      </Routes>
    </Router>
  </React.StrictMode>
  </Provider>
);
