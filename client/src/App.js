import HeroHeader from "./components/HeroHeader/HeroHeader";
import Inventory from "./components/Inventory/Inventory";
import Warehouses from "./components/Warehouses/Warehouses";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import HeroFooter from "./components/HeroFooter/HeroFooter";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddItem from './components/AddItem/AddItem'
import EditItem from './components/EditItem/EditItem'
import React from "react";
import "./App.scss";


function App () {

    return (
      <BrowserRouter>
        <HeroHeader />
        <Switch>
          <Route exact path="/warehouses" component={Warehouses} />
          <Route exact path="/inventory" component={Inventory}/>
          <Route exact path="/" component={Warehouses} />
          <Route exact path="/warehouses/:id" component={WarehouseDetails} />
          <Route exact path="/inventory/add" component={AddItem} />
          <Route exact path="/inventory/edit/:id" component={EditItem} />
          <Route exact path="/warehouses/:id/edit" component={EditWarehouse} />
          <Route path='/inventory/:id' render={(props) => <InventoryItemDetails {...props} />} />
        </Switch>
        <HeroFooter />
      </BrowserRouter>
    );
  }

export default App;
