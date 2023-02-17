import React from "react";

class Student extends React.Component {
    render() {
        return (
            <div className="col-4 p-1">
                <div className="row border">
                    <div className="col-2">
                        <img src={this.props.headerImage} className="w-100 py-2"></img>
                    </div>
                    <div className="col-8 mt-2">
                        {this.props.name}<br />
                        <p>Coding Experience {this.props.experience} Year(s)</p>
                    </div>
                    <div className="col-2">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Student;