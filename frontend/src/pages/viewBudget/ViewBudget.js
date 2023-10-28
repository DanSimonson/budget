import React from "react";
import { useParams } from "react-router-dom";
import { useGetTransactionsQuery } from "../../features/api/apiSlice";
import GetCategories from "../../utilities/GetCategories";
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
      <p>hello world</p>
      <div className={ViewBudgetcss.contain}>
        {foundCategory.map((d) => (
          <div className={ViewBudgetcss.wrap} key={d._id}>
            <p>Budget Title: {d.title}</p>
            <p>Amount: {d.amount}</p>
          </div>
        ))}
      </div>
      <div className={ViewBudgetcss.contain}>
        {myData.map((foundD, index) => (
          <div className={ViewBudgetcss.wrap} key={index}>
            <p>category: {foundD.category}</p>
            <p>name: {foundD.name}</p>
            <p>type: {foundD.type}</p>
            <p>amount: {foundD.amount}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ViewBudget;
