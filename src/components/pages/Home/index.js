import React from "react";
import "antd/dist/antd.css";
import { withRouter } from "react-router-dom";
import SearchProducts from '../../SearchProducts';

const Home = () => {
  return (
       <SearchProducts/>
  );
};

export default  withRouter(Home);
