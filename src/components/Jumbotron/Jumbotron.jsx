import React from "react";
import "./Jumbotron.css";

const Navbar = () => {
  return (
    <div className="jumbotron text-center" id="jumbo">
      <div className="container">
        <h2>Employee Directory</h2>
        <p className="mt-3">
          Click on the carrots to filter by heading or use the search box to
          narrow your results
        </p>
      </div>
    </div>
  );
};

export default Navbar;
