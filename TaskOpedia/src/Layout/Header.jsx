import "../CSS/style.css";
import logo from "../images/React.png"

function MainHeader() {
    return (
        <div className="pt-2 py-1 heading">
            <img src={logo} style={{ height: "35px", verticalAlign: "top" }}></img>
            <span className="h2"> TaskOPedia</span>
        </div>
    );
}

const css = {
    color: "purple",
    backgroundColor: "lightgray"
}

function SubHeader() {
    return <h4 style={css} className="text-center">Learn React by building some real world applications!</h4>;
}

const Header = () => {
    return (
        <div>
            <MainHeader></MainHeader>
            <SubHeader></SubHeader>
        </div>
    );
}

export default Header;