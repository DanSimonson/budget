import React, { useEffect, useRef, useState } from "react";
import { useGetCategoriesQuery } from "../../features/api/apiSlice";
import Budgetscss from "./Budgets.module.css";
import { useNavigate } from "react-router-dom";

const Budgets = () => {
  const myRef = useRef(true);
  const { data, isLoading, isSuccess, isError, error } =
    useGetCategoriesQuery();
  const navigate = useNavigate();
  const [colorsArray, setColorsArray] = useState([
    "#e91e63",
    "#9c27b0",
    "#f44336",
    "#039be5",
    "#0097a7",
    "#009688",
    "#ef6c00",
    "#a1887f",
    "#ff5722",
    "#827717",
    "#388e3c",
    "#c62828",
    "#1a237e",
    "#d81b60",
    "#607d8b",
  ]);
  const [budgetArray, setBudgetArray] = useState([]);

  useEffect(() => {
    if (myRef.current) {
      myRef.current = false;
      loadRandomColors(0, colorsArray.length - 1);
    }
  }, []);

  if (error) {
    return (
      <>
        console.log('error: ', error)
        <div>Oops, an error occured:</div>;
      </>
    );
  }

  /* methods to be refactored later for reusability */

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
    setBudgetArray(foundColorsArray);
    return foundColorsArray;
  };

  /* end of methods to be refactored later for reusability */

  return (
    <>
      <div>
        <h1 className={Budgetscss.header}>Existing budgets</h1>
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <div className={Budgetscss.contain}>
            {data.map((d, index) => (
              <>
                <div
                  className={Budgetscss.wrap}
                  key={d._id}
                  style={{ background: `${budgetArray[index]}` }}
                >
                  <p>Budget Name: {d.title}</p>
                  <p>Amount: {d.amount}</p>
                  <button
                    key={d._id}
                    className={Budgetscss.button25}
                    role="button"
                    onClick={() => navigate(`/ViewBudget/${d._id}`)}
                  >
                    View Details
                  </button>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Budgets;
