function Experience() {


    return (
        <div>
            <hr />
            <h2>Experience</h2>
            <form >
                <div className="col col-md-2 mb-3">
                    <label className="form-label">Company </label>
                    <input className="form-control" type="text"></input>

                    <label className="form-label">Position </label>
                    <input className="form-control" type="text"></input>

                    <label className="form-label">Time Start</label>
                    <input className="form-control" type="date"></input>

                    <label className="form-label">Time End</label>
                    <input className="form-control" type="date"></input>

                </div>
            </form>
        </div >
    )
}

export default Experience;