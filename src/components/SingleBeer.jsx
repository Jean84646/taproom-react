import React from 'react';
import PropTypes from 'prop-types';

function SingleBeer(props){
  return(
    <div className="infoBg">
      <style jsx>{`
        .infoBg {
          font-size: 20px;
          background-color: rgb(255, 255, 255, 0.3);
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

        `}</style>
      <ul>
        <li>{props.name}
          <ul>
            <li className="listStyle">| Brewer: {props.brewer} | Description: {props.description} | ABV: {props.abv} | ${props.price} | Remaining: {props.remaining}</li>
          </ul></li>
      </ul>
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
  id: PropTypes.string.isRequired
};

export default SingleBeer;
