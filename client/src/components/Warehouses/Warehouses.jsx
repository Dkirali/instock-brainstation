import React from 'react'
import './Warehouses.scss'
import search from "../../assets/icons/search-24px.svg"
import WarehouseList from "../WarehouseList/WarehouseList"


const Warehouses = () => {
    return(
        <section className="warehouse">
            <div className="warehouse__nav">
                <h1 className="warehouse__title">Warehouses</h1>
                <div className="warehouse__nav-right"> 
                    <form className="warehouse__form">
                        <label className="warehouse__form-label" htmlFor="text"></label>
                        <input className="warehouse__form-search" placeholder="Search..." name="text"/>
                            <img className="warehouse__form-search-icon" src={search} alt="search-icon"/>
                    </form>
                    <button className="warehouse__button" type="submit"><h3 className="warehouse__button-text">+Add New Warehouse</h3> </button>
                </div>
            </div>
            <WarehouseList/>
        </section>  
    )
}

export default Warehouses;