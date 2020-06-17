import React, { Fragment, useEffect, useState, useCallback } from "react";
import { Tooltip, Card } from "antd";
import { withRouter, useParams } from "react-router-dom";
import useDataApi from "use-data-api";
import { List, Row, Col, Button, Spin } from "antd";
import SearchProducts from "../SearchProducts";
import {
  Wrapper,
  RowCustom,
  TitleDescription,
  Title, TitlePrice,
  ButtonCustom
} from "./styles";


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
      <SearchProducts />
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
          <Wrapper>
            <RowCustom>
              <Col style={{textAlign: 'center'}} xs={24} sm={24} md={15} lg={15} xl={15} >
                <img width={400} alt="logo" src={data.thumbnail} />
                <TitleDescription>Descrição do produto</TitleDescription>
                <h3>{data.description}</h3>
              </Col>
              <Col xs={24} sm={24} md={9} lg={9} xl={9} >
                <span> {data.condition}&nbsp;-&nbsp;{data.sold_quantity}&nbsp;vendidos&nbsp;</span>
                <Title>{data.title}</Title>
                <TitlePrice>$ {data.price}</TitlePrice>
                <ButtonCustom type="primary" >
                  Comprar
                </ButtonCustom>
              </Col>
            </RowCustom>
          </Wrapper>
        )}
    </>
  );
};

export default withRouter(Details);
