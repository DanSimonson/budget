import React from "react";
import ViewBudgetcss from "./ViewBudget.module.css";
import { useParams } from "react-router-dom";

function ViewBudget() {
  const { budgetid } = useParams();
  console.log("budgetid: ", budgetid);
  return <div>ViewBudget</div>;
}

export default ViewBudget;
