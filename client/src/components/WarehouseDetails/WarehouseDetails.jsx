import React from "react";
import "./WarehouseDetails.scss";
import search from "../../assets/icons/search-24px.svg";
import Trash from "../../assets/icon/delete_outline-24px.svg";
import Edit from "../../assets/icon/edit-24px.svg";
import Chevron from "../../assets/icon/chevron_right-24px.svg";
import Sort from "../../assets/icon/sort-24px.svg"
import axios from "axios";
import { API_URL } from "../../utils/utils";

class WarehouseDetails extends React.Component {

    state = {
        inventory: null,
        loaded: false,
      };
    
      componentDidMount() {
         let id = this.props.match.params.id
        axios
          .get(`${API_URL}/warehouses/${id}/inventory`)
          .then((response) => {
              console.log(response)
            this.setState({
              inventory: response.data,
              loaded: true,
            });
          })
          .catch((err) => console.log("error!", err));
      }
 render () {
 let stockDecide
    if (this.state.loaded === false) {
            return <main className="load-screen">Loading...</main>; }

  return (

    // Doruk, I think this is the part you mess with. You probably need to call in another state to get info for that specific warehouse
    <section className="warehousedetails">
      <div className="warehousedetails__nav">
        <h1 className="warehousedetails__title">Warehouse</h1>
        <form className="warehousedetails__form">
          <label className="warehousedetails__form-label" htmlFor="text"></label>
                  <button className="warehousedetails__button" type="submit">
          <h3 className="warehousedetails__button-text">     <img
            className="warehousedetails__form-edit-icon"
            src={Edit}
            alt="search-icon"
          />Edit</h3>
        </button>
        </form>
      </div>
{/*  */}
  
      <ul className="warehousedetails-topbar">
            <li className="warehousedetails-topbar__inventory">INVENTORY ITEM<img className="warehousedetails-topbar__sort"src = {Sort} alt="up arrow and down arrow"/></li>
            <li className="warehousedetails-topbar__category">CATEGORY <img className="warehousedetails-topbar__sort"src = {Sort} alt="up arrow and down arrow"/></li>
            <li className="warehousedetails-topbar__status">STATUS <img className="warehousedetails-topbar__sort"src = {Sort} alt="up arrow and down arrow"/></li>
            <li className="warehousedetails-topbar__qty"> QUANTITY <img className=" warehousedetails-topbar__sort"src = {Sort} alt="up arrow and down arrow"/></li>

            <li className="warehousedetails-topbar__actions">ACTIONS <img className="warehousedetails-topbar__sort"src = {Sort} alt="up arrow and down arrow"/></li>

      </ul>
      {this.state.inventory.map((item) => {
          console.log(item)
        if(item.status === "Out of Stock") {
            stockDecide = "warehousedetails__warehouse-status warehousedetails__warehouse-status--outstock"
        } else {
            stockDecide = "warehousedetails__warehouse-status warehousedetails__warehouse-status--instock"
        }
        return (
          <div key = {item.id}>
            <div className="warehousedetails__information">
              <div className="warehousedetails__information-data">
                <div className="warehousedetails__information-top">
                  <div className="warehousedetails__information-item">
                    <h4 className="warehousedetails__subheader">INVENTORY ITEM</h4>
                    <h3 className="warehousedetails__itemname">
                      {item.itemName}
                      <img
                        className="warehousedetails__chevron"
                        src={Chevron}
                        alt="trashcan"
                      />
                    </h3>
                  </div>
                  <div className="warehousedetails__information-category">
                    <h4 className="warehousedetails__subheader">CATEGORY</h4>
                    <p className="warehousedetails__category-details">
                      {item.category}
                    </p>
                  </div>
                </div>
                <div className="warehousedetails__information-bottom">
                  <div className="warehousedetails__information-status">
                    <h4 className="warehousedetails__subheader">STATUS</h4>
                   
                    <p className={stockDecide} > {item.status}</p>
                  </div>
                  <div className="warehousedetails__information-quantity-information">
                    <h4 className="warehousedetails__subheader">
                      QTY
                    </h4>
                    <p className="warehousedetails__warehouse-info">{item.quantity}</p>
                  </div>
         
                </div>
              </div>
              <div className="warehousedetails__actions">
                <img
                  className="warehousedetails__action-trash"
                  src={Trash}
                  alt="trashcan"
                />
                <img
                  className="warehousedetails__action-edit"
                  src={Edit}
                  alt="trashcan"
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
}
export default WarehouseDetails;
