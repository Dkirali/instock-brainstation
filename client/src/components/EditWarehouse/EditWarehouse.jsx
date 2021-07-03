import axios from "axios";
import React from "react";
import Error from '../../assets/icons/error-24px.svg'
import Arrow from '../../assets/icons/arrow_back-24px.svg'
import { API_URL } from "../../utils/utils";
import "./EditWarehouse.scss"



class EditWarehouse extends React.Component {

  state ={
    editWarehouse:{},
    contactInfo:{},
    loaded: false,
    edit: {errorWarehouse: false, errorAddress: false, errorCity: false, errorCountry: false, errorName: false, errorPosition: false, errorNumber: false, errorEmail: false,},
    emailCheck:""
  }

  componentDidMount() {
    let id = this.props.match.params.id;

    axios.get(`${API_URL}/warehouses/${id}/edit`)
    .then(res => {
      this.setState({
        editWarehouse:res.data,
        contactInfo:res.data.contact,
        loaded:true,
        // edit: {errorWarehouse: true, errorAddress: true, errorCity: true, errorCountry: true, errorName: true, errorPosition: true, errorNumber: true, errorEmail: true}
      });
    })
    .catch(err => {
    console.log("error", err)
    })
  }

  // onChangeContactField = (fieldName, value) => {
  //   const currentEditWarehouse = this.state.editWarehouse;
  //   const newEditWarehouse = {
  //     ...currentEditWarehouse,
  //     contact: {
  //       ...currentEditWarehouse.contact,
  //       [fieldName]: value,
  //     }
  //   }
  //   this.setState({ editWarehouse: newEditWarehouse });
  // };

  // onChangeWarehouseField = (fieldName, value) => {
  //   const currentEditWarehouse = this.state.editWarehouse;
  //   const newEditWarehouse = {
  //     ...currentEditWarehouse,
  //       [fieldName]: value,
  //   }
  //   this.setState({ editWarehouse: newEditWarehouse });
  // };

  onSaveEdits = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    e.preventDefault();
    this.setState({editWarehouse:{
        ...this.state.editWarehouse, [e.target.name]:e.target.value
    }})
    if(e.target.value === ""){
      this.setState({
          edit:{...this.state.edit, [e.target.name]: true}
      })
      console.log("true")
  } else {
      this.setState({
          edit:{...this.state.edit, [e.target.name]: false}
      })
      console.log("false")
  }
}

validateEmail = () => {
  let emailError = "";

  if(!this.state.emailCheck.includes("@")) {
    emailError = "invalid email"
  }

  if (emailError) {
    this.setState({ emailError })
    return false
  }
  return true;
}


 formatPhoneNumber = (value) => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 9)}`;
}

phoneNumberFormatter = (e) => {
  const inputField = document.getElementsByClassName("editwarehouse__contact-number-input");
  const formattedInputValue = this.formatPhoneNumber(inputField.value);
  inputField.value = formattedInputValue;
  console.log(formattedInputValue)
}

handleSubmit = (e) => {
  e.preventDefault();
  const isValid = this.validateEmail();
  if (isValid) {
    console.log(this.state)
  }

}


  
  render() {
     if(this.state.editWarehouse !== {}){
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
              <label className="editwarehouse__details-label" htmlFor="warehouseName"/>
              <input className={`editwarehouse__details-name-input ${this.state.errorWarehouse ? "editwarehouse__details-name-error": " "}`} name="warehouseName" defaultValue={this.state.editWarehouse.name} onChange={this.onSaveEdits}/>
              {/* <input className={`editwarehouse__details-name-input ${this.state.errorWarehouse ? "editwarehouse__details-name-error": " "}`} name="warehouseName" defaultValue={this.state.editWarehouse.name} onChange={(event) => this.onChangeWarehouseField("name", event.target.value)}/> */}
              <div className={`try ${this.state.edit.warehouseName ? "try-error" : " "}`}>
                  <img className="no" src={Error} alt="error alert"/>
                  <p className="lol">This field is required</p>
              </div>
            </div>
            <div className="editwarehouse__details-mid">
              <h1 className="editwarehouse__details-address">Street Address</h1>
              <label className="editwarehouse__details-label" htmlFor="address"/>
              <input className="editwarehouse__details-address-input" name="address" defaultValue={this.state.editWarehouse.address} onChange={this.onSaveEdits}/>
              {/* <input className="editwarehouse__details-address-input" name="address" defaultValue={this.state.editWarehouse.address} onChange={(event) => this.onChangeWarehouseField("address", event.target.value)}/> */}
              <div className={`try ${this.state.edit.address ? "try-error" : " "}`}>
                  <img className="no" src={Error} alt="error alert"/>
                  <p className="lol">This field is required</p>
              </div>
            </div>
            <div className="editwarehouse__details-mid">
              <h1 className="editwarehouse__details-city">City</h1>
              <label className="editwarehouse__details-label" htmlFor="city"/>
              <input className="editwarehouse__details-city-input" name="city" defaultValue={this.state.editWarehouse.city} onChange={this.onSaveEdits}/>
              {/* <input className="editwarehouse__details-city-input" name="city" defaultValue={this.state.editWarehouse.city} onChange={(event) => this.onChangeWarehouseField("city", event.target.value)}/> */}
              <div className={`try ${this.state.edit.city ? "try-error" : " "}`}>
                  <img className="no" src={Error} alt="error alert"/>
                  <p className="lol">This field is required</p>
              </div>
            </div>
            <div className="editwarehouse__details-bottom">
              <h1 className="editwarehouse__details-country">Country</h1>
              <label className="editwarehouse__details-label" htmlFor="country"/>
              <input className={`editwarehouse__details-country-input ${this.state.errorMessage ? "editwarehouse__details-country-error" : " "}`} name="country" defaultValue={this.state.editWarehouse.country} onChange={this.onSaveEdits}/>
              {/* <input className={`editwarehouse__details-country-input ${this.state.errorMessage ? "editwarehouse__details-country-error" : " "}`} name="country" defaultValue={this.state.editWarehouse.country} onChange={(event) => this.onChangeWarehouseField("country", event.target.value)}/> */}
              <div className={`try ${this.state.edit.country ? "try-error" : " "}`}>
                  <img className="no" src={Error} alt="error alert"/>
                  <p className="lol">This field is required</p>
              </div>
            </div>
          </div>
          <div className="editwarehouse__contact-details">
              <h1 className="editwarehouse__contact-details-title">Contact Details</h1>
              <div className="editwarehouse__contact-top">
                <h1 className="editwarehouse__contact-name">Contact Name</h1>
                <label className="editwarehouse__contact-label" htmlFor="contactName"/>
                <input className="editwarehouse__contact-name-input" name="contactName" defaultValue={this.state.contactInfo.name} onChange={this.onSaveEdits}/>
                {/* <input className="editwarehouse__contact-name-input" name="contactName" defaultValue={this.state.contactInfo.name} onChange={(event) => this.onChangeContactField("name", event.target.value)}/> */}
                <div className={`try ${this.state.edit.contactName ? "try-error" : " "}`}>
                  <img className="no" src={Error} alt="error alert"/>
                  <p className="lol">This field is required</p>
                </div>
              </div>
              <div className="editwarehouse__contact-mid">
                <h1 className="editwarehouse__contact-position">Position</h1>
                <label className="editwarehouse__contact-label" htmlFor="position"/>
                <input className="editwarehouse__contact-position-input" name="position" defaultValue={this.state.contactInfo.position} onChange={this.onSaveEdits}/>
                {/* <input className="editwarehouse__contact-position-input" name="position" defaultValue={this.state.contactInfo.position} onChange={(event) => this.onChangeContactField("position", event.target.value)}/> */}
                <div className={`try ${this.state.edit.position ? "try-error" : " "}`}>
                  <img className="no" src={Error} alt="error alert"/>
                  <p className="lol">This field is required</p>
                </div>
              </div>
              <div className="editwarehouse__contact-mid">
                <h1 className="editwarehouse__contact-number">Phone Number</h1>
                <label className="editwarehouse__contact-label" htmlFor="number"/>
                <input className="editwarehouse__contact-number-input" name="number" id="phone-number" defaultValue={this.state.contactInfo.phone} onChange={this.onSaveEdits} onKeyDown={this.phoneNumberFormatter()}/>
                {/* <input className="editwarehouse__contact-number-input" name="number" defaultValue={this.state.contactInfo.phone} onChange={(event) => this.onChangeContactField("phone", event.target.value)}/> */}
                <div className={`try ${this.state.edit.number ? "try-error" : " "}`}>
                  <img className="no" src={Error} alt="error alert"/>
                  <p className="lol">This field is required</p>
                </div>
              </div>
              <div className="editwarehouse__contact-bottom">
                <h1 className="editwarehouse__contact-email">Email</h1>
                <label className="editwarehouse__contact-label" htmlFor="email"/>
                <input className="editwarehouse__contact-email-input" name="email" defaultValue={this.state.contactInfo.email} onChange={this.onSaveEdits}/>
                {/* <input className="editwarehouse__contact-email-input" name="email" defaultValue={this.state.contactInfo.email} onChange={(event) => this.onChangeContactField("email", event.target.value)}/> */}
                <div className={`try ${this.state.edit.email ? "try-error" : " "}`}>
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

// onSaveEdits = (e, field) => {
//   e.preventDefault();
//   this.setState({editWarehouse:{
//       ...this.state.editWarehouse, [e.target.name]:e.target.value
//   }})
//   if(e.target.warehouseName.value === ""){
//       this.setState({
//           edit:{...this.state.edit, [e.target.name]: false}
//       })
//   } else {
//       this.setState({
//           edit:{...this.state.edit, [e.target.name]: true}
//       })
//   }
// }