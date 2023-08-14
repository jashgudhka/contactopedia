//This will display individual contacts
const Contact = (props) => {
  return (
    <div
      className="row p-md-2 mb-2"
      style={{ borderRadius: "20px", border: "1px solid #777" }}
    >
      <div className="col-2 col-md-2 pt-2 pt-md-1">
        <img
          src={`https://ui-avatars.com/api/?name=${props.contact.name}&background=0D8ABC&color=fff&rounded=true&bold=true`}
          alt=""
          style={{ width: "50%" }}
        />
      </div>
      <div className="col-6 col-md-5 pt-0 text-warning">
        <span className="h4">{props.contact.name}</span>
        <br />
        <div className="text-white-50">
          {props.contact.email}
          <br />
          {props.contact.phone}
        </div>
      </div>
      <div className="col-2 col-md-2 pt-md-3">
        <button
          className={`btn btn-sm m-1 ${
            props.contact.isFavorite ? "btn-warning" : "btn-outline-warning"
          }`}
          onClick={() => props.favoriteClick(props.contact)}
        >
          <i className="bi bi-star" style={{ fontSize: "1rem" }}></i>
        </button>
      </div>
      <div className="col-2 col-md-3 pt-md-3">
        <button
          className="btn btn-primary m-1 btn-sm"
          onClick={() => props.updateClick(props.contact)}
        >
          <i className="bi bi-pencil-square" style={{ fontSize: "1rem" }}></i>
        </button>
        <button
          className="btn btn-danger m-1 btn-sm"
          onClick={() => props.deleteContact(props.contact.id)}
        >
          <i className="bi bi-trash3-fill" style={{ fontSize: "1rem" }}></i>
        </button>
      </div>
    </div>
  );
};
export default Contact;
