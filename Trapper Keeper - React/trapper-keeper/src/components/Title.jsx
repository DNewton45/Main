import React from "react";

function Title(props) {
  return (
    <input
      style={{ visibility: props.focus === true ? "visible" : "hidden" }}
      name="title"
      onChange={props.change}
      value={props.title}
      placeholder="Title"
      rows={props.rowHeight}
    />
  );
}

export default Title;
