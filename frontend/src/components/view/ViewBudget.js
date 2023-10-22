import React from "react";

function ViewBudget({ handleEditClick }) {
  return (
    <>
      <p>Budget: $100</p>
      <button type="button" class="editbtn" onClick={handleEditClick}>
        Edit
      </button>
    </>
  );
}

export default ViewBudget;
