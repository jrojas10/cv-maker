import React, { } from "react";
import Display from "./Display";

class Personalinfo extends React.Component {
    //function Personalinfo() {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            phonenumber: '',
            email: '',
            address: '',
            state: ''
        };
    }
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }
    // import {useRef} from "react"
    //const firstNameInputRef = useRef();
    // const enteredFirstName = firstNameInputRef.current.value; add ref = {firstNameInputRef} attribute to input tag


    render() {
        const info = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            phonenumber: this.state.phonenumber,
            email: this.state.email,
            address: this.state.address,
            state: this.state.state
        }

        const input = [info.firstname, info.lastname, info.phonenumber, info.email, info.address, info.state];
        return (
            <div>
                <h2>Personal Information</h2>
                <form >
                    <div className="col col-md-2 mb-5">
                        <label className="form-label" >First Name </label>
                        <input className="form-control" name="firstname" type="text" value={this.state.firstname} onChange={this.handleChange} />

                        <label className="form-label">Last Name </label>
                        <input className="form-control" name="lastname" type="text" value={this.state.lastname} onChange={this.handleChange}></input>

                        <label className="form-label">Phone Number</label>
                        <input className="form-control" name="phonenumber" type="tel" value={this.state.phoneNumber} onChange={this.handleChange}></input>

                        <label className="form-label">Email</label>
                        <input className="form-control" name="email" type="email" value={this.state.email} onChange={this.handleChange}></input>

                        <label className="form-label">Address </label>
                        <input className="form-control" name='address' type="text" value={this.state.address} onChange={this.handleChange}></input>

                        <label className="form-label">State </label>
                        <input className="form-control" name='state' type="text" value={this.state.state} onChange={this.handleChange}></input>
                    </div>

                </form>

                {/* 'firstname' : {this.state.firstname},
                'lastname' : {this.state.lastname} */}


                <Display fname={this.state.firstname} info={input} />
                {/* <h3>First Name: {this.state.firstname}</h3>
                <h3>Last Name : {this.state.lastname}</h3>
                <h3>Phone Number: {this.state.phoneNumber}</h3>
                <h3>Email: {this.state.email}</h3>
                <h3>Address: {this.state.address}</h3>
                <h3>State: {this.state.state}</h3> */}

            </div>
        );
    }

}

export default Personalinfo