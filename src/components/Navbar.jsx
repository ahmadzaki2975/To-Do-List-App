import { FaClipboardCheck } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light ps-4 py-3">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 ms-3">
            <FaClipboardCheck className="nav-logo"/>
            My To Do Lists
          </span>
        </div>
      </nav>
  );
}

export default Navbar;