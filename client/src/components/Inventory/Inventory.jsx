import React from "react";
import "./Inventory.scss";
import search from "../../assets/icons/search-24px.svg";
import Trash from "../../assets/icon/delete_outline-24px.svg";
import Edit from "../../assets/icon/edit-24px.svg";
import Chevron from "../../assets/icon/chevron_right-24px.svg";
import Sort from "../../assets/icon/sort-24px.svg"

const Inventory = (props) => {
  return (
    <section className="inventory">
      <div className="inventory__nav">
        <h1 className="inventory__title">Inventory</h1>
        <form className="inventory__form">
          <label className="inventory__form-label" htmlFor="text"></label>
          <input
            className="inventory__form-search"
            placeholder="Search..."
            name="text"
          />
          <img
            className="inventory__form-search-icon"
            src={search}
            alt="search-icon"
          />
                  <button className="inventory__button" type="submit">
          <h3 className="inventory__button-text">+ Add New Item</h3>{" "}
        </button>
        </form>

      </div>
      <ul className="inventory-topbar">
            <li className="inventory-topbar__inventory">INVENTORY ITEM<img className="inventory-topbar__sort"src = {Sort} alt="up arrow and down arrow"/></li>
            <li className="inventory-topbar__category">CATEGORY <img className="inventory-topbar__sort"src = {Sort} alt="up arrow and down arrow"/></li>
            <li className="inventory-topbar__status">STATUS <img className="inventory-topbar__sort"src = {Sort} alt="up arrow and down arrow"/></li>
            <li className="inventory-topbar__qty"> QTY <img className=" inventory-topbar__sort"src = {Sort} alt="up arrow and down arrow"/></li>
            <li className="inventory-topbar__warehouse">WAREHOUSE <img className="inventory-topbar__sort"src = {Sort} alt="up arrow and down arrow"/></li>
            <li className="inventory-topbar__actions">ACTIONS <img className="inventory-topbar__sort"src = {Sort} alt="up arrow and down arrow"/></li>

      </ul>
      {props.inventory.map((item) => {
        return (
          <div key = {item.id}>
            <div className="inventory__information">
              <div className="inventory__information-data">
                <div className="inventory__information-top">
                  <div className="inventory__information-item">
                    <h4 className="inventory__subheader">INVENTORY ITEM</h4>
                    <h3 className="inventory__itemname">
                      {item.itemName}
                      <img
                        className="inventory__chevron"
                        src={Chevron}
                        alt="trashcan"
                      />
                    </h3>
                  </div>
                  <div className="inventory__information-category">
                    <h4 className="inventory__subheader">CATEGORY</h4>
                    <p className="inventory__address-details">
                      {item.category}
                    </p>
                  </div>
                </div>
                <div className="inventory__information-bottom">
                  <div className="inventory__information-status">
                    <h4 className="inventory__subheader">STATUS</h4>
                    <p className="inventory__warehouse-status"> {item.status}</p>
                  </div>
                  <div className="inventory__information-quantity-information">
                    <h4 className="inventory__subheader">
                      QTY
                    </h4>
                    <p className="inventory__warehouse-info">{item.quantity}</p>
                  </div>
                  <div className="inventory__information-warehouse-information">
                    <h4 className="inventory__subheader">WAREHOUSE</h4>
                    <p className="inventory__warehouse-info">{item.warehouseName}</p>
                  </div>
                </div>
              </div>
              <div className="inventory__actions">
                <img
                  className="inventory__action-trash"
                  src={Trash}
                  alt="trashcan"
                />
                <img
                  className="inventory__action-edit"
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

export default Inventory;
