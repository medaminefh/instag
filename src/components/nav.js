import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";
import { toast } from "materialize-css";

export const Nav = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  const renderList = state ? (
    <>
      <li>
        <Link className=" black-text text-darken-2" to="/profile">
          Profile
        </Link>
      </li>
      <li>
        <Link className=" black-text text-darken-2" to="/mysub">
          My Sub
        </Link>
      </li>
      ,
      <li>
        <Link className=" black-text text-darken-2" to="/create">
          Create A Post
        </Link>
      </li>
      ,
      <li>
        <button
          onClick={(e) => {
            localStorage.clear();
            toast({
              html: "<strong>You Logged Out </strong>",
              displayLength: 2000,
              classes: "blue",
            });
            dispatch({ type: "CLEAR" });
            history.push("/login");
          }}
          className="red darken-1 btn waves-effect waves-light"
        >
          Logout
        </button>
      </li>
    </>
  ) : (
    <>
      <li>
        <Link className=" black-text text-darken-2" to="/login">
          Login
        </Link>
      </li>
      ,
      <li>
        <Link className=" black-text text-darken-2" to="/signup">
          Signup
        </Link>
      </li>
    </>
  );

  return (
    <nav>
      <div className="nav-wrapper white">
        <Link
          to={state ? "/" : "/login"}
          className="brand-logo  black-text text-darken-2 left"
        >
          Instagram
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderList}
        </ul>
      </div>
    </nav>
  );
};
