import React from 'react'
import './Warehouses.scss'
import search from "../../assets/icon/search-24px.svg"
import Trash from "../../assets/icon/delete_outline-24px.svg"
import Edit from "../../assets/icon/edit-24px.svg"

const Warehouses = () => {
    return(
        <section className="warehouse">
            <div className="warehouse__nav">
                <h1 className="warehouse__title">Warehouses</h1>
                <form className="warehouse__form">
                    <label className="warehouse__form-label" htmlFor="text"></label>
                    <input className="warehouse__form-search" placeholder="Search..." name="text"/>
                        <img className="warehouse__form-search-icon" src={search} alt="search-icon"/>
                </form>
                <button className="warehouse__button" type="submit"><h3 className="warehouse__button-text">+Add New Warehouse</h3> </button>
            </div>
            <div className="warehouse__information">
                <div className="warehouse__information-data">
                    <div className="warehouse__information-top">
                        <div className="warehouse__information-location">
                            <h4 className="warehouse__subheader">WAREHOUSE</h4>
                            <h3 className="warehouse__location">Manhattan </h3>
                        </div>
                        <div className="warehouse__information-address">
                            <h4 className="warehouse__subheader">ADDRESS</h4>
                            <p className="warehouse__address-details">503 Broadway, New York, USA</p>
                        </div>
                    </div>
                    <div className="warehouse__information-bottom">
                        <div className="warehouse__information-contact">
                            <h4 className="warehouse__subheader">CONTACT NAME</h4>
                            <p className="warehouse__contact-name">Parmin Aujula</p>
                        </div>
                        <div className="warehouse__information-contact-information">
                            <h4 className="warehouse__subheader">CONTACT INFORMATION</h4>
                            <p className="warehouse__contact-number">+1(629)555-0129</p>
                            <p className="warehouse__contact-email">paujla@instock.com</p>
                        </div>
                    </div>
                </div>
                <div className="warehouse__actions">
                    <img className ="warehouse__action-trash" src={Trash} alt="trashcan"/>
                    <img className ="warehouse__action-edit"src={Edit} alt="trashcan"/>
                </div>
            </div> 
        </section>  
    )
}

export default Warehouses;