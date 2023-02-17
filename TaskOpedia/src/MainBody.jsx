import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";

function MainBody() {
    const technology = "React JS";
    return (
        <div style={{ minHeight: "70vh" }}>
            <p>Learn {technology} basics using TaskOPedia</p>
            <ul>
                <li>Basic Foundation</li>
                <li>Functional and Class Components</li>
            </ul>
            <div className="container row">Students Enrolled</div>
            <Student name="Satheesh Kumar" experience={2} headerImage="https://api.lorem.space/image/face?w=150&h=150">
                <StudentReview />
            </Student>
            <Student name="Deepak Kumar" experience={1.5} headerImage="https://api.lorem.space/image/face?w=150&h=151">
                <StudentReview />
            </Student>
            <Student name="Dhod Raj" experience={1} headerImage="https://api.lorem.space/image/face?w=150&h=152" />
        </div>
    );
}

export default MainBody;