import React, { Component } from 'react'
import Back from '../../assets/icons/arrow_back-24px.svg'

class AddNewItem extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={Back} alt="back"/>
                    <h1>Add New Inventory Item</h1>
                </div>
                <form>
                    <div>
                        <h2>Item Details</h2>
                        <label htmlFor="itemName">Item Name</label>
                        <input 
                            type="text"
                            name="itemName"
                            id="itemName"
                            placeholder="Item Name"
                        />

                        <label htmlFor="itemDescription">Description</label>
                        <textarea 
                            type="text"
                            name="itemDescription"
                            id="itemDescription"
                            placeholder="Please enter a brief item description..."
                            rows="5"
                        />
                        <label htmlFor="category">Category</label>
                        <select id="category" name="category" placeholder="Please select">
                            <option value="Electronics">Electronics</option>
                            <option value="Apparel">Apparel</option>
                            <option value="Gear">Gear</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Health">Health</option>
                        </select>
                    </div>
                    <div>
                        <h2>Item Availability</h2>
                        <label htmlFor="status">Status</label>
                        <input type="radio" name="status" id="status" value="In Stock" />In Stock
                        <input type="radio" name="status" id="status" value="Out of Stock" />Out of Stock
                        <label htmlFor="">Quantity</label>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddNewItem
