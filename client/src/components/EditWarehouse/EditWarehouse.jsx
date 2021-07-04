import axios from "axios";
import React from "react";
import Error from '../../assets/icons/error-24px.svg'
import Arrow from '../../assets/icons/arrow_back-24px.svg'
import { API_URL } from "../../utils/utils";
import "./EditWarehouse.scss"
import { get } from 'lodash';


class EditWarehouse extends React.Component {

  state = {
    editWarehouse:{},
    loaded: false,
  }

  componentDidMount() {
    let id = this.props.match.params.id;

    axios.get(`${API_URL}/warehouses/${id}/edit`)
    .then(res => {
      this.setState({
        editWarehouse: res.data,
        loaded:true,
      });
    })
    .catch(err => {
    console.log("error", err)
    })
  }

  onSaveEdits = (e) => {
    const { value, name } = e.target;

    e.preventDefault();

    if (name.includes("contact")) {
      // Parse actual field name
      const contactFieldName = name.split('.')[1];
      this.setState({
        editWarehouse: {
          ...this.state.editWarehouse,
          contact: {
            ...this.state.editWarehouse.contact,
            [contactFieldName]: value,
          },
        },
      });
    } else {
      this.setState({
        editWarehouse: {
          ...this.state.editWarehouse,
          [name]: e.target.value,
        }
      });
    }

    if (value === "") {
      this.setState({
        edit:{...this.state.edit, [name]: true}
      })
    } else {
      this.setState({
        edit:{...this.state.edit, [name]: false}
      })
    }
  }

  validateEmail = () => {
    let emailError = "";
    console.log("Here is the email to submit:");
    console.log(this.state.editWarehouse.contact.email);
    if (!this.state.editWarehouse.contact.email.includes("@")) {
      emailError = "invalid email";
      console.log(`Email doesnt include @ sign! email: ${this.state.editWarehouse.contact.email}`);
    }

    if (emailError) {
      this.setState({ emailError });
      return false
    }
    return true;
  }


  
  validateInputs = () => {
    if(this.state.editWarehouse.address !== "" ) {
      console.log("true")
    } else {
      console.log("no")
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let id = this.props.match.params.id;
    // Check that all fields are valid
    const isValidEmail = this.validateEmail();
    const isValidInputs = this.validateInputs();

    if (isValidEmail) {
      console.log("ID: ", id);
      axios.put(`${API_URL}/warehouses/edit/${id}`, {
        name: this.state.editWarehouse.name,
        address: this.state.editWarehouse.address,
        city: this.state.editWarehouse.city,
        country: this.state.editWarehouse.country,
        contact: {
          name: this.state.editWarehouse.contact.name,
          position: this.state.editWarehouse.contact.position,
          phone: this.state.editWarehouse.contact.phone,
          email: this.state.editWarehouse.contact.email,
        }
      })
      .then (res => {
        console.log("Res from axios put")
        console.log(res)
        this.props.history.push(`/`)
      })
      .catch(err => {
        console.log(err)
      })
    } else {
      alert("You need to use @ to submit")
      console.log("bad")
    }
  }

  render() {

    if (this.state.editWarehouse !== {}) {

      return (
        <section className="editwarehouse">
          <div className="editwarehouse__nav">
            <img className="editwarehouse__image" src={Arrow} alt="go back to warehouse details"/>
            <h1 className="editwarehouse__title">Edit Warehouse</h1>
          </div>
          <form className="editwarehouse__form" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="top-section">
          <div className="editwarehouse__details">
            <h1 className="editwarehouse__details-title">Warehouse Details</h1>
            <div className="editwarehouse__details-top">
              <h1 className="editwarehouse__details-name">Warehouse Name</h1>
              <label className="editwarehouse__details-label" htmlFor="name"/>
              <input className={`editwarehouse__details-name-input ${this.state.editWarehouse.name === ""  ? "editwarehouse__details-name-error": " "}`} name="name" defaultValue={get(this.state.editWarehouse, "name")} onChange={this.onSaveEdits}/>
              <div className={`try ${this.state.editWarehouse.name === ""  ? "try-error" : " "}`}>
                  <img className="no" src={Error} alt="error alert"/>
                  <p className="lol">This field is required</p>
              </div>
            </div>
            <div className="editwarehouse__details-mid">
              <h1 className="editwarehouse__details-address">Street Address</h1>
              <label className="editwarehouse__details-label" htmlFor="address"/>
              <input className="editwarehouse__details-address-input" name="address" defaultValue={get(this.state.editWarehouse, "address")} onChange={this.onSaveEdits}/>
              <div className={`try ${this.state.editWarehouse.address === "" ? "try-error" : " "}`}>
                  <img className="no" src={Error} alt="error alert"/>
                  <p className="lol">This field is required</p>
              </div>
            </div>
            <div className="editwarehouse__details-mid">
              <h1 className="editwarehouse__details-city">City</h1>
              <label className="editwarehouse__details-label" htmlFor="city"/>
              <input className="editwarehouse__details-city-input" name="city" defaultValue={get(this.state.editWarehouse, "city")} onChange={this.onSaveEdits}/>
              <div className={`try ${this.state.editWarehouse.city === "" ? "try-error" : " "}`}>
                  <img className="no" src={Error} alt="error alert"/>
                  <p className="lol">This field is required</p>
              </div>
            </div>
            <div className="editwarehouse__details-bottom">
              <h1 className="editwarehouse__details-country">Country</h1>
              <label className="editwarehouse__details-label" htmlFor="country"/>
              <input className={`editwarehouse__details-country-input ${this.state.editWarehouse.country === "" ? "editwarehouse__details-country-error" : " "}`} name="country" defaultValue={get(this.state.editWarehouse, "country")} onChange={this.onSaveEdits}/>
              <div className={`try ${this.state.editWarehouse.country === ""? "try-error" : " "}`}>
                  <img className="no" src={Error} alt="error alert"/>
                  <p className="lol">This field is required</p>
              </div>
            </div>
          </div>
          <div className="editwarehouse__contact-details">
              <h1 className="editwarehouse__contact-details-title">Contact Details</h1>
              <div className="editwarehouse__contact-top">
                <h1 className="editwarehouse__contact-name">Contact Name</h1>
                <label className="editwarehouse__contact-label" htmlFor="contact.name"/>
                <input className="editwarehouse__contact-name-input" name="contact.name" defaultValue={get(this.state.editWarehouse, "contact.name")} onChange={this.onSaveEdits}/>
                <div className={`try ${get(this.state.editWarehouse, "contact.name") === "" ? "try-error" : " "}`}>
                  <img className="no" src={Error} alt="error alert"/>
                  <p className="lol">This field is required</p>
                </div>
              </div>
              <div className="editwarehouse__contact-mid">
                <h1 className="editwarehouse__contact-position">Position</h1>
                <label className="editwarehouse__contact-label" htmlFor="contact.position"/>
                <input className="editwarehouse__contact-position-input" name="contact.position" defaultValue={get(this.state.editWarehouse, "contact.position")} onChange={this.onSaveEdits}/>
                <div className={`try ${get(this.state.editWarehouse, "contact.position") === "" ? "try-error" : " "}`}>
                  <img className="no" src={Error} alt="error alert"/>
                  <p className="lol">This field is required</p>
                </div>
              </div>
              <div className="editwarehouse__contact-mid">
                <h1 className="editwarehouse__contact-number">Phone Number</h1>
                <label className="editwarehouse__contact-label" htmlFor="contact.number"/>
                <input className="editwarehouse__contact-number-input" name="contact.number" id="phone-number" defaultValue={get(this.state.editWarehouse, "contact.phone")} onChange={this.onSaveEdits}/>
                <div className={`try ${get(this.state.editWarehouse, "contact.number") === "" ? "try-error" : " "}`}>
                  <img className="no" src={Error} alt="error alert"/>
                  <p className="lol">This field is required</p>
                </div>
              </div>
              <div className="editwarehouse__contact-bottom">
                <h1 className="editwarehouse__contact-email">Email</h1>
                <label className="editwarehouse__contact-label" htmlFor="contact.email"/>
                <input className="editwarehouse__contact-email-input" name="contact.email" defaultValue={get(this.state.editWarehouse, "contact.email")} onChange={this.onSaveEdits}/>
                <div className={`try ${get(this.state.editWarehouse, "contact.email") === "" ? "try-error" : " "}`}>
                  <img className="no" src={Error} alt="error alert"/>
                  <p className="lol">This field is required</p>
              </div>
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
}

export default EditWarehouse;
