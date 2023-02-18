import { getRandomUser } from "../../Utility/API";

const GetRandomContact = async (props) => {
    const user = await getRandomUser();
    return props.addRandomContact({
        name: user.data.first_name + " " + user.data.last_name,
        email: user.data.email,
        phone: user.data.phone_number
    });
}

const AddRandomContact = (props) => {
    return (
        <div>
            <button className="btn btn-success form-control" onClick={() => GetRandomContact(props)}>
                Add Random Contact
            </button>
        </div>
    )
}

export default AddRandomContact;