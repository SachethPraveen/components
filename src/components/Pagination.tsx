import React from "react";

const Pagination = () => {
  return (
    <div className="d-flex justify-content-between mt-2">
      <div className="ms-2">Showing Results 5 of 5</div>
      <nav className="me-2" aria-label="...">
        <ul className="pagination pagination-sm ">
          <li className="page-item disabled">
            <span className="page-link h-100 border-0 d-flex align-items-center justify-content-center">
              <span className="material-symbols-outlined fs-6 ">
                arrow_back_ios
              </span>
            </span>
          </li>
          <li className="page-item active">
            <span className="page-link h-100 border-0 rounded-circle text-dark bg-light">
              1
            </span>
          </li>
          <li className="page-item border-0" aria-current="page">
            <span className="page-link h-100 border-0 rounded-circle text-dark">
              2
            </span>
          </li>
          <li className="page-item">
            <a
              className="page-link h-100 border-0 rounded-circle text-dark"
              href="#"
            >
              3
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link h-100 border-0 d-flex align-items-center justify-content-center"
              href="#"
            >
              <span className="material-symbols-outlined fs-6 text-dark">
                arrow_forward_ios
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
