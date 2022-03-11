import { BsCheckSquareFill } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";

function Card(props) {
  
  function GetPriorityBadge() {
    const priority = props.priority;
    switch (priority) {
      case 1:
        return(
          <span className="badge bg-danger">High</span>
        );
      case 2:
        return (
          <span className="badge bg-warning">Medium</span>
        );
      case 3:
        return (
          <span className="badge bg-success">Low</span>
        );
    }
  }

  return (
      <div className="card  p-2" style={{ width: "18rem" }}>
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <div className="card-head">
            <h5 className="card-title">{props.title}</h5>
            <h6>Priority: <GetPriorityBadge priority={props.priority} /></h6>
          </div>
          <p className="card-text text-justify">
            {props.desc}
          </p>
          <h6>Tags</h6>
          <p>{props.tags}</p>
          <div className="d-flex justify-content-start">
            <a href="#" className="btn btn-secondary me-2">
              <BsPencilFill className="button-icon"/>
              Edit
            </a>
            <a 
            href="#" 
            className="btn btn-success ms-1" 
            onClick={() => props.deleteTodoHandler(props.id)}>
              <BsCheckSquareFill className="button-icon"/>
              Completed!
            </a>
          </div>
        </div>
      </div>
  );
}

export default Card;
