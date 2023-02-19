import React from "react";
import Header from "../../Layout/Header"
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";

class ContactIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contactList: [
                {
                    id: 1,
                    name: "Satheesh Kumar",
                    phone: "123-456-7890",
                    email: "satheesh@gmail.com",
                    isFavorite: true
                },
                {
                    id: 2,
                    name: "Deepak Kumar",
                    phone: "789-654-0123",
                    email: "Deepak@gmail.com",
                    isFavorite: true
                },
                {
                    id: 3,
                    name: "Dhod Raj",
                    phone: "456-987-2013",
                    email: "dhodraj@gmail.com",
                    isFavorite: false
                }
            ],
            selectedContact: "",
            isUpdating: false
        }
    }

    handleAddContact = (newContact) => {
        if (!newContact.name) {
            return { status: "failure", msg: "Please Enter a valid Name" }
        } else if (!newContact.phone) {
            return { status: "failure", msg: "Please Enter a Phone Number" }
        }

        const duplicateRecord = this.state.contactList.filter(x => x.name === newContact.name || x.phone === newContact.phone);

        if (duplicateRecord.length > 0) {
            return { status: "failure", msg: "Duplicate Record" };
        } else {
            const newFinalContact = {
                ...newContact,
                id: this.state.contactList[this.state.contactList.length - 1].id + 1,
                isFavorite: false
            }

            this.setState((prevState) => {
                return {
                    contactList: prevState.contactList.concat([newFinalContact])
                };
            });
            return { status: "success", msg: "Contact was added successfully" };
        }
    }

    handleUpdateContact = (updatedContact) => {
        if (!updatedContact.name) {
            return { status: "failure", msg: "Please Enter a valid Name" }
        } else if (!updatedContact.phone) {
            return { status: "failure", msg: "Please Enter a Phone Number" }
        }

        this.setState((prevState) => {
            return {
                contactList: prevState.contactList.map((obj) => {
                    if (obj.id === +updatedContact.id) {
                        return {
                            ...obj,
                            name: updatedContact.name,
                            email: updatedContact.email,
                            phone: updatedContact.phone
                        }
                    }
                    return obj;
                }),
                selectedContact: "",
                isUpdating: false
            };
        });
        return { status: "success", msg: "Contact was updated successfully" };
    }

    handleToggleFavorite = (contact) => {
        this.setState((prevState) => {
            return {
                contactList: prevState.contactList.map((obj) => {
                    if (obj.id === contact.id) {
                        return { ...obj, isFavorite: !obj.isFavorite };
                    }
                    return obj;
                })
            }
        })
    }

    handleDeleteContact = (contactId) => {
        this.setState((prevState) => {
            return {
                contactList: prevState.contactList.filter((obj) => {
                    return obj.id !== contactId;
                })
            }
        })
    }


    handleAddRandomContact = (newContact) => {
        const newFinalContact = {
            ...newContact,
            id: this.state.contactList[this.state.contactList.length - 1].id + 1,
            isFavorite: false
        }

        this.setState((prevState) => {
            return {
                contactList: prevState.contactList.concat([newFinalContact])
            };
        });
    }

    handleRemoveAllContact = () => {
        this.setState(() => {
            return { contactList: [] }
        });
    }

    handleEditContact = (contact) => {
        this.setState(() => {
            return {
                selectedContact: contact,
                isUpdating: true
            }
        })
    }

    handleCancelContact = () => {
        this.setState(() => {
            return {
                selectedContact: "",
                isUpdating: false
            }
        })
    }

    render() {
        return (
            <div style={{ color: "white" }}>
                <Header />
                <div className="container" style={{ minHeight: "85vh" }}>
                    <div className="row py-3">
                        <div className="col-4 offset-2 row">
                            <AddRandomContact addRandomContact={this.handleAddRandomContact} />
                        </div>
                        <div className="col-4 row">
                            <RemoveAllContact removeAllContact={this.handleRemoveAllContact} />
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <AddContact
                                    AddContact={this.handleAddContact}
                                    selectedContact={this.state.selectedContact}
                                    isUpdating={this.state.isUpdating}
                                    cancelContact={this.handleCancelContact}
                                    updateContact={this.handleUpdateContact}
                                />
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <FavoriteContacts
                                    contacts={this.state.contactList.filter(x => x.isFavorite === true)}
                                    favoriteClick={this.handleToggleFavorite}
                                    deleteContact={this.handleDeleteContact}
                                    editContact={this.handleEditContact}
                                />
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <GeneralContacts
                                    contacts={this.state.contactList.filter(x => x.isFavorite === false)}
                                    favoriteClick={this.handleToggleFavorite}
                                    deleteContact={this.handleDeleteContact}
                                    editContact={this.handleEditContact}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactIndex;