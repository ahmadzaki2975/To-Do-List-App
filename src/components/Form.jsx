import { nanoid } from "nanoid";
import { useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

function Form(props) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [priority, setPriority] = useState(0);

  return (
    <form className="px-5 py-4 w-100">
      <div className="mb-2">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Title
        </label>
        <input
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Insert title here"
          value={title}
          onChange = {(e) => setTitle(e.target.value)}
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
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Insert description here"
        />
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Priority: {priority}
        </label>
        <select 
        className="form-select" 
        id="inputGroupSelect01"
        onChange={(e) => {
          const selectedPriority = e.target.value;
          setPriority(selectedPriority);
        }}
        >
          <option value={0} >Choose priority</option>
          <option value={1} >High</option>
          <option value={2} >Medium</option>
          <option value={3} >Low</option>
        </select>
      </div>

      <button 
      type="button" 
      className="btn btn-primary"
      onClick={() => {
        const todo = {
          id: nanoid(),
          title: title,
          desc: desc,
          tags: "#any",
          priority: priority
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
