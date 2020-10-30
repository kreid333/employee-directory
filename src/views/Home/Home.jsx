import React from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import MainTable from "../../components/MainTable/MainTable";

const Home = () => {
  return (
    <>
      <Jumbotron />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <MainTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
