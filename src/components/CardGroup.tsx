import React from "react";
import Card from "./Card";

const CardGroup = () => {
  return (
    <div className="container text-center">
      <div className="row mb-3">
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
