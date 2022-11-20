import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    navigate("/login");
  };
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
        <div className="px-3 fs-5">{localStorage.getItem("name")}</div>
        <div className="px-3 fs-5">
          <button
            type="button"
            className="btn btn-dark text-secondary fs-5 fw-semibold"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
