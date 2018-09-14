import React from 'react';
import bg from './../img/bg1.jpg';
import Header from './Header';
import BeerList from './BeerList';
import NewBeer from './NewBeer';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        {
          name: 'Ruby Zozzle',
          brewer: 'Hi-Wheel',
          description: 'Sparkling Wine & Grapefruit',
          abv: '6.8',
          price: '7',
          remaining: '20',
          id: '0'
        },
        {
          name: 'Tart N Juicy',
          brewer: 'Epic',
          description: 'Sour IPA',
          abv: '4.5',
          price: '6',
          remaining: '60',
          id: '1'
        },
        {
          name: 'Hamm\'s',
          brewer: 'Miller/Coors',
          description: 'American Lager',
          abv: '4.7',
          price: '3',
          remaining: '65',
          id: '2'
        },
        {
          name: 'Prismatic',
          brewer: 'Ninkasi',
          description: 'Juicy IPA',
          abv:  '5.9',
          price: '6',
          remaining: '75',
          id: '3'
        },
        {
          name: 'Juicy Haze',
          brewer: 'New Belgium',
          description: 'India Pale Ale',
          abv:  '7.5',
          price: '6',
          remaining: '8',
          id: '4'
        },
        {
          name: '8 Hop',
          brewer: 'New Belgium',
          description: 'Pale Ale',
          abv:  '5.5',
          price: '6',
          remaining: '58',
          id: '5'
        }
      ]
    };
    this.handleAddNewBeer = this.handleAddNewBeer.bind(this);
  }

  handleAddNewBeer(newBeer){
    let newBeerList = this.state.masterKegList.slice();
    newBeerList.push(newBeer);
    this.setState({masterKegList: newBeerList})
  }

  render(){
  return (
    <div>
      <style jsx>{`
        body {
          font-family: monospace;
          background-image: url(${bg});
          background-size: cover;
          background-repeat: no-repeat;
        }
        `}</style>
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><BeerList beerList={this.state.masterKegList} />} />
          <Route exact path='/newbeer' render={()=><NewBeer onAddNewBeer={this.handleAddNewBeer}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}
}

export default App;
