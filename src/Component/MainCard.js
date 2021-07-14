import React from "react";
import logo_5 from "../img/logo_5.png";
import { Card } from "react-bootstrap";

function MainCard(props) {
  return (
    <Card className="p-3 my-3">
      <div className="d-flex justify-content-between align-items-center">
        <Card.Title className="w-50">{props.title}</Card.Title>
        <img src={logo_5} style={{ height: 100, width: 100 }} />
      </div>
      <span style={{ marginTop: -25, marginBottom: 30 }}>Wono Inc</span>
      <span style={{ marginTop: -25, marginBottom: 30 }}>Remote</span>
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ width: "80%" }}
      >
        <div>
          <p>START DATE</p>
          <p>Immediately</p>
        </div>
        <div>
          <p>CTC</p>
          <p>5.2-6LPA</p>
        </div>
        <div>
          <p>APPLY BY</p>
          <p>11Aug'21</p>
        </div>
      </div>
      Fresher Job
      <div>view details</div>
    </Card>
  );
}

export default MainCard;
