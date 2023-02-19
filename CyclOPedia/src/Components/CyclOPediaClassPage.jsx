import React from "react";
import { getRandomUser } from "../Utility/API";
import Instructor from "./Instructor";

class CyclOPediaClassPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse(localStorage.getItem("cyclopediaState")) || {
            instructor: {},
            studentList: [],
            studentCount: 0,
            hideInstructor: false,
            inputName: "",
            inputFeedback: "",
        };
    }

    componentDidMount = async () => {
        console.log("Component Did Mount");
        if (JSON.parse(localStorage.getItem("cyclopediaState"))) {

        } else {
            const response = await getRandomUser();
            this.setState((prevState) => {
                return {
                    instructor: {
                        name: response.data.first_name + " " + response.data.last_name,
                        email: response.data.email,
                        phone: response.data.phone_number,
                    },
                };
            });
        }
    }

    componentDidUpdate = async (previousProps, previousState) => {
        localStorage.setItem("cyclopediaState", JSON.stringify(this.state));
        console.log("Component Did Update");
        console.log("Old State - " + previousState.studentCount);
        console.log("New State - " + this.state.studentCount);
        if (previousState.studentCount < this.state.studentCount) {
            const response = await getRandomUser();
            this.setState((prevState) => {
                return {
                    studentList: [
                        ...prevState.studentList,
                        { name: response.data.first_name + " " + response.data.last_name }
                    ]
                }
            });
        } else if (previousState.studentCount > this.state.studentCount) {
            this.setState((prevState) => {
                return {
                    studentList: []
                }
            })
        }
    }

    componentWillUnmount = () => {
        console.log("Component Will Unmount");
    }

    handleToggleInstructor = () => {
        this.setState((prevState) => {
            return {
                hideInstructor: !prevState.hideInstructor
            }
        })
    }

    handleAddStudent = () => {
        this.setState((prevState) => {
            return {
                studentCount: prevState.studentCount + 1
            }
        })
    }

    handleRemoveAllStudents = () => {
        this.setState((prevState) => {
            return {
                studentCount: 0
            }
        })
    }

    render() {
        console.log("Component Render");
        return (
            <div>
                <div className="m-3">
                    <span className="h4 text-success">Instructor &nbsp;
                        <i
                            className={` bi ${this.state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"} btn btn-success btn-sm`}
                            onClick={this.handleToggleInstructor}
                        >
                        </i>
                    </span><br />
                    {!this.state.hideInstructor && this.state.instructor ? (<Instructor instructor={this.state.instructor} />) : null}
                </div>

                <div className="m-3">
                    <span className="h4 text-success">Feedback</span><br />
                    <input type="text" className="form-control-sm" value={this.state.inputName} placeholder="Name..."
                        onChange={(e) => {
                            this.setState({ inputName: e.target.value });
                        }}
                    />&nbsp;
                    Value: {this.state.inputName}
                    <br />
                    <textarea className="form-control-sm mt-1 w-25" value={this.state.inputFeedback} placeholder="Feedback..."
                        onChange={(e) => {
                            this.setState({ inputFeedback: e.target.value });
                        }}
                    />&nbsp;
                    Value: {this.state.inputFeedback}
                </div>

                <div className="m-3">
                    <span className="h4 text-success">Students</span>
                    <div>Student Count: {this.state.studentCount}</div>
                    <button className="btn btn-success btn-sm" onClick={this.handleAddStudent}>Add Student</button>&nbsp;
                    <button className="btn btn-danger btn-sm" onClick={this.handleRemoveAllStudents}>Remove All Students</button>
                    {this.state.studentList.map((student, index) => {
                        return (
                            <div key={index}> {student.name} </div>
                        );
                    })}
                </div>
            </div >
        )
    }
}

export default CyclOPediaClassPage;