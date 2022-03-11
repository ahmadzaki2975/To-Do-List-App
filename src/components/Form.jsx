import { nanoid } from "nanoid";
import { BsFillPlusSquareFill } from "react-icons/bs";

function Form(props) {
  return (
    <form className="px-5 py-4 w-100">
      <div className="mb-2">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Title
        </label>
        <input
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Insert title here"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          defaultValue={""}
          placeholder="Insert description here"
        />
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Priority
        </label>
        <select className="form-select" id="inputGroupSelect01">
          <option defaultValue>Choose priority</option>
          <option value={1} >High</option>
          <option value={2} >Medium</option>
          <option value={3} >Low</option>
        </select>
      </div>

      <button 
      type="submit" 
      className="btn btn-primary"
      onClick={() => {
        const todo = {
          id: nanoid(),
          title: "dummy title",
          desc: "dummy description lorem ipsum",
          tags: "#any",
          priority: 1
        }
        props.addNewTodoHandler(todo);
      }}
      >
        <BsFillPlusSquareFill className="button-icon"/>
        Add to list
      </button>
    </form>
  );
}

export default Form;
