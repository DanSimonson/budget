import React from "react";
import { useParams } from "react-router-dom";
import { useGetTransactionsQuery } from "../../features/api/apiSlice";
import GetCategories from "../../utilities/GetCategories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import ViewBudgetcss from "./ViewBudget.module.css";

function ViewBudget() {
  const { budgetid } = useParams();
  const { data, isLoading, error } = useGetTransactionsQuery();
  let categoriesObj = GetCategories();
  let foundCategory = [];

  foundCategory = categoriesObj.data.filter((el) => el._id === budgetid);
  let title = foundCategory[0].title;
  let myData = data.filter((el) => el.category === title);

  return (
    <>
      <div className={ViewBudgetcss.contain}>
        {foundCategory.map((d) => (
          <>
            <h1 className={ViewBudgetcss.header}>Category</h1>
            <div className={ViewBudgetcss.wrap} key={d._id}>
              <p>Budget Title: {d.title}</p>
              <p>Amount: {d.amount}</p>
            </div>
          </>
        ))}
      </div>
      <div className={ViewBudgetcss.contain}>
        <h1 className={ViewBudgetcss.header}>Expenses</h1>
        {myData.map((foundD) => (
          <>
            <div className={ViewBudgetcss.wrap} key={foundD._id}>
              <p>category: {foundD.category}</p>
              <p>name: {foundD.name}</p>
              <p>type: {foundD.type}</p>
              <p>amount: {foundD.amount}</p>
              <FontAwesomeIcon icon={faEdit} className={ViewBudgetcss.edit} />
              <FontAwesomeIcon icon={faTrash} className={ViewBudgetcss.trash} />
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default ViewBudget;
