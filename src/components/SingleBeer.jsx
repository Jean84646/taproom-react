import React from 'react';
import PropTypes from 'prop-types';

function SingleBeer(props){
  return(
    <div className="infoBg">
      <style jsx>{`
        .infoBg {
          font-family: monospace;
          color: #FFF;
          font-size: 20px;
          background-color: rgb(255, 255, 255, 0.6);
          padding: 25px;
        }
        li {
          list-style: none;
        }
        `}</style>
      <ul>
        <li>{props.name}</li>
        <li>{props.brewer}</li>
        <li>{props.description}</li>
        <li>{props.abv}</li>
        <li>{props.price}</li>
        <li>{props.remaining}</li>
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
