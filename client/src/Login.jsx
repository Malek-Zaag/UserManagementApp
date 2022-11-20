import { Link } from "react-router-dom";

export const Login = () => {
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
        <input className="my-2"></input>
        <label className="">Password</label>
        <input className="mt-2" type="password"></input>
      </div>
      <div className="text-center">
        <button type="button" className="btn btn-primary">
          Login
        </button>
        <span className="mx-3">
          <Link to="/signup">Singup for free ?</Link>
        </span>
      </div>
    </div>
  );
};
