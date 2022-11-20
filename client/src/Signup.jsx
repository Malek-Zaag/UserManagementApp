export const Signup = () => {
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
        <input className="my-2"></input>
        <label className="fs-6">Password</label>
        <input className="my-2" type="password"></input>
        <label className="fs-6">Firstname</label>
        <input className="my-2"></input>
        <label className="fs-6">Lastname</label>
        <input className="my-2"></input>
        <label className="fs-6">Email</label>
        <input className="my-2" type="email"></input>
      </div>
      <div className="text-center">
        <button type="button" className="btn btn-primary">
          SingUp
        </button>
      </div>
    </div>
  );
};
