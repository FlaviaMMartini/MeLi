import React, { useEffect, useState, Fragment } from "react";
import ListResults from "../ListResults";
import { Row, Col } from "antd";
import { Input, Button } from "antd";
import Logo_ML from "../../../src/assets/Logo_ML.png";
import { Wrapper, Logo, Text, Header } from "./styles";
import "antd/dist/antd.css";
import useDataApi from "use-data-api";
import { Spin } from "antd";
import { withRouter } from "react-router-dom";

const { Search } = Input;

const SearchProducts = (history) => {
  const [query, setQuery] = useState("");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    `https://api.mercadolibre.com/sites/MLA/search?q=:${query}`,
    {
      results: [],
    }
  );

  return (
    <Fragment>
      <form
        onSubmit={(event) => {
          doFetch(`https://api.mercadolibre.com/sites/MLA/search?q=:${query}`);

          event.preventDefault();
        }}
      >
        <Header>
          <Col span={4}>
            <Logo src={Logo_ML} alt="logo" />
          </Col>
          <Col span={20}>
            <Search
              placeholder="Nunca dejes de buscar"
              type="text"
              size="large"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </Col>
        </Header>
      </form>
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
          <Text>Ops! algo deu errado, verifique sua conexão...</Text>
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
      <ListResults data={data}/>
      )}
    </Fragment>
  );
};

export default  withRouter(SearchProducts);
