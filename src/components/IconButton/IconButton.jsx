import React from "react";
import If from "../If";

export default props => {
  return (
    <If test={!props.hide}>
      <button
        className={`btn btn-${props.type}`}
        onClick={props.onClick}
        style={{ margin: "1px", width: "40px", animation: "1s ease" }}
      >
        <i className={`fa fa-${props.icon}`} />
      </button>
    </If>
  );
};
