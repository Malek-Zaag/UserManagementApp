import { Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="p-5 my-5 text-bg-secondary text-center">
        <h1 className="fs-1">User Management App</h1>
        <h2 className="fs-5 pt-4"> Made by MK</h2>
      </div>
      <div className="mx-5 px-5">
        <button type="button" className="btn btn-primary mx-3">
          <Link
            style={{ textDecoration: "none" }}
            className="text-light"
            to="/list-users"
          >
            List Users
          </Link>
        </button>
        <button type="button" className="btn btn-primary mx-3">
          <Link
            style={{ textDecoration: "none" }}
            className="text-light"
            to="/create-user"
          >
            Create User
          </Link>
        </button>
      </div>
    </>
  );
};
