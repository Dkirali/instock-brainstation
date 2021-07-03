import React, { Component } from 'react';
import Back from '../../assets/icons/arrow_back-24px.svg';
import axios from 'axios';
import { API_URL } from "../../utils/utils";
import './AddNewItem.scss'

class AddNewItem extends Component {
    state={
        warehouses: [],
        itemName: "",
        description: "",
        category: null,
        status: null,
        quantity: 0,
        warehouse: null,
    }
    
    submitHandler = (e) =>{
        e.preventDefault();
        const foundWarehouse = this.state.warehouses.find((warehouse) =>{
            return this.state.warehouse === warehouse.id
            
        })
        const warehouseName = foundWarehouse.name
        axios.post(`${API_URL}/inventory/add`, {...this.state, warehouseName})
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    componentDidMount() {
        axios
        .get(`${API_URL}/warehouses`)
        .then((response) => {
            this.setState({
            warehouses: response.data,
            });
        })
        .catch((err) => console.log("error!", err));
    }

    render() {
        let stockDecide;
        if (this.state.status === "Out of Stock"){
            stockDecide = "addItem__quantity-container--hide";
        } else {
            stockDecide = "addItem__quantity-container";
        }
        return (
            <div className="addItem">
                <div className="addItem__header">
                    <img className="addItem__header--back"src={Back} alt="back"/>
                    <h1 className="addItem__header--title">Add New Inventory Item</h1>
                </div>
                <form className="addItem__form" onSubmit={this.submitHandler}>
                    <div className="addItem__form-container">
                        <div className="addItem__itemDetails">
                            <h2 className="addItem__form--title">Item Details</h2>
                            <label className="addItem__form--label" htmlFor="itemName">Item Name</label>
                            <input className="addItem__form--input"
                                type="text"
                                name="itemName"
                                id="itemName"
                                placeholder="Item Name"
                                value={this.state.itemName}
                                onChange={this.changeHandler}
                            />

                            <label className="addItem__form--label" htmlFor="itemDescription">Description</label>
                            <textarea className="addItem__form--input"
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Please enter a brief item description..."
                                rows="5"
                                value={this.state.description}
                                onChange={this.changeHandler}
                            />
                            <label className="addItem__form--label" htmlFor="category">Category</label>
                            <select className="addItem__form--select" id="category" name="category" onChange={this.changeHandler} >
                                <option className="addItem__form--option" hidden disabled selected>Please Select</option>
                                <option className="addItem__form--option" value="Electronics">Electronics</option>
                                <option className="addItem__form--option" value="Apparel">Apparel</option>
                                <option className="addItem__form--option" value="Gear">Gear</option>
                                <option className="addItem__form--option" value="Accessories">Accessories</option>
                                <option className="addItem__form--option" value="Health">Health</option>
                            </select>
                        </div>
                        <div className="addItem__availability">
                            <h2 className="addItem__form--title">Item Availability</h2>
                            <label className="addItem__form--label" htmlFor="status">Status</label>
                            <div className="addItem__radio">
                                <div className="addItem__radio--left">
                                    <input className="addItem__radio--select" type="radio" name="status" id="status" value="In Stock" onChange={this.changeHandler}/>
                                    <p className="addItem__radio--text">In Stock</p>
                                </div>
                                <div className="addItem__radio--right">
                                    <input className="addItem__radio--select" type="radio" name="status" id="status" value="Out of Stock" onChange={this.changeHandler} />
                                    <p className="addItem__radio--text" className="addItem__radio--text">Out of Stock</p>
                                </div>
                            </div>
                            <div className={stockDecide}>
                                <label className="addItem__form--label" htmlFor="quantity">Quantity</label>
                                <input className={"addItem__form--input addItem__form--quantity"}
                                type="number"
                                step="1"
                                name="quantity"
                                id="quantity"
                                placeholder="0"
                                value={this.state.quantity}
                                onChange={this.changeHandler}
                                
                                />
                            </div>
                            <label className="addItem__form--label" htmlFor="warehouseID">Warehouse</label>
                            <select className="addItem__form--select" id="warehouse" name="warehouse" onChange={this.changeHandler} >
                            <option className="addItem__form--option" disabled selected hidden  >Please Select</option>
                                {this.state.warehouses
                                .map((warehouse) => {
                                    return (
                                        <option className="addItem__form--option" value={warehouse.id} >{warehouse.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="addItem__buttons">
                        <button className="addItem__cancel-button">Cancel</button>
                        <button className="addItem__add-button">+ Add Item</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddNewItem
