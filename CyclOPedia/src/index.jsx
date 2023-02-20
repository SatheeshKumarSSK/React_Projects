import React from 'react';
import ReactDOM from 'react-dom/client';
import CyclOPediaClassPage from './Components/CyclOPediaClassPage';
import CyclOPediaFuncPage from './Components/CyclOPediaFuncPage';
import Header from './Layout/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className='text-white'>
    <Header />
    <div className="row">
      <div className="col-6">
        <span className="h1 text-warning text-center">Class Component</span>
        <CyclOPediaClassPage />
      </div>
      <div className="col-6">
        <span className="h1 text-warning text-center">Functional Component</span>
        <CyclOPediaFuncPage />
      </div>
    </div>
  </div>
);
