import React from "react";

const Checkbox = ({ dash, checkbox, handleDisplayDash }) => {
  return (
    <>
      <li>{dash.name}</li>
      <input
        type="checkbox"
        name={dash.name}
        checked={checkbox}
        onChange={() => handleDisplayDash(dash.array)}
      />
    </>
  );
};

export default Checkbox;
