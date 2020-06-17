import React, { useState, useEffect, useCallback } from "react";
import { List, Row, Col, Button } from "antd";
import { withRouter } from "react-router-dom";
import {Wrapper, RowCustom} from './styles';

const ListResults = ({ data, history }) => {
  
  const next = (item) => {
    console.log('esse e o history', history);
    console.log(item);
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
            <List.Item  style={{backgroundColor:"#ffffff", padding:'2%'}} onClick={() => next(item.id)}>
              {/* <List.Item.Meta /> */}
              <RowCustom>
                <Col xs={24} sm={24} md={6} lg={6} xl={6} >
              <img width={200} alt="logo" src={item.thumbnail} />
              </Col>
              <Col xs={24} sm={24} md={13} lg={13} xl={13}>
                  <Row>
                  <Col span={8}>
                  {item.price}
                  </Col>
                  <Col span={8}>
                  {item.price}
                  </Col>
                  <Col span={8}>
                  {item.price}
                  </Col>
                  </Row>
              {item.title}
              </Col>
              <Col xs={24} sm={24} md={3} lg={3} xl={3}>
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
