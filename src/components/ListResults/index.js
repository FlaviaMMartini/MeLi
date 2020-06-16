import React, { useState, useEffect, useCallback } from "react";
import { List, Row, Col, Button } from "antd";
import { withRouter } from "react-router-dom";

const ListResults = ({ data, history }) => {
  
  const next = (item) => {
    console.log('esse e o history', history);
    console.log(item);
    history.push({ pathname: `/details/${item}` });
    history.go({ pathname: `/details/${item}` });
  };
  return (
    <>
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
            <List.Item onClick={() => next(item.id)}>
              <List.Item.Meta />
              <img width={200} alt="logo" src={item.thumbnail} />
              {item.price}
              {item.title}
              {item.condition}
              {item.address.state_name}
            </List.Item>
          )}
        />
        </>
  );
};

export default withRouter(ListResults);
