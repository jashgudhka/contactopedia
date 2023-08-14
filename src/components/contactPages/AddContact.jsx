//This component will be used to save the contact which user enters.

import React from "react";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorMessage: undefined, successMessage: undefined };
  }
  handleAddContactFormSubmit = (a) => {
    a.preventDefault();
    const name = a.target.elements.cName.value.trim();
    const phone = a.target.elements.cPhone.value.trim();
    const email = a.target.elements.cEmail.value.trim();
    const id = a.target.elements.cId.value.trim();
    let response = undefined;
    if (this.props.isUpdating) {
      response = this.props.handleUpdateContact({
        id: id,
        name: name,
        phone: phone,
        email: email,
      });
    } else {
      response = this.props.handleAddContact({
        name: name,
        email: email,
        phone: phone,
      });
    }

    if (response.status === "Success") {
      this.setState({ errorMessage: undefined, successMessage: response.msg });
      document.querySelector(".contact-form").reset();
    } else {
      this.setState({ errorMessage: response.msg, successMessage: undefined });
    }
  };
  handleCancel = () => {
    this.props.cancelUpdate();
  };
  render() {
    return (
      <div
        className="col-12 text-white p-2"
        style={{ borderRadius: "15px", border: "1px solid #555" }}
      >
        <form
          onSubmit={this.handleAddContactFormSubmit}
          className="contact-form"
        >
          <input
            hidden
            name="cId"
            defaultValue={
              this.props.isUpdating ? this.props.selectedContact.id : ""
            }
          />
          <div className="row p-2">
            <div className="col-12 text-white-50">
              {this.props.isUpdating ? "Update Contact" : "Add a new contact"}
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Name..."
                name="cName"
                defaultValue={
                  this.props.isUpdating ? this.props.selectedContact.name : ""
                }
              />
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Phone..."
                name="cPhone"
                defaultValue={
                  this.props.isUpdating ? this.props.selectedContact.phone : ""
                }
              />
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="E-Mail..."
                name="cEmail"
                defaultValue={
                  this.props.isUpdating ? this.props.selectedContact.email : ""
                }
              />
            </div>
            {this.state.errorMessage == undefined ? (
              <div></div>
            ) : (
              <div className="col-12 text-center text-danger">
                {this.state.errorMessage}
              </div>
            )}
            {this.state.successMessage == undefined ? (
              <div></div>
            ) : (
              <div className="col-12 text-center text-success">
                {this.state.successMessage}
              </div>
            )}
            <div
              className={`"col-12 p-1" ${
                this.props.isUpdating
                  ? "col-md-4 offset-md-2"
                  : "col-md-6 offset-md-3"
              }`}
            >
              <button className="btn btn-primary btn-sm form-control">
                {this.props.isUpdating ? "Update" : "Create"}
              </button>
            </div>
            <div className="col-12 col-md-4">
              {this.props.isUpdating && (
                <button
                  className="btn btn-danger btn-sm form-control"
                  onClick={this.handleCancel}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default AddContact;
