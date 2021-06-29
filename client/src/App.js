import HeroHeader from './components/HeroHeader/HeroHeader';
import Inventory from './components/Inventory/Inventory';
import Warehouses from './components/Warehouses/Warehouses';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return ( 
    <BrowserRouter>
      <HeroHeader/>
        <Switch>
          <Route exact path="/warehouses" component={Warehouses}/>
          <Route exact path="/inventory" component={Inventory}/>
        </Switch>
      <Footer/>
    </BrowserRouter>
    );
  }
}

export default App;