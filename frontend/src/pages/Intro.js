import React from "react";
import Introcss from "./Intro.module.css";

function Intro() {
  return (
    <div className={Introcss.page}>
      <div className={Introcss.cover}>
        <div className="">Enter New Expense</div>
        <input type="text" placeholder="Enter Name" />
        <input type="number" placeholder="Enter Amount" />
        <button>Create Category</button>
      </div>
    </div>
  );
}

export default Intro;
