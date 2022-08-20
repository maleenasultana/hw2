import React, { useContext, useState } from "react";
import "./signin.css";
import { Context } from "../../store/Context";
import { validateEmail } from "../../utill";

export const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const { state, dispatch } = useContext(Context);

  const handleSignIn = (e) => {
    e.preventDefault(false);
    setError("");
    if (!validateEmail(user.email)) {
      setError("Invalid email");
      return;
    }
    if (!(user.password.length && user.email.length)) {
      setError("email and password required");
      return;
    }
    dispatch({
      type: "LOGIN"
    });
  };

  return (
    <div className="signup-container">
      <div className="signup-container-inside">
        <img
          src="https://aadcdn.msauth.net/shared/1.0/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg"
          alt=""
        />
        <div>Sign In</div>
        <form action="" onSubmit={handleSignIn}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <span>
            {" "}
            New User ? <a href="/signup">Create account</a>
          </span>
          <button onClick={handleSignIn}>Continue</button>
          <span className="error">{error}</span>
          {console.log(state.isAuthenticated)}
          <span style={{ color: "green" }}>
            {state.isAuthenticated && "Logged in successfully"}
          </span>
        </form>
      </div>
    </div>
  );
};
