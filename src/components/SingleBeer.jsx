import React from 'react';
import PropTypes from 'prop-types';

function SingleBeer(props){

  let Bg = "";
  if(props.price < 5) {
    Bg = "warningOne";
  } else if(props.remaining < 10) {
    Bg = "warningTwo";
  } else if(props.abv < 5) {
    Bg = "warningThree";
  }

  return(
    <div className="infoBg">
      <style jsx>{`
        .infoBg {
          font-size: 20px;
          background-color: rgb(255, 255, 255, 0.5);
          padding: 10px;
        }
        li {
          list-style: none;
          font-weight: bold;
        }
        .listStyle {
          font-size: 16px;
          font-weight: normal;
        }
        .warningOne {
          background-color: green;
        }
        .warningTwo {
          background-color: red;
        }
        .warningThree {
          background-color: yellow;
        }
        `}</style>
      <div className={Bg}>
        <ul>
          <li>{props.name}
            <ul>
              <li className="listStyle">| Brewer: {props.brewer} | Description: {props.description} | ABV: {props.abv}% | ${props.price} | Remaining: {props.remaining} |</li>
            </ul></li>
        </ul>
      </div>
    </div>
  );
};

SingleBeer.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
};

export default SingleBeer;
