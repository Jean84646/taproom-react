import React from 'react';
import PropTypes from 'prop-types';

function SingleBeer(props){
  return(
    <div className="infoBg">
      <style jsx>{`
        .infoBg {
          font-size: 20px;
          background-color: rgb(255, 255, 255, 0.4);
          padding: 25px;
        }
        li {
          list-style: none;
        }
        `}</style>
      <ul>
        <li>{props.name}
          <ul>
            <li>| Brewer: {props.brewer} | Description: {props.description} | ABV: {props.abv} | ${props.price} | Remaining: {props.remaining}</li>
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
  remaining: PropTypes.string.isRequired
};

export default SingleBeer;
