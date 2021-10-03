import React, { useState, useContext, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";
import { UserContext } from "../App";

const SignIn = () => {
  const b = useRef();
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const SERVER =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_LOCAL_SERVER
      : process.env.REACT_APP_ONLINE_SERVER;
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const PostData = () => {
    b.current.disabled = "true";
    fetch(SERVER + "/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          b.current.removeAttribute("disabled");
          M.toast({
            html: "Invalid Email",
            displayLength: 1500,
            classes: "toast-err",
          });
          return;
        }
        if (data.error) {
          b.current.removeAttribute("disabled");
          M.toast({
            html: data.error,
            displayLength: 1500,
            classes: "toast-err",
          });
          return;
        } else {
          localStorage.setItem("jwt", data.token);
          dispatch({ type: "USER", payload: data.user });
          localStorage.setItem("user", JSON.stringify(data.user));
          M.toast({
            html: "Signin Successfully",
            displayLength: 4500,
            classes: "toast-success",
          });
          history.push("/");
          return;
        }
      })
      .catch((err) => {
        M.toast({
          html: "<strong>Please Try Later</strong>",
          displayLength: 3000,
          classes: "toast-err",
        });
        console.log(`error : ${err}`);
        return;
      });
  };
  return (
    <div className="myCard">
      <div className="card auth-card">
        <h2>Instagram</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            PostData();
          }}
        >
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            type="email"
            placeholder="Email"
          />
          <input
            required
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            type="password"
            placeholder="Password"
          />
          <button
            ref={b}
            className=" blue darken-1 btn waves-effect waves-light"
          >
            Login
          </button>
        </form>
        <h5>
          <Link to="signup" style={{ color: "#122" }}>
            Don't Have An Account ?
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default SignIn;
