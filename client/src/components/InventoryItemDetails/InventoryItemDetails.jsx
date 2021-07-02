import React, { Component } from "react";
import { API_URL } from "../../utils/utils";
import Edit from "../../assets/icon/edit-24px.svg";
import Back from "../../assets/icon/arrow_back-24px.svg";
import axios from "axios";
import "./InventoryItemDetails.scss";

class InventoryItemDetails extends Component {
    state = {
        item: {},
    };

    componentDidMount() {
        axios
            .get(`${API_URL}/inventory/${this.props.match.params.id}`)
            .then((response) => {
                this.setState({
                    item: response.data,
                });
            })
            .catch((err) => console.log("error!", err));
    }

    render() {
        const { item } = this.state;
        return (
            <div className='itemDetails'>
                <div className='itemDetails__header'>
                    <img
                        className='itemDetails__header--back'
                        src={Back}
                        alt='back'
                    />
                    <h1 className='itemDetails__header--name'>
                        {item.itemName}
                    </h1>
                    <img
                        className='itemDetails__header--edit'
                        src={Edit}
                        alt='edit'
                    />
                </div>
                <div className='itemDetails__info'>
                    <div className='itemDetails__info--first-half'>
                        <h3 className='itemDetails__info--header'>
                            ITEM DESCRIPTION
                        </h3>
                        <p className='itemDetails__info--text'>
                            {item.description}
                        </p>
                        <h3 className='itemDetails__info--header'>CATEGORY</h3>
                        <p className='itemDetails__info--text'>
                            {item.category}
                        </p>
                    </div>
                    <div className='itemDetails__info--second-half'>
                        <div className='itemDetails__stock-container'>
                            <div class='itemDetails__status'>
                                <h3 className='itemDetails__info--header'>
                                    STATUS
                                </h3>
                                <p className='itemDetails__info--text'>
                                    {item.status}
                                </p>
                            </div>
                            <div className='itemDetails__quantity'>
                                <h3 className='itemDetails__info--header'>
                                    QUANTITY
                                </h3>
                                <p className='itemDetails__info--text'>
                                    {item.quantity}
                                </p>
                            </div>
                        </div>
                        <h3 className='itemDetails__info--header'>WAREHOUSE</h3>
                        <p className='itemDetails__info--text'>
                            {item.warehouseName}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default InventoryItemDetails;