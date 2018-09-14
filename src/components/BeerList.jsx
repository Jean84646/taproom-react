import React from 'react';
import PropTypes from 'prop-types';
import SingleBeer from './SingleBeer';

function BeerList(props){
  return (
    <div>
      {props.beerList.map((beer) =>
        <SingleBeer name={beer.name}
          brewer={beer.brewer}
          description={beer.description}
          abv={beer.abv}
          price={beer.price}
          remaining={beer.remaining}
          id={beer.id}
          onClickSellPint={props.onClickSellPint}
          onClickSellGrowler={props.onClickSellGrowler}
          onClickSellLgGrowler={props.onClickSellLgGrowler}
          key={beer.id} />)}
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array.isRequired,
  onClickSellPint: PropTypes.func,
  onClickSellGrowler: PropTypes.func,
  onClickSellLgGrowler: PropTypes.func
};

export default BeerList;
