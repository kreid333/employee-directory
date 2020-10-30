import React from "react";

const Table = () => {
  return (
    <table class="table">
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
        <tr>
          <td>Image</td>
          <td>Mark</td>
          <td>mark@gmail.com</td>
          <td>678-200-4931</td>
          <td>09/24/89</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
