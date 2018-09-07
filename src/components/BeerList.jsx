import React from 'react';
import PropTypes from 'prop-types';
import SingleBeer from './SingleBeer';

function BeerList(){
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

BeerList.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired
};

export default BeerList;
