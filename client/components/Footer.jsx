import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="footer">
      {/* <!-- This should be `0 items left` by default --> */}
      <span className="todo-count"><strong>{props.tasks.length}</strong> item{(props.tasks.length !== 1) && 's'} left</span>
     
      {/* <!-- Remove this if you don't implement routing --> */}
      <ul className="filters">
        <li>
          <NavLink exact to="/" activeClassName="selected">
            All
          </NavLink>
        </li>
        <li>
        <NavLink to="/active" activeClassName="selected">
          active
        </NavLink>
        </li>
        <li>
        <NavLink to="/completed" activeClassName="selected" >
          Completed
        </NavLink>
        </li>
      </ul>
      {/* <!-- Hidden if no completed items are left ↓ --> */}
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

function ms2p(globalState) {
  return {
      tasks: globalState.tasks
  }
}

export default connect(ms2p)(Footer)

