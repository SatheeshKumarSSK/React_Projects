const RemoveAllContact = (props) => {
    return (
        <div>
            <button className="btn btn-danger form-control" onClick={() => props.removeAllContact()}>
                Remove All Contact
            </button>
        </div>
    )
}

export default RemoveAllContact;