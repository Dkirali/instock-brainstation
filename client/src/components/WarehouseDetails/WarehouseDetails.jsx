import React from "react";
import "./WarehouseDetails.scss";
import Arrow from '../../assets/icons/arrow_back-24px.svg'
import Trash from "../../assets/icon/delete_outline-24px.svg";
import Edit from "../../assets/icon/edit-24px.svg";
import Chevron from "../../assets/icon/chevron_right-24px.svg";
import Sort from "../../assets/icon/sort-24px.svg"
import axios from "axios";
import { API_URL } from "../../utils/utils";
import { Link } from "react-router-dom";


class WarehouseDetails extends React.Component {

    state = {
        inventory: null,
        loaded: false,
        selectedWarehouse: [],
      };
    
    componentDidMount() {
      let id = this.props.match.params.id
      axios.get(`${API_URL}/warehouses/${id}`)
      .then ((response => {
      this.setState ({
        selectedWarehouse:response.data
         })
      }))
      axios
      .get(`${API_URL}/warehouses/${id}/inventory`)
      .then((response) => {
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
        return <main className="load-screen">Loading...</main>; 
    }
 
  return (

    // Doruk, I think this is the part you mess with. You probably need to call in another state to get info for that specific warehouse
    <section className="warehousedetails">
      <div className="warehousedetails__nav">
          <div className="warehousedetails__nav-wrapper">
            <Link to="/warehouses"> <img className="warehousedetails__image" src={Arrow} alt="go back to warehouse list"/> </Link>
            <h1 className="warehousedetails__title">{this.state.selectedWarehouse.name}</h1>
          </div>
            <form className="warehousedetails__form">
            <label className="warehousedetails__form-label" htmlFor="text"></label>
                <button className="warehousedetails__button" type="submit">
                  <img
                  className="warehousedetails__form-edit-icon"
                  src={Edit}
                  alt="search-icon"
                  />
                  <h3 className="warehousedetails__button-text">Edit</h3>
                </button>
            </form>
            </div>
        <div className="warehousedetails__specifics">
          <div className="warehousedetails__specifics-top">
            <h4 className="warehousedetails__specifics-location">WAREHOUSE ADDRESS:</h4>
              <p className="warehousedetails__specifics-address">{this.state.selectedWarehouse.address}</p>
              <p className="warehousedetails__specifics-country">{this.state.selectedWarehouse.city}, {this.state.selectedWarehouse.country}</p>
          </div>
          <div className="warehousedetails__specifics-bottom">
            <div className="warehousedetails__specifics-bottom-upper-section">
              <h4 className="warehousedetails__specifics-contact">CONTACT NAME:</h4>
                <p className="warehousedetails__specifics-contact-name">{this.state.selectedWarehouse.contact.name}</p>
                <p className="warehousedetails__specifics-contact-position">{this.state.selectedWarehouse.contact.position}</p>  
            </div>
            <div className="warehouse__specifics-bottom-lower-section">
              <h4 className="warehousedetails__specifics-contact-information">CONTACT INFORMATION:</h4>
                <p className="warehousedetails__specifics-contact-number">{this.state.selectedWarehouse.contact.phone}</p>
                <p className="warehousedetails__specifics-contact-email">{this.state.selectedWarehouse.contact.email}</p>
            </div>
          </div>
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

// componentDidMount() {
//   let id = this.props.match.params.id
//    axios.get(`${API_URL}/warehouses/${id}`)
//    .then ((response => {
//      console.log(response)
//      this.setState ({
//        selectedWarehouse:response.data
//      })
//    }))
   
//    axios
//    .get(`${API_URL}/warehouses/${id}/inventory`)
//    .then((response) => {
//      this.setState({
//        inventory: response.data,
//        loaded: true,
//      });
//    })
//    .catch((err) => console.log("error!", err));
// }
