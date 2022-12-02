import React from "react";

const Card = (props: { name?: string; number?: number }) => {
  return (
    <div className="card d-flex flex-row justify-content-around align-items-center">
      <div className="p-2 m-1 w-75">
        <div>{props.name ? props.name : "Detail Name"}</div>
        <div>
          <h1>{props.number ? props.number : 0}</h1>
        </div>
      </div>
      <div className="p-2 m-1">Logo</div>
    </div>
  );
};

export default Card;
