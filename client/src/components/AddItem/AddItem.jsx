import ItemForm from '../ItemForm/ItemForm'
import React, { Component } from 'react'
import axios from 'axios'
import { API_URL } from "../../utils/utils";

export default class AddItem extends Component {

submitHandler = (formData) => {
    axios.post(`${API_URL}/inventory/add`, formData)
    }


    render() {
        return (
            
            
            <ItemForm
            title="Add New Inventory Item"
            handleSubmit={this.submitHandler} 
            button="+ Add Item" />

        )
    }
}
