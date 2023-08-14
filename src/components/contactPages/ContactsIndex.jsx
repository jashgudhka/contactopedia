//This will act as a parent for all the child components.
//This component will gather all the components and then pass on to the main index file.
import React from "react";
import AddRandom from "./AddRandom";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import RemoveAllContacts from "./RemoveAllContacts";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
export default class ContactsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "John Doe",
          phone: "1234567894",
          email: "johndoe@gmail.com",
          isFavorite: false,
        },
        {
          id: 2,
          name: "David Bombal",
          phone: "9743585653",
          email: "davidbombal@gmail.com",
          isFavorite: true,
        },
        {
          id: 3,
          name: "Peter Parker",
          phone: "84865421086",
          email: "peterparker@gmail.com",
          isFavorite: true,
        },
      ],
      selectedContact: undefined,
      isUpdating: false,
    };
  }
  handleAddContact = (updatedContact) => {
    if (updatedContact.name == "") {
      return { status: "Failure", msg: "Please enter a valid name." };
    } else if (updatedContact.phone == "") {
      return {
        status: "Failure!",
        msg: "Please enter a valid number.",
      };
    }
    const duplicateRecord = this.state.contactList.filter((x) => {
      if (x.name == updatedContact.name && x.phone == updatedContact.phone) {
        return true;
      }
    });
    if (duplicateRecord.length > 0) {
      return {
        status: "Failure!",
        msg: "Please enter a unique input.",
      };
    } else {
      const newFinalContact = {
        ...updatedContact,
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        isFavorite: false,
      };
      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.concat([newFinalContact]),
        };
      });
      return { status: "Success", msg: "Contact was added successfully" };
    }
  };
  handleToggleFavorite = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.id == contact.id) {
            return { ...obj, isFavorite: !obj.isFavorite };
          }
          return obj;
        }),
      };
    });
  };
  handleDeleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.filter((obj) => {
          return obj.id !== contactId;
        }),
      };
    });
  };
  handleAddRandomContact = (newContact) => {
    const newFinalContact = {
      ...newContact,
      id: this.state.contactList[this.state.contactList.length - 1].id + 1,
      isFavorite: false,
    };
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.concat([newFinalContact]),
      };
    });
  };
  handleRemoveAll = () => {
    this.setState((prevState) => {
      return {
        contactList: [],
      };
    });
  };

  handleSelectContact = (contact) => {
    console.log(contact);
    this.setState((prevState) => {
      return {
        selectedContact: contact,
        isUpdating: true,
      };
    });
  };
  handleUpdateContact = (updatedContact) => {
    console.log(updatedContact);
    if (updatedContact.name == "") {
      return { status: "Failure", msg: "Please enter a valid name." };
    } else if (updatedContact.phone == "") {
      return {
        status: "Failure!",
        msg: "Please enter a valid number.",
      };
    }

    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.id == updatedContact.id) {
            return {
              ...obj,
              name: updatedContact.name,
              email: updatedContact.email,
              phone: updatedContact.phone,
            };
          }
          return obj;
        }),
        isUpdating: false,
        selectedContact: undefined,
      };
    });
    return { status: "Success", msg: "Contact was updated successfully" };
  };

  handleCancelUpdateContact = (contact) => {
    console.log(contact);
    this.setState((prevState) => {
      return {
        selectedContact: undefined,
        isUpdating: false,
      };
    });
  };
  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2 row">
              <AddRandom handleAddRandomContact={this.handleAddRandomContact} />
            </div>
            <div className="col-4 row">
              <RemoveAllContacts handleRemoveAll={this.handleRemoveAll} />
            </div>
            <div className="col-8 offset-2 row">
              <div className="row py-2">
                <AddContact
                  handleAddContact={this.handleAddContact}
                  selectedContact={this.state.selectedContact}
                  isUpdating={this.state.isUpdating}
                  cancelUpdate={this.handleCancelUpdateContact}
                  handleUpdateContact={this.handleUpdateContact}
                />
              </div>

              <div className="row py-2">
                <FavoriteContacts
                  contacts={this.state.contactList.filter(
                    (a) => a.isFavorite === true
                  )}
                  favoriteClick={this.handleToggleFavorite}
                  deleteContact={this.handleDeleteContact}
                  updateClick={this.handleSelectContact}
                />
              </div>
              <div className="row py-2">
                <GeneralContacts
                  contacts={this.state.contactList.filter(
                    (a) => a.isFavorite === false
                  )}
                  favoriteClick={this.handleToggleFavorite}
                  deleteContact={this.handleDeleteContact}
                  updateClick={this.handleSelectContact}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
