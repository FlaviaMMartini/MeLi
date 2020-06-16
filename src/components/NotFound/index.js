import React from "react";
import { withRouter } from "react-router-dom";


const NotFound = () => {
  return (
    <>
   <h1>Esta página não existe.</h1>
    </>
  );
};

export default withRouter(NotFound);
