import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Components/Counter';
import Header from './Layout/Header';
import MoviePage from './Components/MovieComponents/MoviePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='text-white'>
    <React.StrictMode>
      <Header />
      <div className="p-2 m-2 row text-center">
        <Counter />
        <MoviePage />
      </div>
    </React.StrictMode>
  </div>
);
