import { useState } from "react";

const AddMovie = (props) => {

    const [name, setName] = useState("");

    function submitAddMovieForm(event, props) {
        event.preventDefault();
        props.addMovie(name);
        setName("");
    }

    return (
        <form onSubmit={(e) => submitAddMovieForm(e, props)}>
            <div className="row">
                <div className="col-12 text-center py-1 h4 text-success">Add Movie</div>
                <div className="col-8 offset-1">
                    <input type="text" className="form-control"
                        name="movieName" value={name} placeholder="Movie Name..."
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="col-2">
                    <button className="btn btn-success form-control">Add</button>
                </div>
                <hr className="mt-3" />
            </div>
        </form>
    );
};
export default AddMovie;