import React from 'react';

function NewBeer(){
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
      <form>
        <p>Add New Beer</p>
        <input type="text" placeholder="Beer Name"/>
        <input type="text" placeholder="Beer Price"/>
        <input type="text" placeholder="Beer ABV"/>
        <button>ADD</button>
      </form>
    </div>
  );
}
export default NewBeer;
