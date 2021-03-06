import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <style jsx>{`
        h1 {
          font-family: monospace;
          font-size: 5em;
          color: #FFF;
        }
        a {
          font-size: 16px;
        }
        `}</style>
        <div>
          <h1>Welcome to the Tap Room!</h1>
        </div>
        <div>
          <Link to="/">Home</Link> | <Link to="/newbeer">Add New Beer</Link>
        </div>
    </div>
  );
}

export default Header;
