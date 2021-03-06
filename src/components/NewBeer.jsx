import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewBeer(props){

  let newName = null;
  let newBrewer = null;
  let newDescription = null;
  let newAbv = null;
  let newPrice = null;

  function handleAddNewBeer(event){
    event.preventDefault();
    props.onAddNewBeer({name: newName.value, brewer: newBrewer.value, description: newDescription.value, abv: newAbv.value, price: newPrice.value, remaining: 100, id: v4()});
    newName.value = "";
    newBrewer.value = "";
    newDescription.value = "";
    newAbv.value = "";
    newPrice.value = "";
  }

  return(
    <div className="infoBg">
      <style jsx>{`
        .infoBg {
          font-size: 20px;
          background-color: rgb(255, 255, 255, 0.4);
          padding: 25px;
        }
        p {
          font-weight: bold;
          text-decoration: underline;
        }
        input {
          width: 50%;
          margin: 10px;
        }
        `}</style>
      <form onSubmit={handleAddNewBeer}>
        <p>Add New Beer</p>
        <input type="text" placeholder="Beer Name" ref={(input) => {newName = input;}} />
        <input type="text" placeholder="Brewer" ref={(input) => {newBrewer = input;}} />
        <input type="text" placeholder="Description" ref={(input) => {newDescription = input;}} />
        <input type="text" placeholder="ABV %" ref={(input) => {newAbv = input;}} />
        <input type="text" placeholder="Price" ref={(input) => {newPrice = input;}} />
        <button type='submit'>ADD</button>
      </form>
    </div>
  );
}

NewBeer.propTypes = {
  onAddNewBeer: PropTypes.func
}

export default NewBeer;
