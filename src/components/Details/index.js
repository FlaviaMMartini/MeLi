import React, { Fragment, useEffect, useState, useCallback } from "react";
import { Tooltip, Card } from "antd";
import { withRouter, useParams } from "react-router-dom";
import useDataApi from "use-data-api";
import { List, Row, Col, Button,Spin } from "antd";
import SearchProducts from "../SearchProducts";


const Details = () => {

  let { id } = useParams();
  const [{ data, isLoading, isError }, doFetch] = useDataApi(`https://api.mercadolibre.com/items/${id}`, {
    attributes: [],
  });

  useEffect(() => {
    console.log('renderUP');
  });

  return (
    <>
     <SearchProducts/>
    {isError && (
      <Col
        span={24}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <h2>Ops! algo deu errado, verifique sua conexão...</h2>
      </Col>
    )}
    {isLoading ? (
      <Col
        span={24}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <Spin tip="Buscando..." />
      </Col>
    ) : (
      <div> {data.title}</div> 
    )}
</>
  );
};

export default withRouter(Details);
