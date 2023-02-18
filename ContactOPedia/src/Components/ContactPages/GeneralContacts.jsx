import Contact from "./Contact";

const GeneralContacts = (props) => {
    return (
        <div className="col-12 py-2" style={{ borderRadius: "10px", backgroundColor: "#323637" }}>
            <div className="text-center text-white-50">Other Contacts</div>
            <div className="p-2">
                {props.contacts.map((obj, index) => (
                    <Contact contact={obj} key={index}
                        favoriteClick={props.favoriteClick}
                        deleteContact={props.deleteContact}
                        editContact={props.editContact}
                    />
                ))}
            </div>
        </div>
    )
}

export default GeneralContacts;