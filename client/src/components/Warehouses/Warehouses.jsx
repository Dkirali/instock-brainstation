import React from 'react'
import './Warehouses.scss'
import search from "../../assets/icons/search-24px.svg"
import WarehouseList from "../WarehouseList/WarehouseList"
import Sort from "../../assets/icon/sort-24px.svg"
import Trash from "../../assets/icon/delete_outline-24px.svg"
import Edit from "../../assets/icon/edit-24px.svg"


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
            <ul className="warehouse-topbar">
                <li className="warehouse-topbar__warehouse">WAREHOUSE<img className="warehouse-topbar__sort"src = {Sort} alt="up arrow and down arrow"/></li>
                <li className="warehouse-topbar__address">ADDRESS <img className="warehouse-topbar__sort"src = {Sort} alt="up arrow and down arrow"/></li>
                <li className="warehouse-topbar__contact-name">CONTACT NAME <img className="warehouse-topbar__sort"src = {Sort} alt="up arrow and down arrow"/></li>
                <li className="warehouse-topbar__contact-information"> CONTACT INFORMATION  <img className=" warehouse-topbar__sort"src = {Sort} alt="up arrow and down arrow"/></li>
                <li className="warehouse-topbar__actions"> ACTIONS <img className="warehouse-topbar__sort"src = {Sort} alt="up arrow and down arrow"/></li>
            </ul>      
            <WarehouseList/>
            <WarehouseDetails/>
        </section>  
    )
}

export default Warehouses;