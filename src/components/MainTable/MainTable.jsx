import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./MainTable.css";

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

  const handleClick = () => {
    const sortedData = state.user.sort(function (a, b) {
      var nameA = a.name.first.toUpperCase();
      var nameB = b.name.first.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    setState({
      user: sortedData,
    });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">
            <span id="nameColumn" onClick={handleClick}>
              Name
            </span>
          </th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {state.user.map((user) => {
          return (
            <tr key={user.login.username}>
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
