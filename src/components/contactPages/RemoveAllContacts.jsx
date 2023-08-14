//This component will be used  to delete all the contacts from the app
const RemoveAllContacts = (props) => {
  return (
    <div>
      <button
        className="btn btn-danger form-control"
        onClick={() => props.handleRemoveAll()}
      >
        Remove All
      </button>
    </div>
  );
};
export default RemoveAllContacts;
