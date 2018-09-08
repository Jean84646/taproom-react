import React from 'react';
import bg from './../img/bg1.jpg';
import Header from './Header';
import BeerInfo from './BeerInfo';
import { Switch, Route, Link } from 'react-router-dom';

function App(){
  return (
    <div>
      <style jsx>{`
        body {
          font-family: monospace;
          background-image: url(${bg});
          background-size: cover;
          background-repeat: no-repeat;
        }
        `}</style>
      <div className="container">
        <Header/>
        <BeerInfo/>
      </div>
    </div>

  );
}

export default App;
