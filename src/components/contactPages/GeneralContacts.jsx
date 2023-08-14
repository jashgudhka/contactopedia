//This component will be used to display contacts in the app
import Contact from "./Contact";

const GeneralContacts = (props) => {
  return (
    <div
      className="col-12 py-2"
      style={{
        borderRadius: "15px",
        border: "1px solid #999",
        backgroundColor: "#323637",
      }}
    >
      <div className="text-center text-white-50">General Contacts</div>
      <div className="p-2">
        {props.contacts.map((contact, index) => (
          <Contact
            contact={contact}
            key={index}
            favoriteClick={props.favoriteClick}
            deleteContact={props.deleteContact}
            updateClick={props.updateClick}
          ></Contact>
        ))}
      </div>
    </div>
  );
};
export default GeneralContacts;
