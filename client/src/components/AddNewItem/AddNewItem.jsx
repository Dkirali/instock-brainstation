import React, { Component } from 'react';
import Back from '../../assets/icons/arrow_back-24px.svg';
import axios from 'axios';
import { API_URL } from "../../utils/utils";
import './AddNewItem.scss'
import error from '../../assets/icons/error-24px.svg'

class AddNewItem extends Component {
    state={
        warehouses: [],
        itemName: "",
        description: "",
        category: null,
        status: null,
        quantity: 0,
        warehouse: null,
        nameError:"",
        desError:"",
        categoryError:"",
        statusError: "",
        quantityError: "",
        warehouseError: "",

    }
    

    validate = () => {
    const errorMessage = "This field is required"
    const formError = { }


    if (!this.state.itemName){
        formError.nameError = errorMessage;
        
    }
    if (!this.state.description){
        formError.desError = errorMessage;
        
    }
    if (!this.state.category){
        formError.categoryError = errorMessage;
        
    }
    if (!this.state.status){
        formError.statusError = errorMessage;
        
    }
    if ((this.state.status==="In Stock" || !this.state.status) && !this.state.quantity){
        formError.quantityError = errorMessage;
        
    }
    if (!this.state.warehouse){
        formError.warehouseError = errorMessage;
        
    }
    this.setState(formError)

    const hasErrors = Object.keys(formError).length

    return Boolean(hasErrors)
    
    

    }

    submitHandler = (e) =>{
        e.preventDefault();
        const isValid = this.validate();
        if (!isValid) {
            const foundWarehouse = this.state.warehouses.find((warehouse) =>{
                return this.state.warehouse === warehouse.id
            })
            axios.post(`${API_URL}/inventory/add`, {...this.state, foundWarehouse})
        }
        
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
                            {this.state.nameError ? <div className="addItem__error">
                                <img className="addItem__error--image" src={error} alt="error"/>
                                <p className="addItem__error--text" >{this.state.nameError}</p>
                                </div> : null}

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
                            {this.state.desError ? <div className="addItem__error">
                                <img className="addItem__error--image" src={error} alt="error"/>
                                <p className="addItem__error--text" >{this.state.desError}</p>
                                </div> : null}

                            <label className="addItem__form--label" htmlFor="category">Category</label>
                            <select className="addItem__form--select" id="category" name="category" onChange={this.changeHandler} >
                                <option className="addItem__form--option" hidden disabled selected>Please Select</option>
                                <option className="addItem__form--option" value="Electronics">Electronics</option>
                                <option className="addItem__form--option" value="Apparel">Apparel</option>
                                <option className="addItem__form--option" value="Gear">Gear</option>
                                <option className="addItem__form--option" value="Accessories">Accessories</option>
                                <option className="addItem__form--option" value="Health">Health</option>
                            </select>
                            {this.state.categoryError ? <div className="addItem__error">
                                <img className="addItem__error--image" src={error} alt="error"/>
                                <p className="addItem__error--text">{this.state.categoryError}</p>
                                </div> : null}
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
                            {this.state.statusError ? <div className="addItem__error">
                                <img className="addItem__error--image" src={error} alt="error"/>
                                <p className="addItem__error--text">{this.state.statusError}</p>
                                </div> : null}
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
                                {this.state.quantityError ? <div className="addItem__error">
                                <img className="addItem__error--image" src={error} alt="error"/>
                                <p className="addItem__error--text">{this.state.quantityError}</p>
                                </div> : null}
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
                            {this.state.warehouseError ? <div className="addItem__error">
                                <img className="addItem__error--image" src={error} alt="error"/>
                                <p className="addItem__error--text">{this.state.warehouseError}</p>
                                </div> : null}
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
