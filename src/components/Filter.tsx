import React from "react";

const Filter = (props: { head?: string }) => {
  return (
    <div className="d-flex align-items-center mt-1">
      <input
        type="text"
        className="form-control p-1 border-secondary border-end-0 rounded-0 border-opacity-25"
        id={props.head ? props.head : "username"}
      />
      <div className="material-symbols-outlined py-1 text-end border border-secondary border-start-0 h-100 border-opacity-25">
        filter_list
      </div>
    </div>
  );
};

export default Filter;
