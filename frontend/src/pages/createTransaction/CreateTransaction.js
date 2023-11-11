import React, { useRef, useState, useEffect } from "react";
import {
  useAddTransactionMutation,
  useGetTransactionsQuery,
} from "../../features/api/apiSlice";
import CreateTransactioncss from "./CreateTransaction.module.css";

function CreateTransaction() {
  const { data: transactions } = useGetTransactionsQuery();
  const [addTransaction] = useAddTransactionMutation();
  const [value, setValue] = useState([
    {
      category: "",
      type: "",
      name: "",
      amount: 0,
    },
  ]);

  const handleChange = (e) => {
    setValue({
      ...value,
      type: "",
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isFound = false;
    let tempArr = [];
    try {
      tempArr = transactions.filter((a) => a.name === value.name);
      tempArr.map((item) => {
        if (
          value.category === item.category &&
          value.name === item.name &&
          isFound === false
        ) {
          isFound = true;
        }
      });
      if (isFound) {
        window.alert("Duplicate category and transaction found.");
        setValue({
          category: "",
          type: "",
          name: "",
          amount: 0,
        });
      } else {
        setValue({
          ...value,
        });
        await addTransaction(value);
        setValue({
          category: "",
          type: "",
          name: "",
          amount: 0,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={CreateTransactioncss.formStyle}>
      <form>
        <fieldset>
          <legend>
            <span className={CreateTransactioncss.number}></span> Add
            Transaction Info
          </legend>
          <label>
            <p>Category</p>
            <input
              type="text"
              name="category"
              value={value.category}
              onChange={handleChange}
            />
          </label>
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              value={value.name}
              onChange={handleChange}
            />
          </label>
          <label>
            <p>Amount</p>
            <input
              type="number"
              name="amount"
              value={value.amount}
              onChange={handleChange}
            />
          </label>
          <input type="button" value="Submit" onClick={handleSubmit} />
        </fieldset>
      </form>
    </div>
  );
}

export default CreateTransaction;
