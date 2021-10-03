import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const SignUp = () => {
  const history = useHistory();
  const b = useRef();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const SERVER =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_LOCAL_SERVER
      : process.env.REACT_APP_ONLINE_SERVER;
  const PostData = () => {
    b.current.disabled = "true";
    fetch(SERVER + "/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
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
          M.toast({
            html: data.error,
            displayLength: 1500,
            classes: "toast-err",
          });
          b.current.removeAttribute("disabled");
          return;
        } else {
          M.toast({
            html: data.message,
            displayLength: 4500,
            classes: "toast-success",
          });
          history.push("/login");
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
      });
  };
  return (
    <div className="myCard">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            PostData();
          }}
        >
          <input
            required
            autoComplete="off"
            className="login-input"
            type="text"
            placeholder="Username"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            autoComplete="off"
            className="login-input"
            value={email}
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            autoComplete="off"
            value={password}
            className="login-input"
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            id="b"
            ref={b}
            className=" blue darken-1 btn waves-effect waves-light"
          >
            Login
          </button>
          <h5>
            <Link to="login" style={{ color: "#222" }}>
              Already Have An Account ?
            </Link>
          </h5>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
