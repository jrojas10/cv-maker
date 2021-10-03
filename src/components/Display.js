
function Display(props) {

    return (
        <div>
            <h1>My Resume</h1>
            <h3>First Name :{props.fname}</h3>
            <h3>info : {props.info}</h3>
        </div>
    )
}
//use this.props when using the class extends

export default Display;