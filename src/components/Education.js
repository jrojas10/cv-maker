function Education() {
    return (

        <div>
            <hr />
            <h2>Education</h2>
            <form >
                <div className="col col-md-2 mb-3">
                    <label className="form-label">School </label>
                    <input className="form-control" type="text"></input>

                    <label className="form-label">Major </label>
                    <input className="form-control" type="text"></input>

                    <label className="form-label">Graduation Date</label>
                    <input className="form-control" type="date"></input>

                </div>
            </form>
        </div>
    )

}
export default Education;