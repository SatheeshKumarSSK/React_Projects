const MovieList = (props) => {
    return (
        <div>
            {props.movies.map((movie, index) => {
                return <div key={index}>{movie}</div>
            })}
        </div>
    )
}

export default MovieList;