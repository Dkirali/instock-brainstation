import React from 'react'
import Trash from "../../assets/icon/delete_outline-24px.svg"
import Edit from "../../assets/icon/edit-24px.svg"
import { API_URL } from '../../utils/utils.js';
import axios from 'axios'
import './WarehouseList.scss'

import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import DelModal from "../DelModal/DelModal"

class WarehouseList extends React.Component {
    
    state = {
        allWarehouses:[],
        show: false,
        warehouseId: null,
        warehouseName: null
    }

    onCloseHandler = () => {
        this.setState({
          show: false
        })
      }
      onTrashHandler = (e) => {
        console.log(e.target.id)
        this.setState({
          show: true,
          warehouseId: e.target.id,
          warehouseName: e.target.name
        })
        console.log(this.state.itemId)
      }
      onDeleteHandler = (itemid) => {
            console.log(itemid)
        axios
          .delete(`${API_URL}/warehouses/${itemid}/warehouse`)
          .then((response) => {
            console.log(response)
            this.setState({
                allWarehouses: response.data,
              show: false
  
            });
          })
          .catch((err) => console.log("error!", err))
      }

    componentDidMount() {
        axios.get(`${API_URL}/warehouses`)
        .then(res => {
            console.log(res)
            this.setState({
                allWarehouses: res.data,
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
                                <Link to = {`warehouses/${warehouse.id}`} className="warehouse__location"><p>{warehouse.name}</p></Link> 
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
                        <img name = {warehouse.name} id = {warehouse.id}  onClick={this.onTrashHandler} className ="warehouse__actions-trash" src={Trash} alt="trashcan"/>
                        <img className ="warehouse__actions-edit"src={Edit} alt="edit"/>
                    </div>
                </div> 
            )
        })}
         <DelModal show = {this.state.show} onCloseHandler={this.onCloseHandler} onTrashHandler={this.onTrashHandler}
      onDeleteHandler={this.onDeleteHandler} itemId = {this.state.warehouseId} name = "Warehouse" itemName = {this.state.warehouseName}/>
        </>
        )
    }
}

export default WarehouseList;