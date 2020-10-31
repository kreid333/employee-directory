import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./MainTable.css";

const Table = () => {
  const [state, setState] = useState({
    user: [],
    search: "",
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

  const handleInputChange = (event) => {
    const { value } = event.target;
    setState({
      ...state,
      search: value,
    });
  };

  const filteredSearch = state.user.filter((user) => {
    return user.name.first.indexOf(state.search) !== -1;
  });

  const displayedUsers = function() {
    if (state.search) {
      return filteredSearch;
    } else {
      return state.user;
    }
  }

  return (
    <>
      <div className="text-center">
        <input
          type="text"
          name="employee"
          value={state.search}
          placeholder="Search"
          onChange={handleInputChange}
        />
      </div>
      <br />
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
          {displayedUsers().map((user) => {
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
    </>
  );
};

export default Table;
