import HeroHeader from "./components/HeroHeader/HeroHeader";
import Inventory from "./components/Inventory/Inventory";
import Warehouses from "./components/Warehouses/Warehouses";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";

import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import React from "react";
import "./App.scss";

import { API_URL } from "./utils/utils";

class App extends React.Component {
  state = {
    inventory: null,
    loaded: false,
  };

  componentDidMount() {
    axios
      .get(`${API_URL}/inventory`)
      .then((response) => {
        this.setState({
          inventory: response.data,
          loaded: true,
        });
      })
      .catch((err) => console.log("error!", err));
  }

  render() {
    if (this.state.loaded === false) {
      return <main className="load-screen">Loading...</main>;
    }
    return (
      <BrowserRouter>
        <HeroHeader/>
        <Switch>
          <Route exact path="/warehouses" component={Warehouses} />
          <Route
            exact path="/inventory"
            render={(props) => <Inventory {...props} inventory={this.state.inventory} />}
          />
          <Route
            exact path="/"
            render={(props) => <Inventory {...props} inventory={this.state.inventory} />}
          />        </Switch>
          <Route exact path="/warehouses/:id"component={WarehouseDetails} />        
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
