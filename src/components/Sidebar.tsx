import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [mini, setMini] = useState(true);
  return (
    <div
      className={mini ? "mini sidebar" : "sidebar"}
      onMouseOver={() => {
        console.log("over");
        setMini((prevMini) => !prevMini);
      }}
      onMouseOut={() => {
        console.log("out");
        setMini((prevMini) => !prevMini);
      }}
    >
      <a href="#">
        <span className="material-symbols-outlined">home</span>
        <span className="icon-text">Home</span>
      </a>
      <br />

      <a href="#">
        <span className="material-symbols-outlined">money</span>{" "}
        <span className="icon-text">Transactions</span>
      </a>
      <br />

      <a href="#">
        <span className="material-symbols-outlined">payments</span>{" "}
        <span className="icon-text">Cards</span>
      </a>
      <br />

      <a href="#">
        <span className="material-symbols-outlined">credit_card</span>{" "}
        <span className="icon-text">Users</span>
      </a>
    </div>
  );
};

export default Sidebar;
