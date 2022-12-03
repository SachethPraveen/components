import React from "react";

const Header = (props: { name?: string }) => {
  return (
    <div
      className="navbar d-flex justify-content-end bg-white w-100"
      style={{ zIndex: 2 }}
    >
      <div className="dropdown me-3">
        <button
          className="btn bg-white border-0 dropdown-toggle d-flex align-items-center"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="material-symbols-outlined">person</span>
          {props.name ? props.name : "User"}
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
