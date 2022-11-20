import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div
      className="text-bg-dark p-1 text-secondary fw-semibold"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
        className="text-center"
      >
        <h1 className="px-2">
          <Link
            to="/"
            className="text-secondary"
            style={{ textDecoration: "none" }}
          >
            MK
          </Link>
        </h1>
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
            to="/create-user"
          >
            Create User
          </Link>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
        className="text-center"
      >
        <div className="px-3 fs-5">My Name</div>
        <div className="px-3 fs-5">
          <Link
            style={{ textDecoration: "none" }}
            className="text-secondary"
            to="/logout"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
