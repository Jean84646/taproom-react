import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import BeerList from './BeerList';
import SingleBeer from './SingleBeer';
import NewBeer from './NewBeer';

const masterKegList = [
    {
      name: 'Ruby Zozzle',
      brewer: 'Hi-Wheel',
      description: 'Sparkling Wine & Grapefruit',
      abv: '6.8%',
      price: '7',
      remaining: '20'
    },
    {
      name: 'Tart N Juicy',
      brewer: 'Epic',
      description: 'Sour IPA',
      abv: '4.5%',
      price: '6',
      remaining: '60'
    },
    {
      name: 'Hamm\'s',
      brewer: 'Miller/Coors',
      description: 'American Lager',
      abv: '4.7%',
      price: '3',
      remaining: '65'
    },
    {
      name: 'Prismatic',
      brewer: 'Ninkasi',
      description: 'Juicy IPA',
      abv:  '5.9%',
      price: '6',
      remaining: '75'
    },
    {
      name: 'Juicy Haze',
      brewer: 'New Belgium',
      description: 'India Pale Ale',
      abv:  '7.5%',
      price: '6',
      remaining: '10'
    },
    {
      name: '8 Hop',
      brewer: 'New Belgium',
      description: 'Pale Ale',
      abv:  '5.5%',
      price: '6',
      remaining: '58'
    }
  ];

function AllBeer(){
  var allBeerStyle = {
    backgroundColor: 'rgb(255, 255, 255, 0.4)'
  }
  return (
    <div className="allBeerStyle">
      <style jsx>{`
        .allBeerStyle {
          background-color: rgb(255, 255, 255, 0.4);
          padding: 25px 50px 50px 50px;
        }
        a {
          color: black;
          font-size: 20px;
          font-weight: bold;
          padding: 5px;
        }
        a:hover {
          color: #FFF;
          background-color: rgb(0, 0, 0, 0.5);
          text-decoration: none;
        }
        `}</style>
      <Link to="/">Full Beer List</Link>
      <br/>
      <Link to="/less-than-10">Less Than 10 pints</Link>
      <br/>
      <Link to="/low-price">Less than $5</Link>
      <br/>
      <Link to="/create">Add Beer</Link>

      <div>
        {masterKegList.map((beer, index) =>
          <SingleBeer name={beer.name}
            brewer={beer.brewer}
            description={beer.description}
            abv={beer.abv}
            price={beer.price}
            remaining={beer.remaining}
            key={index} />
        )}
        <Switch>
          <Route exact path='/less-than-10' component={() => <SingleBeer
            name={masterKegList[5].name}
            brewer={masterKegList[5].brewer}
            description={masterKegList[5].description}
            abv={masterKegList[5].abv}
            price={masterKegList[5].price}
            remaining={masterKegList[5].remaining} />} />
          <Route exact path='/low-price' component={() => <SingleBeer
            name={masterKegList[2].name}
            brewer={masterKegList[2].brewer}
            description={masterKegList[2].description}
            abv={masterKegList[2].abv}
            price={masterKegList[2].price}
            remaining={masterKegList[2].remaining} />} />
          <Route exact path='/create' component={NewBeer} />
        </Switch>
      </div>
    </div>
  );
}

export default AllBeer;
