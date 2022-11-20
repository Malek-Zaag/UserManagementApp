import { useRef } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import Config from "./config.js";

export const Login = () => {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const login = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      }),
    };
    fetch(`${Config.API}/api/login-admin`, requestOptions)
      .then((response) => {
        if (response.status === 200) {
          setTimeout(() => {}, 1000);
          response.json().then((res) => {
            localStorage.setItem("id", res.id);
            localStorage.setItem("name", res.name);
            navigate("/");
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    redirect("/");
  };
  return (
    <div>
      <div
        className="p-5 mt-5 fs-2 fw-semibold "
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label className="">Username</label>
        <input className="my-2" ref={usernameRef}></input>
        <label className="">Password</label>
        <input className="mt-2" type="password" ref={passwordRef}></input>
      </div>
      <div className="text-center">
        <button onClick={login} type="button" className="btn btn-primary">
          Login
        </button>
        <span className="mx-3">
          <Link to="/signup">Singup for free ?</Link>
        </span>
      </div>
    </div>
  );
};
