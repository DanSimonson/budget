import React, { useRef, useState, useEffect } from "react";
import {
  useGetTransactionsQuery,
  useGetTransactionQuery,
} from "../../features/api/apiSlice";
import { useParams } from "react-router-dom";
import UpdateBudgetcss from "./UpdateBudget.module.css";

function Update() {
  const myRef = useRef();
  const [value, setValue] = useState([]);
  const { budgetid } = useParams();
  const { data } = useGetTransactionQuery(budgetid);
  console.log("value: ", value);
  if (typeof value != "undefined") {
    if (value.length != 0) {
      console.log("value: ", value);
    }
  }

  useEffect(() => {
    fetchData();
  }, [value, setValue]);

  const fetchData = () => {
    setValue(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    //e.preventDefault();
    console.log("e.target.value: ", e.target.value);

    setValue({
      ...value,
      [e.target.name]: e.target.value,
      // type: myData.type,
      // amount: myData.amount,
      // category: myData.category,
    });
  };

  return (
    <>
      <div className={UpdateBudgetcss.formStyle}>
        <form>
          <fieldset>
            <legend>
              <span className={UpdateBudgetcss.number}></span> Budget Info
            </legend>

            <input
              type="text"
              name="type"
              value={typeof value != "undefined" && value.type}
              onChange={handleChange}
            />
            {/* <input
              type="number"
              name="amount"
              value={value.amount}
              // onChange={handleChange}
            />
            <input
              type="text"
              name="category"
              value={value.category}
              // onChange={handleChange}
            />   */}
            <input type="submit" />
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default Update;
