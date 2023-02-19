import React from "react";

class Instructor extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        console.log("Instructor - Did Mount");
    }

    componentDidUpdate = () => {
        console.log("Instructor - Did Update");
    }

    componentWillUnmount = () => {
        console.log("Instructor - Will Unmount");
    }

    render() {
        console.log("Instructor - Render");
        return (
            <div>
                Name: {this.props.instructor.name}<br />
                Email : {this.props.instructor.email}<br />
                Phone : {this.props.instructor.phone}<br />
            </div>
        )
    }
}

export default Instructor;