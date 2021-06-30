import React from 'react'
import Trash from "../../assets/icon/delete_outline-24px.svg"
import Edit from "../../assets/icon/edit-24px.svg"
import { API_URL } from '../../utils/utils.js';
import axios from 'axios'
import './WarehouseList.scss'
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

class WarehouseList extends React.Component {
    
    state = {
        allWarehouses:[],
    }

    componentDidMount() {
        axios.get(`${API_URL}/warehouses`)
        .then(res => {
            console.log(res)
            this.setState({
                allWarehouses: res.data
            })
        })
        .catch(err => {
            console.log("uh oh!", err)
        })
    }

    render() {
        return(
        <>
        {this.state.allWarehouses.map (warehouse => {
            return (
                <div key = {warehouse.id} className="warehouse__information">
                    <div className="warehouse__information-data">
                        <div className="warehouse__information-top">
                            <div className="warehouse__information-location">
                                <h4 className="warehouse__subheader">WAREHOUSE</h4>
                                <Link to = {`warehouses/${warehouse.id}`} className="warehouse__location">{warehouse.name}</Link> 
                            </div>
                            <div className="warehouse__information-address">
                                <h4 className="warehouse__subheader">ADDRESS</h4>
                                <p className="warehouse__address-details">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
                            </div>
                        </div>
                        <div className="warehouse__information-bottom">
                            <div className="warehouse__information-contact">
                                <h4 className="warehouse__subheader">CONTACT NAME</h4>
                                <p className="warehouse__contact-name">{warehouse.contactName}</p>
                            </div>
                            <div className="warehouse__information-contact-information">
                                <h4 className="warehouse__subheader">CONTACT INFORMATION</h4>
                                <p className="warehouse__contact-number">{warehouse.contactPhone}</p>
                                <p className="warehouse__contact-email">{warehouse.contactEmail}</p>
                            </div>
                        </div>
                    </div>
                    <div className="warehouse__actions">
                        <img className ="warehouse__actions-trash" src={Trash} alt="trashcan"/>
                        <img className ="warehouse__actions-edit"src={Edit} alt="trashcan"/>
                    </div>
                </div> 
            )
        })}
        </>
        )
    }
}

export default WarehouseList;