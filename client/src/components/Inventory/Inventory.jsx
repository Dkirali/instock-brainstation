import React from "react";
import "./Inventory.scss";
import search from "../../assets/icons/search-24px.svg";
import Trash from "../../assets/icon/delete_outline-24px.svg";
import Edit from "../../assets/icon/edit-24px.svg";
import Chevron from "../../assets/icon/chevron_right-24px.svg";

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
        </form>
        <button className="inventory__button" type="submit">
          <h3 className="inventory__button-text">+Add New Item</h3>{" "}
        </button>
      </div>
      {props.inventory.map((item) => {
          console.log(item)
        return (
          <div>
            <div className="inventory__information">
              <div className="inventory__information-data">
                <div className="inventory__information-top">
                  <div className="inventory__information-location">
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
                  <div className="inventory__information-contact">
                    <h4 className="inventory__subheader">STATUS</h4>
                    <p className="inventory__contact-name"> {item.status}</p>
                  </div>
                  <div className="inventory__information-contact-information">
                    <h4 className="inventory__subheader">
                      QTY
                    </h4>
                    <p className="inventory__contact-number">{item.quantity}</p>
                  </div>
                  <div className="inventory__information-contact-information">
                    <h4 className="inventory__subheader">WAREHOUSE</h4>
                    <p className="inventory__contact-number">{item.warehouseName}</p>
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
