import React, { useEffect, useRef, useState } from "react";
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
  const myRef = useRef(true);
  const { budgetid } = useParams();
  const { data, isLoading, error } = useGetTransactionsQuery();
  const [colorsArray, setColorsArray] = useState([
    "#e91e63",
    "#9c27b0",
    "#f44336",
    "#039be5",
    "#0097a7",
    "#009688",
    "#ef6c00",
  ]);
  const [fArray, setFArray] = useState([]);
  const [index, setIndex] = useState();
  let categoriesObj = GetCategories();
  let foundCategory = [""];

  useEffect(() => {
    if (myRef.current) {
      myRef.current = false;
      loadRandomColors(0, colorsArray.length - 1);
    }
  }, []);

  foundCategory = categoriesObj.data.filter((el) => el._id === budgetid);
  let title = foundCategory[0].title;
  let myData = data.filter((el) => el.category === title);

  const loadRandomColors = (min, max) => {
    let foundColorsArray = [""];
    let num = 0;
    while (num <= colorsArray.length - 1) {
      let step1 = max - min + 1;
      let step2 = Math.random() * step1;
      let randomIndex = Math.floor(step2) + min;
      foundColorsArray.push(colorsArray[randomIndex]);
      num++;
    }
    foundColorsArray.shift();
    setFArray(foundColorsArray);
    return foundColorsArray;
  };

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
        {myData.map((foundD, index) => (
          <>
            <div
              className={ViewBudgetcss.wrap}
              key={index}
              style={{ background: `${fArray[index]}` }}
            >
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
