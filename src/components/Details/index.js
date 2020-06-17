import React from "react";
import { withRouter, useParams } from "react-router-dom";
import useDataApi from "use-data-api";
import {Col, Spin } from "antd";
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

  const [{ data: description, isLoading: isLoading2, isError: isError2 }] = useDataApi(`https://api.mercadolibre.com/items/${id}/description`, {
    plain_text: [],
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
              <Col style={{textAlign: 'center'}} xs={24} sm={24} md={24} lg={15} xl={15} >
                <img style={{width:'70%'}} alt="logo" src={data.thumbnail} />
                <TitleDescription>Descrição do produto</TitleDescription>
                 <h3>{description.plain_text}</h3> 
              </Col>
              <Col xs={24} sm={24} md={24} lg={9} xl={9} >
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
