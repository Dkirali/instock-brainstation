import axios from "axios";
import React from "react";
import Arrow from '../../assets/icons/arrow_back-24px.svg'
import { API_URL } from "../../utils/utils";
import "./EditWarehouse.scss"


class EditWarehouse extends React.Component {
    state ={
        editWarehouse:[],
        loaded: false
    }

    componentDidMount(){
        let id = this.props.match.params.id
    
        axios.get(`${API_URL}/warehouses/${id}/edit`)
        .then(res => {
          this.setState({
            editWarehouse:res.data,   
            loaded:true
          })
        })
      .catch(err => {
        console.log("error", err)
        })  
      }

    render() {
       
        return (
            <section className="editwarehouse">
                <div className="editwarehouse__nav">
                    <img className="editwarehouse__image" src={Arrow} alt="go back to warehouse details"/>
                    <h1 className="editwarehouse__title">Edit Warehouse</h1>
                </div>
                <form className="editwarehouse__form">
                    <div className="top-section">
                <div className="editwarehouse__details">
                    <h1 className="editwarehouse__details-title">Warehouse Details</h1>
                    <div className="editwarehouse__details-top">
                        <h1 className="editwarehouse__details-name">Warehouse Name</h1>
                        <div className="editwarehouse__details-name-input">
                            <p className="editwarehouse__details-name-text">{this.state.editWarehouse.name}</p>
                        </div>
                    </div>
                    <div className="editwarehouse__details-mid">
                        <h1 className="editwarehouse__details-address">Street Address</h1>
                        <div className="editwarehouse__details-address-input">
                            <p className="editwarehouse__details-address-text"> {this.state.editWarehouse.address}</p>
                        </div>
                    </div>
                    <div className="editwarehouse__details-mid">
                        <h1 className="editwarehouse__details-city">City</h1>
                        <div className="editwarehouse__details-city-input">
                            <p className="editwarehouse__details-city-text">{this.state.editWarehouse.city}</p>
                        </div>
                    </div> 
                    <div className="editwarehouse__details-bottom">
                        <h1 className="editwarehouse__details-country">Country</h1>
                        <div className="editwarehouse__details-country-input">
                            <p className="editwarehouse__details-country-text">{this.state.editWarehouse.country}</p>
                        </div>
                    </div>        
                </div>
                <div className="editwarehouse__contact-details">
                        <h1 className="editwarehouse__contact-details-title">Contact Details</h1>
                        <div className="editwarehouse__contact-top">
                            <h1 className="editwarehouse__contact-name">Contact Name</h1>
                            <label className="editwarehouse__contact-label" htmlFor="name"/>
                            <input className="editwarehouse__contact-name-input" name="name" placeholder="Contact Name"></input>
                        </div>
                        <div className="editwarehouse__contact-mid">
                            <h1 className="editwarehouse__contact-position">Position</h1>
                            <label className="editwarehouse__contact-label" htmlFor="position"/>
                            <input className="editwarehouse__contact-position-input" name ="position" placeholder="Position"></input>
                        </div>
                        <div className="editwarehouse__contact-mid">
                            <h1 className="editwarehouse__contact-number">Phone Number</h1>
                            <label className="editwarehouse__contact-label" htmlFor="number"/>
                            <input className="editwarehouse__contact-number-input" name ="number" placeholder="Phone Number"></input>
                        </div>
                        <div className="editwarehouse__contact-bottom">
                            <h1 className="editwarehouse__contact-email">Email</h1>
                            <label className="editwarehouse__contact-label" htmlFor="email"/>
                            <input className="editwarehouse__contact-email-input" name ="email" placeholder="Email"></input>
                        </div>
                    </div>
                    </div>
                    <div className="bottom-section">
                    <div className="editwarehouse__button-section">    
                        <button className="editwarehouse__cancel-button"> CANCEL </button>
                        <button className="editwarehouse__save-button"> SAVE </button>
                    </div>
                    </div>
               </form> 
            </section>
        )
    }
}

export default EditWarehouse;