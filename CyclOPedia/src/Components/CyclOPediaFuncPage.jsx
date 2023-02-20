import React, { useEffect, useId, useRef, useState } from "react";
import { getRandomUser } from "../Utility/API";
import InstructorFunc from "./InstructorFunc";

const CyclOPediaFuncPage = () => {

    const [state, setState] = useState(() => {
        return {
            instructor: {},
            studentList: [],
            studentCount: 0,
            hideInstructor: false,
        }
    })

    const [inputName, setInputName] = useState(() => {
        return "";
    })

    const [inputFeedback, setInputFeedback] = useState(() => {
        return "";
    })

    const totalRender = useRef(0);
    const prevStudentCount = useRef(0);
    const inputNameRef = useRef(0);
    
    const id = useId();

    useEffect(() => {
        console.log("This will be called on every Render");
        totalRender.current = totalRender.current + 1;
        console.log("Render " + totalRender.current);
    })

    useEffect(() => {
        inputNameRef.current.focus();
    }, [])

    useEffect(() => {
        const getUser = async () => {
            const response = await getRandomUser();
            setState((prevState) => {
                return {
                    ...prevState,
                    instructor: {
                        name: response.data.first_name + " " + response.data.last_name,
                        email: response.data.email,
                        phone: response.data.phone_number,
                    },
                };
            });
        }
        if (!state.hideInstructor) {
            getUser();
        }
    }, [state.hideInstructor])

    useEffect(() => {
        const getUser = async () => {
            const response = await getRandomUser();
            setState((prevState) => {
                return {
                    ...prevState,
                    studentList: prevState.studentList.concat({
                        name: response.data.first_name + " " + response.data.last_name
                    })
                };
            });
        }
        if (prevStudentCount.current < state.studentCount) {
            getUser();
        }
        else if (prevStudentCount.current > state.studentCount) {
            setState((prevState) => {
                return {
                    ...prevState,
                    studentList: []
                }
            })
        }
    }, [state.studentCount])

    useEffect(() => {
        prevStudentCount.current = state.studentCount;
    }, [state.studentCount])

    useEffect(() => {
        console.log("This will be called on whenever the value changes");
    }, [inputName, inputFeedback])

    useEffect(() => {
        console.log("Unmount");
        return () => {
            console.log("This will be called on when component will be UNMOUNTED");
        }
    }, [])

    const handleToggleInstructor = () => {
        setState((prevState) => {
            return {
                ...prevState,
                hideInstructor: !prevState.hideInstructor
            }
        })
    }

    const handleAddStudent = () => {
        setState((prevState) => {
            return {
                ...prevState,
                studentCount: prevState.studentCount + 1
            }
        })
    }

    const handleRemoveAllStudents = () => {
        setState((prevState) => {
            return {
                ...prevState,
                studentCount: 0
            }
        })
    }

    return (
        <div>
            <div className="m-3">
                <span className="h4 text-success">Instructor &nbsp;
                    <i
                        className={` bi ${state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"} btn btn-success btn-sm`}
                        onClick={handleToggleInstructor}
                    >
                    </i>
                </span><br />
                {!state.hideInstructor && state.instructor ? (<InstructorFunc instructor={state.instructor} />) : null}
            </div>

            <div className="m-3">Total Render: {totalRender.current}</div>

            <div className="m-3">
                <span className="h4 text-success">Feedback</span><br />
                <input type="text" className="form-control-sm" placeholder="Name..."
                    value={inputName} ref={inputNameRef} id={`${id}-inputName`}
                    onChange={(e) => { setInputName(e.target.value); }}
                />&nbsp;
                <label htmlFor={`${id}-inputName`}> Name Value : </label> {inputName}
                <br />
                <textarea className="form-control-sm mt-1 w-25" placeholder="Feedback..."
                    value={inputFeedback} id={`${id}-inputFeedback`}
                    onChange={(e) => { setInputFeedback(e.target.value); }}
                />&nbsp;
                <label htmlFor={`${id}-inputFeedback`}>Feedback Value : </label> {inputFeedback}
            </div>

            <div className="m-3">
                <span className="h4 text-success">Students</span>
                <div>Student Count: {state.studentCount}</div>
                <button className="btn btn-success btn-sm" onClick={handleAddStudent}>Add Student</button>&nbsp;
                <button className="btn btn-danger btn-sm" onClick={handleRemoveAllStudents}>Remove All Students</button>
                {state.studentList.map((student, index) => {
                    return (
                        <div key={index}> {student.name} </div>
                    );
                })}
            </div>
        </div >
    )
}

export default CyclOPediaFuncPage;