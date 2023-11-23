import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  useGetTransactionsQuery,
  useDeleteTransactionMutation,
} from "../../features/api/apiSlice";
import GetCategories from "../../utilities/GetCategories";
import { Calculate } from "../../utilities/Calculate";
import { UpdateBar } from "../../utilities/UpdateBar";
import RandomColors from "../../utilities/RandomColors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faSleigh } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ViewBudgetcss from "./ViewBudget.module.css";

function ViewBudget() {
  const hasRun = useRef(false);
  let myColors = [];
  let myColorsTwo = [];
  let calculation = [];
  const [deleteTransaction] = useDeleteTransactionMutation();
  const navigate = useNavigate();
  const { budgetid } = useParams();
  const { data } = useGetTransactionsQuery();
  let categoriesObj = GetCategories();
  let foundCategory = [""];
  foundCategory = categoriesObj.data.filter((el) => el._id === budgetid);
  let title = foundCategory[0].title;
  let myData = data.filter((el) => el.category === title);
  myColors = RandomColors();
  myColorsTwo = RandomColors();
  calculation = Calculate(foundCategory, myData);
  let myUpdateBarPercentage = UpdateBar(calculation);

  const deleteItem = async (transactionid) => {
    await deleteTransaction({ id: transactionid });
  };

  return (
    <>
      <div className={ViewBudgetcss.contain}>
        {foundCategory.map((d, index) => (
          <>
            <h1 className={ViewBudgetcss.header}>Category</h1>
            <div
              className={ViewBudgetcss.wrap}
              key={d._id}
              style={{ background: `${myColors[index]}` }}
            >
              <p>Budget Category: {d.title}</p>
              <p>Total: {d.amount}</p>
              <p>Remaining: {calculation[0].remainingAmount}</p>
            </div>
          </>
        ))}
      </div>
      <div className={ViewBudgetcss.contain}>
        <h1 className={ViewBudgetcss.header}>Expenses</h1>
        {myData.map((foundD, index) => (
          <>
            <div
              className={ViewBudgetcss.wrap}
              key={index}
              style={{ background: `${myColorsTwo[index]}` }}
            >
              <p>category: {foundD.category}</p>
              <p>name: {foundD.name}</p>
              <p>amount: {foundD.amount}</p>
              <FontAwesomeIcon
                icon={faEdit}
                className={ViewBudgetcss.edit}
                onClick={() => navigate(`/UpdateTransaction/${foundD._id}`)}
              />
              <FontAwesomeIcon
                icon={faTrash}
                className={ViewBudgetcss.trash}
                onClick={() => {
                  deleteItem(foundD._id);
                }}
              />
            </div>
          </>
        ))}
      </div>
      <p className={ViewBudgetcss.pTitle}>Budget Tracking</p>
      <div className={ViewBudgetcss.containPercentage}>
        <div className={ViewBudgetcss.progress}>
          <div
            style={{ width: `${myUpdateBarPercentage.toFixed(0)}%` }}
            className={ViewBudgetcss.progress__fill}
          >
            <div className={ViewBudgetcss.progress__text}>
              {myUpdateBarPercentage.toFixed(0)}% available
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewBudget;
