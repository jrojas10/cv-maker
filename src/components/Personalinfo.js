//import { Component } from "react";

function Personalinfo() {


    // const {}
    return (
        <div>
            <h2>Personal Information</h2>
            <form >
                <div className="col col-md-2 mb-3">
                    <label className="form-label">First Name </label>
                    <input className="form-control" type="text"></input>

                    <label className="form-label">Last Name </label>
                    <input className="form-control" type="text"></input>

                    <label className="form-label">Phone Number</label>
                    <input className="form-control" type="number"></input>

                    <label className="form-label">Email</label>
                    <input className="form-control" type="email"></input>

                    <label className="form-label">Address </label>
                    <input className="form-control" type="text"></input>

                    <label className="form-label">State </label>
                    <input className="form-control" type="text"></input>
                </div>

            </form>

        </div>
    );

}


export default Personalinfo