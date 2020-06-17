import React, { useState, useEffect, useCallback } from "react";
import { List, Row, Col, Button } from "antd";
import { withRouter } from "react-router-dom";
import { Wrapper, RowCustom, Title, TitlePrice, TextCurrency } from './styles';
import Shipping from '../../assets/ic_shipping.png';

const ListResults = ({ data, history }) => {
  const[category,setCategory]=useState('');

  const next = (item) => {
    history.push({ pathname: `/details/${item}` });
    history.go({ pathname: `/details/${item}` });
  };

  return (
    <Wrapper>
      <List
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 4,
        }}
        itemLayout="horizontal"
        dataSource={data.results}
        renderItem={(item) => (
          <List.Item style={{ backgroundColor: "#ffffff", padding: '2%' }} onClick={() => next(item.id)}>
            <RowCustom>
              <Col xs={24} sm={24} md={7} lg={7} xl={7} >
                <img width={200} alt="logo" src={item.thumbnail} />
              </Col>
              <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                <Row>
                  <Col span={2}>
                    <TextCurrency>$</TextCurrency>
                  </Col>
                  <Col span={5}>
                    <TitlePrice>{item.price}</TitlePrice>
                  </Col >{item.shipping.free_shipping && (<Col style={{ marginTop: '3%' }} span={5}>
                    <img src={Shipping} />
                  </Col>)}
                </Row>
                <Title>{item.title}</Title>
              </Col>
              <Col xs={24} sm={24} md={3} lg={3} xl={3} style={{ marginTop: '7%' }}>
                {item.address.state_name}
              </Col>
            </RowCustom>
          </List.Item>
        )}
      />
    </Wrapper>
  );
};

export default withRouter(ListResults);
