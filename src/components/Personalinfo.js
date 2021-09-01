//import { Component } from "react";

function Personalinfo() {

    function onSubmitInfo() {
        console.log("submitted")
    };
    // const {}
    return (
        <div>
            <form >
                <div className="col col-md-2 mb-3">
                    <label className="form-label">First Name </label>
                    <input className="form-control" type="text"></input>

                </div>

            </form>
            <button className="btn btn-primary" onClick={onSubmitInfo}>Submit</button>
        </div>
    );

}


export default Personalinfo