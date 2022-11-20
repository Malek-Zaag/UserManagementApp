import { Navbar } from "./components/Navbar";

export const CreateUser = () => {
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
        <input className="my-2"></input>
        <label className="fs-6">Password</label>
        <input className="my-2" type="password"></input>
        <label className="fs-6">Firstname</label>
        <input className="my-2"></input>
        <label className="fs-6">Lastname</label>
        <input className="my-2"></input>
        <label className="fs-6">Email</label>
        <input className="my-2" type="email"></input>
        <label className="fs-6">Social Security Number</label>
        <input className="my-2" type="number"></input>
      </div>
      <div className="px-5 mx-5">
        <button type="button" className="btn btn-primary">
          Add
        </button>
        <button type="button" className="btn btn-danger mx-2">
          Cancel
        </button>
      </div>
    </div>
  );
};
