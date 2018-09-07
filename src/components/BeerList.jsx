import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import BeerList from './BeerList';
import SingleBeer from './SingleBeer';

function App(){
  return (
    <div>
      {masterKegList.map((beer, index) =>
        <SingleBeer name={beer.name}
          brewer={beer.brewer}
          description={beer.description}
          abv={beer.abv}
          price={beer.price}
          remaining={beer.remaining}
          key={index} />
      )};
    </div>
  );
}

export default App;
