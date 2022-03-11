import { BsSortUpAlt } from "react-icons/bs";

function ListManage(props) {
  return (
    <div className="d-flex align-content-center justify-content-center my-3">
      <button 
      href="#"
      type="button"
      className="btn btn-dark mx-1"
      onClick={() => props.sortByPriorityHandler()}
      >
        <BsSortUpAlt className="fs-5 button-icon"/>
        Sort by priority
      </button>
      <button type="button" className="btn btn-dark mx-1">Another button here</button>
    </div>
  );
}

export default ListManage;