// src/components/App.js
import React from "react";
import List from "./List";
import Form from "./Form";
import { Grid, Row, Col } from "react-bootstrap";

const App = () => (
  <div>
    <Grid>
      <Row className="show-grid">
        <Col sm={4}>
          <Form />
        </Col>
        <Col sm={6}>
          <div className="item-list">
            <h2>Item List</h2>
            <List />
          </div>
        </Col>
        <Col sm={2}>
          <div />
        </Col>
      </Row>
    </Grid>

    <div />
  </div>
);

export default App;
