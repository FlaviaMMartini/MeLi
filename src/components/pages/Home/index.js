import React, { useEffect, useState, Fragment } from "react";
import "antd/dist/antd.css";
import { withRouter } from "react-router-dom";
import SearchProducts from '../../SearchProducts';
import ListResults from '../../ListResults';


const Home = (data) => {
  return (
      <>
       <SearchProducts/>
       {/* <ListResults data={data} /> */}
       </>
  );
};

export default  withRouter(Home);
