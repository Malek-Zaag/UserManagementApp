import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="text-bg-dark p-1 text-secondary fw-semibold">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
        className="text-center"
      >
        <h1 className="px-2">MK</h1>
        <div className="px-3 fs-5">
          <Link
            style={{ textDecoration: "none" }}
            className="text-secondary"
            to="/"
          >
            Home
          </Link>
        </div>
        <div className="px-3 fs-5">
          <Link
            style={{ textDecoration: "none" }}
            className="text-secondary"
            to="/list-users"
          >
            List Users
          </Link>
        </div>
        <div className="px-3 fs-5">
          <Link
            style={{ textDecoration: "none" }}
            className="text-secondary"
            to="/"
          >
            Create User
          </Link>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
