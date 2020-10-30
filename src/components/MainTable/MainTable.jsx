import Axios from "axios";
import React, { useEffect, useState } from "react";

const Table = () => {
  const [state, setState] = useState({
    user: [],
  });

  useEffect(() => {
    Axios.get("https://randomuser.me/api/?results=10").then((response) => {
      setState({
        user: response.data.results,
      });
    });
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {state.user.map((user) => {
          return (
            <tr>
              <td>
                <img src={user.picture.thumbnail} alt="userImage" />
              </td>
              <td>
                <p>{user.name.first + " " + user.name.last}</p>
              </td>
              <td>
                <p>{user.email}</p>
              </td>
              <td>
                <p>{user.phone}</p>
              </td>
              <td>
                <p>{user.dob.date.slice(0, 10)}</p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
