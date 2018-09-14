import React from 'react';
import PropTypes from 'prop-types';

function SingleBeer(props){

  let bgOne = "";
  let bgTwo = "";
  let bgThree = "";
  if(props.abv < 5) {
    bgOne = "warningOne";
  }
  if(props.price <= 5) {
    bgTwo = "warningTwo";
  }
  if(props.remaining < 10) {
    bgThree = "warningThree";
  }

  function handleClickSellPint(){
    props.onClickSellPint(props.id);
  }
  function handleClickSellGrowler(){
    props.onClickSellGrowler(props.id);
  }
  function handleClickSellLgGrowler(){
    props.onClickSellLgGrowler(props.id);
  }

  return(
    <div className="infoBg">
      <style jsx>{`
        .infoBg {
          font-size: 16px;
          background-color: rgb(255, 255, 255, 0.5);
          padding: 10px;
        }
        ul li {
          list-style: none;
        }
        h4 {
          margin-left: 30px;
          font-weight: bold;
        }
        .warningOne {
          background-color: yellow;
        }
        .warningTwo {
          background-color: green;
        }
        .warningThree {
          background-color: red;
        }
        `}</style>
      <div>
        <h4>{props.name}</h4>
          <ul>
            <li>| Brewer: {props.brewer} | Description: {props.description} |</li>
            <li className={bgOne}>| ABV: {props.abv}% |</li>
            <li className={bgTwo}>| Price: ${props.price} |</li>
            <li className={bgThree}>| Remaining: {props.remaining} |</li>
            <li>Sell: <button onClick={handleClickSellPint} className="btn">Pint</button>
                      <button onClick={handleClickSellGrowler} className="btn">Growler</button>
                      <button onClick={handleClickSellLgGrowler} className="btn">Large Growler</button>
            </li>
          </ul>
      </div>
    </div>
  );
};

SingleBeer.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickSellPint: PropTypes.func,
  onClickSellGrowler: PropTypes.func,
  onClickSellLgGrowler: PropTypes.func,
};

export default SingleBeer;
