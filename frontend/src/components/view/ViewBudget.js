import React from "react";
import Viewcss from "./View.module.css";

function ViewBudget({ handleEditClick }) {
  return (
    <>
      <div className={Viewcss.view}>
        <p className={Viewcss.viewparagraph}>Budget: $100</p>
        <button type="button" className="editbtn" onClick={handleEditClick}>
          Edit
        </button>
      </div>
    </>
  );
}

export default ViewBudget;
