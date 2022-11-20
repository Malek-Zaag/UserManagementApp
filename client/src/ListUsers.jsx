import { Navbar } from "./components/Navbar";
import "./index.css";
export const ListUsers = () => {
  return (
    <div className="text-dark">
      <Navbar />
      <h1 style={{ textAlign: "center" }}>List Users</h1>
      <div style={{ textAlign: "end" }} className="m-5">
        <button className="btn btn-primary">Create User</button>
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
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Germany</td>
            <td>Germany</td>
            <td>Germany</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
