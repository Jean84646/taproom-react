import React from 'react';
import bg from './../img/bg1.jpg';
import Header from './Header';
import AllBeer from './AllBeer';

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
        <AllBeer/>
      </div>
    </div>

  );
}

export default App;
