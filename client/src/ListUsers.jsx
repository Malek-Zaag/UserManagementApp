import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./index.css";
import Config from "./config.js";

export const ListUsers = () => {
  const [users, setUsers] = useState([]);

  const delete_user = (id) => {
    const requestOptions = {
      method: "DELETE",
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
      }),
    };
    fetch(`${Config.API}/api/delete-user`, requestOptions)
      .then((response) => {})
      .catch((err) => {});
  };
  useEffect(() => {
    fetch(`${Config.API}/api/list-users`)
      .then((response) => {
        if (response.status === 200) {
          setTimeout(() => {}, 1000);
          response.json().then((res) => {
            setUsers(res);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="text-dark">
      <Navbar />
      <h1 style={{ textAlign: "center" }}>List Users</h1>
      <div style={{ textAlign: "end" }} className="m-5">
        <button className="btn btn-primary">
          <Link
            to="/create-user"
            className="text-light"
            style={{ textDecoration: "none" }}
          >
            Create User
          </Link>
        </button>
      </div>
      <div>
        <table
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <tr>
            <th>userid</th>
            <th>username</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>email</th>
            <th>ssn</th>
            <th>action</th>
          </tr>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.ssn}</td>
                <td key={user._id}>
                  <button
                    onClick={() => delete_user(user._id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
