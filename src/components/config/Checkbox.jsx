import React from "react";

const Checkbox = ({ dash, handleDisplayDash }) => {
  return (
    <>
      <li>{dash.name}</li>
      <input type="radio" name="dashboard" value={dash.name} onChange={handleDisplayDash} />
    </>
  );
};

export default Checkbox;
