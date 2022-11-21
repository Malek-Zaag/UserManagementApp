import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Config from "./config.js";

export const CreateUser = () => {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const ssnRef = useRef();

  const addUser = (e) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        firstname: firstnameRef.current.value,
        lastname: lastnameRef.current.value,
        email: emailRef.current.value,
        ssn: ssnRef.current.value,
        id: localStorage.getItem("id"),
      }),
    };
    e.preventDefault();
    fetch(`${Config.API || ""}/api/create-user `, requestOptions)
      .then((response) => {
        if (response.status === 200) {
          navigate("/list-users");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="fs-1 fw-bold text-center py-3">Create User</div>
      <hr></hr>
      <div
        className="text-left fw-semibold py-2 px-5 mx-5"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <label className="fs-6">Username</label>
        <input className="my-2" ref={usernameRef}></input>
        <label className="fs-6">Password</label>
        <input className="my-2" type="password" ref={passwordRef}></input>
        <label className="fs-6">Firstname</label>
        <input className="my-2" ref={firstnameRef}></input>
        <label className="fs-6">Lastname</label>
        <input className="my-2" ref={lastnameRef}></input>
        <label className="fs-6">Email</label>
        <input className="my-2" type="email" ref={emailRef}></input>
        <label className="fs-6">Social Security Number</label>
        <input className="my-2" type="number" ref={ssnRef}></input>
      </div>
      <div className="px-5 mx-5">
        <button onClick={addUser} type="button" className="btn btn-primary">
          Add
        </button>
        <button type="button" className="btn btn-danger mx-2">
          <Link
            to="/list-users"
            className="text-light"
            style={{ textDecoration: "none" }}
          >
            Cancel
          </Link>
        </button>
      </div>
    </div>
  );
};
