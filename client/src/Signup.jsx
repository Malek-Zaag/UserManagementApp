import { useRef } from "react";
import { redirect, useNavigate } from "react-router-dom";
import Config from "./config.js";

export const Signup = () => {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();

  const signup = (e) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: usernameRef.current.value,
        firstname: firstnameRef.current.value,
        lastname: lastnameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    };
    e.preventDefault();
    fetch(`${Config.API || ""}/api/create-admin`, requestOptions)
      .then((response) => {
        if (response.status === 200) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    redirect("/login");
  };
  return (
    <div>
      <div className="fs-1 fw-semibold text-center py-3">SignUp</div>
      <hr></hr>
      <div
        className="text-left fw-semibold py-2 px-5 mx-5"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label className="fs-6">Username</label>
        <input className="my-2" ref={usernameRef}></input>
        <label className="fs-6">Password</label>
        <input className="my-2" ref={passwordRef} type="password"></input>
        <label className="fs-6">Firstname</label>
        <input className="my-2" ref={firstnameRef}></input>
        <label className="fs-6">Lastname</label>
        <input className="my-2" ref={lastnameRef}></input>
        <label className="fs-6">Email</label>
        <input className="my-2" type="email" ref={emailRef}></input>
      </div>
      <div className="text-center">
        <button onClick={signup} type="button" className="btn btn-primary">
          SignUp
        </button>
      </div>
    </div>
  );
};
